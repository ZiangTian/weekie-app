package com.weekie.aspect;

import com.weekie.annotation.AutoFill;
import com.weekie.constant.AutoFillConstant;
import com.weekie.context.BaseContext;
import com.weekie.enumeration.OperationType;

import java.lang.reflect.Method;
import java.time.LocalDateTime;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
/**
 * 自定义切面实现公共字段的自动填充
 */

@Aspect
@Component
@Slf4j
public class AutoFillAspect {
    /**
     * 切入点
     */
    @Pointcut("execution(* com.weekie.mapper.*.*(..)) && @annotation(com.weekie.annotation.AutoFill))")
    public void autoFillPointCut(){}

    /**
     * 前置通知,为新增和修改操作的公共字段自动填充
     */
    @Before("autoFillPointCut()")
    public void autoFill(JoinPoint joinPoint){
        log.info("开始进行自动填充公共字段...");
        //获取方法上的注解,进而获取数据库操作类型
        OperationType operationType = ((MethodSignature) joinPoint.getSignature()).getMethod().getAnnotation(AutoFill.class).value();
        //获取方法的参数
        Object[] args = joinPoint.getArgs();
        if(args == null || args.length == 0 ){
            log.error("方法参数为空,无法进行自动填充...");
            return;
        }
        //参数实体类
        Object entity = args[0];
        //获取自动填充数据
        Long currentId = BaseContext.getCurrentId();
        LocalDateTime currentTime = LocalDateTime.now();
        //反射获取当前类是否具备设置公共字段的方法
        if(operationType == OperationType.INSERT){
            try {
                Method setCreateTime = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_CREATE_TIME, LocalDateTime.class);
                Method setUpdateTime = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_TIME, LocalDateTime.class);
                Method setCreateUser = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_CREATE_USER, Long.class);
                Method setUpdateUser = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_USER, Long.class);

                //通过反射设置公共字段
                setCreateTime.invoke(entity,currentTime);
                setUpdateTime.invoke(entity,currentTime);
                setCreateUser.invoke(entity,currentId);
                setUpdateUser.invoke(entity,currentId);
            }
            catch(Exception e){
                log.error("反射设置公共字段失败:{}",e.getMessage());
            }

        }else if(operationType == OperationType.UPDATE){
            try {
                Method setUpdateTime = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_TIME, LocalDateTime.class);
                Method setUpdateUser = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_USER, Long.class);
                //通过反射设置公共字段
                setUpdateTime.invoke(entity,currentTime);
                setUpdateUser.invoke(entity,currentId);
            }
            catch(Exception e){
                log.error("反射设置公共字段失败:{}",e.getMessage());
            }
        }

    }

}
