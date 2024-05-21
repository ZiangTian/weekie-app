package com.weekie.service.impl;

import com.weekie.constant.JwtClaimsConstant;
import com.weekie.context.BaseContext;
import com.weekie.entity.User;
import com.weekie.mapper.UserMapper;
import com.weekie.properties.JwtProperties;
import com.weekie.result.Result;
import com.weekie.service.UserService;
import com.weekie.utils.JwtUtil;
import com.weekie.vo.UserVO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;
    @Autowired
    JwtProperties jwtProperties;
    @Override
    public UserVO login(String username, String password) throws Exception {
        User user= userMapper.login(username);
        if(user==null) throw new Exception("账号不存在！");
        if(!user.getPassword().equals(password)) throw new Exception("密码错误!");
        Map<String, Object> claims = new HashMap<>();
        claims.put(JwtClaimsConstant.EMP_ID, user.getId());
        String token = JwtUtil.createJWT(
                jwtProperties.getAdminSecretKey(),
                jwtProperties.getAdminTtl(),
                claims);

        UserVO userVO = UserVO.builder()
                .id(user.getId())
                .userName(user.getUserName())
                .lastName(user.getLastName())
                .firstName(user.getFirstName())
                .email(user.getEmail())
                .password(user.getPassword())
                .jwt(token)
                .build();
        return userVO;
    }

    @Override
    public UserVO read() {
        int id= Math.toIntExact(BaseContext.getCurrentId());
        User user=userMapper.read(id);
        UserVO userVO=new UserVO();
        BeanUtils.copyProperties(user,userVO);
        return userVO;
    }

    @Override
    public void change(User user) {
        user.setId(Math.toIntExact(BaseContext.getCurrentId()));
        user.setUpdateTime(LocalDateTime.now());
    userMapper.change(user);
    }
}
