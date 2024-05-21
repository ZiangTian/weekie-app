#  禄禄鱼的苍穹外卖开发日志(持续更新中)

> :star2: 本项目来自b站黑马程序员[《苍穹外卖》](https://www.bilibili.com/video/BV1TP411v7v6)项目实战课程,该日志用于记录笔者学习项目的历程,并将知识点和细节总结下来,方便后来人更好地学习该项目

## Day01 2023.12.16 项目环境搭建

### 软件开发整体介绍

- 软件开发流程

​	<img src="C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231216214809977.png" alt="image-20231216214809977" style="zoom:50%;" />

- 角色分工![image-20231216214920301](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231216214920301.png)

- 软件环境![image-20231216215058185](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231216215058185.png)

### 苍穹外卖项目介绍

- 项目介绍![image-20231216215809961](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231216215809961.png)

- 功能架构![image-20231216215846167](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231216215846167.png)

- 产品原型

    > 见资料中的产品原型部分

- 技术选型

    ![image-20231216224816976](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231216224816976.png)

### 环境搭建

#### 前端

![image-20231216235629778](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231216235629778.png)

#### 后端

![image-20231216235815017](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231216235815017.png)

![image-20231217000107672](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217000107672.png)

> 为什么用现成的初始代码?因为咱打工人大多都是接手公司祖传的屎山,不用自己从头造(

#### 初始git仓库并推送

- 在项目根目录初始化git仓库![image-20231217004611984](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217004611984.png)

- 在gitee创建仓库并关联本地和远程分支,然后推送![image-20231217005234157](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217005234157.png)

> 账号密码可以在个人主页中查看,一般是绑定的手机号

- 完成推送![image-20231217005450621](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217005450621.png)

#### 数据库环境搭建

> 在数据库控制台执行建表sql脚本即可

![image-20231217005711803](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217005711803.png)

![image-20231217010047160](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217010047160.png)

> 其实直接把脚本拖到idea窗口在idea执行就可以了(自从用了idea,navicat什么的已经躺着吃灰了(笑))

#### 前后端联调

- maven父工程编译测试:成功编译![image-20231217010823283](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217010823283.png)

- java,启动!![image-20231217011007044](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217011007044.png)

> 记得在application-dev.yml更改成自己数据库的用户名和密码啊(啊,我的密码暴露了...)
>
> :question: 为什么有两个yml配置文件?
>
> -> dev由于每个开发人员开发环境不同,需要进行不同配置,而application.yml是项目的通用配置
>
>
> ![image-20231217011257201](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217011257201.png)

- 联调成功![image-20231217011523338](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217011523338.png)

#### Nginx配置

##### Nginx反向代理和负载均衡

> 将前端发送的动态请求由nginx转发到后端服务器

![image-20231217013828877](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217013828877.png)

![image-20231217014008918](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217014008918.png)

###### 反向代理的好处

- 提高访问速度,可以在nginx做缓存

- 进行`负载均衡`

    > :bookmark_tabs: `负载均衡`:就是把大量的请求按照指定方式分配给集群中的每一台服务器

- 保证后端服务安全

    > 后端部署在公司内网,前端不能直接访问,需要通过网关反向代理转发访问![image-20231217014516692](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217014516692.png)

###### 反向代理和负载均衡的配置

> 配置文件位置:![image-20231217015148932](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217015148932.png)

![image-20231217014718589](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217014718589.png)

![image-20231217014821353](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217014821353.png)

![image-20231217014939275](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217014939275.png)

#### 完善登录功能

> :exclamation: 密码明文存储的话安全性太低,需要对密码进行加密处理
>
> 可以使用md5加密方式(单向加密) ![image-20231217153455109](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217153455109.png)

-  修改employee表中密码为加密后的密码![image-20231217155745340](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217155745340.png)

- 在对应位置添加加密前端发送过来密码的代码

    ```java
    //sky-server/src/main/java/com/sky/service/impl/EmployeeServiceImpl.java
    
    //将用户输入的密码进行MD5加密，然后再与数据库中的密码进行比对
    password = DigestUtils.md5DigestAsHex(password.getBytes());
    ```

### 导入接口文档

#### 前后端分离开发流程

![image-20231217160102925](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217160102925.png)

#### 操作步骤

> :bell: 这里使用yapi平台,也可以使用Apifox平替

1. 登录Yapi平台,添加用户端和管理端两个项目![image-20231217160652575](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217160652575.png)

2. 在项目数据管理导入接口json文件![image-20231217160945728](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217160945728.png)

    

### Swagger接口测试工具

#### 介绍

![image-20231217161409836](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217161409836.png)

#### 使用方式

1. 导入knife4j maven坐标

2. 配置类加入knife4j相关配置(初始工程自带)

    ```java
    //WebMvcConfiguration.java    
    /**
         * 通过knife4j生成接口文档
         * @return
         */
        @Bean
        public Docket docket() {
            log.info("开始生成接口文档...");//新增
            ApiInfo apiInfo = new ApiInfoBuilder()
                    .title("苍穹外卖项目接口文档")
                    .version("2.0")
                    .description("苍穹外卖项目接口文档")
                    .build();
            Docket docket = new Docket(DocumentationType.SWAGGER_2)
                    .apiInfo(apiInfo)
                    .select()
                    .apis(RequestHandlerSelectors.basePackage("com.weekie.controller"))
                    .paths(PathSelectors.any())
                    .build();
            return docket;
        }
    ```

    

3. 设置静态资源映射,否则接口文档页面无法访问

    ```java
    //WebMvcConfiguration.java    
    /**
         * 设置静态资源映射
         * @param registry
         */
    	@Override//这里初始工程并没有添加这个注解,为了可读性,笔者加上了
        protected void addResourceHandlers(ResourceHandlerRegistry registry) {
           	log.info("开始设置静态资源映射...");//新增
            registry.addResourceHandler("/doc.html").addResourceLocations("classpath:/META-INF/resources/");
            registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
        }
    }
    ```

4. 请求接口文档生成路径![image-20231217163436589](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217163436589.png)

5. 通过调试界面发送请求测试

> 两个工具定位不同,都有一定需要![image-20231217164054625](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217164054625.png)

#### 常用注解

> :bell: 通过注解可以控制生成的接口文档,让文档具有更好的可读性

| 注解              | 说明                                                   |
| ----------------- | ------------------------------------------------------ |
| @Api              | 用在类上，例如controller，表示对类的说明               |
| @ApiModel         | 用在类上，例如entity、DTO、VO                          |
| @ApiModelProperty | 用在属性上，描述属性信息                               |
| @ApiOperation     | 用在方法上，例如Controller的方法，说明方法的用途、作用 |

```java
//EmployeeController.java
@RestController
@RequestMapping("/admin/employee")
@Slf4j
@Api(tags = "员工相关接口")
public class EmployeeController{
    
    @PostMapping("/login")
    @ApiOperation(value = "员工登录")
    public Result<EmployeeLoginVO> login(@RequestBody EmployeeLoginDTO employeeLoginDTO){.}
    ...
    @ApiOperation(value="员工退出")
    
}

//EmployeeLoginDTO.java(初始自带)
@Data
@ApiModel(description = "员工登录时传递的数据模型")
public class EmployeeLoginDTO implements Serializable {

    @ApiModelProperty("用户名")
    private String username;

    @ApiModelProperty("密码")
    private String password;

}
//EmployeeLoginVO.java(初始自带)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(description = "员工登录返回的数据格式")
public class EmployeeLoginVO implements Serializable {

    @ApiModelProperty("主键值")
    private Long id;

    @ApiModelProperty("用户名")
    private String userName;

    @ApiModelProperty("姓名")
    private String name;

    @ApiModelProperty("jwt令牌")
    private String token;

}
```

 可以看到成功显示

![image-20231217165331062](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217165331062.png)

## Day02 2023.12.18 员工管理实现

### 新增员工

#### 需求分析和设计

> 返回json格式,封装成Result

| 员工字段 | 注意点                            |
| -------- | --------------------------------- |
| 账号     | 唯一的                            |
| 员工姓名 |                                   |
| 手机号   | 需要校验,纯数字,合法11位          |
| 性别     | 男和女选择                        |
| 身份证号 | 身份证号为合法18位身份证号码      |
| 密码     | 默认为123456,不在添加员工页面设置 |

> 本项目规定:
>
> `管理端`发出的请求,统一使用/admin作为前缀
>
> `用户端`统一用/user作为前缀

#### 代码开发

##### 根据新增员工接口设计对应DTO

> 当前端提交的数据和实体类中对应的属性差别比较大时,建议使用DTO[^1]来封装数据(比如pojo里面定义了许多前端不需要的字段,可以通过DTO进行精简过滤,并且后续如果想修改前端返回数据的时候也不会破坏底层类的设计)![image-20231217183823983](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217183823983.png)

##### 代码实现

> :bookmark_tabs:`JavaDoc`
> 为了可读性,推荐在方法前用javadoc规范格式注释,[Javadoc简明使用教程](https://www.cnblogs.com/linj7/p/14339381.html)
>
> (ctrl+alt+Q)可以将javadoc源码渲染,方便阅读

- Controller层

    ```java
    	/**
         * 新增员工
         *
         * @param employeeDTO
         * @return
         */
    @PostMapping
    @ApiOperation(value = "新增员工")
    public Result<String> save(@RequestBody EmployeeDTO employeeDTO){
        log.info("新增员工：{}", employeeDTO);
        //调用service层新增员工
        employeeService.save(employeeDTO);
        return null;
    }
    ```

    

- Service层

    ```java
    //接口
        /**
         * 新增员工
         * @param employeeDTO
         */
        void save(EmployeeDTO employeeDTO);
    //实现
        @Override
        public void save(EmployeeDTO employeeDTO) {
            Employee employee = new Employee();
            //使用对象属性拷贝一次性将employeeDTO中的数据拷贝到employee中
            BeanUtils.copyProperties(employeeDTO, employee);
            //设置账号状态正常
            employee.setStatus(StatusConstant.ENABLE);
            //设置密码.默认密码为123456
            employee.setPassword(DigestUtils.md5DigestAsHex(PasswordConstant.DEFAULT_PASSWORD.getBytes()));
            //设置创建时间和更新时间
            employee.setCreateTime(LocalDateTime.now());
            employee.setUpdateTime(LocalDateTime.now());
            //获取当前登录用户的id
            //TODO : 动态获取当前登录用户的id
            employee.setCreateUser(10L);
            employee.setUpdateUser(10L);
            //调用mapper层新增员工
            employeeMapper.insert(employee);
        }
    
    ```

- Mapper层

    ```java
        /**
         * 新增员工
         * @param employee
         */
        @Insert("insert into employee (name, username, password, phone, sex, id_number, create_time, update_time, create_user, update_user, status) values "
            + "(#{name}, #{username}, #{password}, #{phone}, #{sex}, #{idNumber}, #{createTime}, #{updateTime}, #{createUser}, #{updateUser}, #{status})")
        void insert(Employee employee);
    
    ```

    

[^1]: 数据传输对象,通常用于各层之间以及前端后端之间传递数据

##### 功能测试

> 由于开发阶段前端和后端是并行开发的,暂时无法进行前后端联调,所以开发阶段后端测试主要以接口文档测试为主

- 进行登录测试以获取token,并存储为全局参数,方便后续测试通过jwt校验

    ![image-20231217195027613](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217195027613.png)

- 接口文档测试成功

    ![image-20231217200649166](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217200649166.png)

- 前后端联调

    > 成功(忘截图了...)

##### 代码完善

> 程序存在的问题
>
> 1. 录入用户名已存在,抛出异常没有处理
> 2. 新增员工时,创建人和修改人id设置为了固定值

###### 处理用户名已存在异常

- 提供全局处理类的重载方法

    > 需要手动创建用户名已存在的字符串常量信息

```java
    /**
     * 捕获SQL异常
     * @param ex
     * @return
     */
	@ExceptionHandler
    public Result exceptionHandler(SQLIntegrityConstraintViolationException ex){
        String message = ex.getMessage();
        //Duplicate entry 'admin' for key 'username'
        if(message.contains("Duplicate entry")){
            String[] split = message.split(" ");
            String username = split[2];
            String msg = username+ MessageConstant.ALREADY_EXISTS;
            return Result.error(msg);
        }else{
            return Result.error(MessageConstant.UNKNOWN_ERROR);
        }
    }
```

测试成功

![image-20231217203208470](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217203208470.png)

###### 动态获取登录人id

> ![image-20231217233908689](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231217233908689.png)
>
> 如何将jwt token传递给service save方法?
>
> :bookmark_tabs:<span id="thread-local">`ThreadLocal`</span>:线程局部变量,为每一个线程提供一份单独的存储空间,相同的线程能够共同访问
>
> Tomcat接受一次请求就会开辟一个线程,同一个请求共用一个线程

```java
//jwt拦截器 
        //2、校验令牌
        try {
            log.info("jwt校验:{}", token);
            Claims claims = JwtUtil.parseJWT(jwtProperties.getAdminSecretKey(), token);
            Long empId = Long.valueOf(claims.get(JwtClaimsConstant.EMP_ID).toString());
            //将当前登录用户的id存入到当前线程中
            BaseContext.setCurrentId(empId);
            log.info("当前员工id："+empId);
            //3、通过，放行
            return true;
        } catch (Exception ex) {
            //4、不通过，响应401状态码
            response.setStatus(401);
            return false;
        }


//EmployeeServiceImpl的TODO处
//获取当前登录用户的id
employee.setCreateUser(BaseContext.getCurrentId());
employee.setUpdateUser(BaseContext.getCurrentId());
```

user id动态获取成功

![image-20231218001053549](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231218001053549.png)

​	提交一下代码~

### 员工分页查询

#### 需求分析和设计

![image-20231218215512016](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231218215512016.png)

![image-20231218215639074](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231218215639074.png)



#### 代码开发

##### 根据接口设计对应DTO

> 初始代码自带->用于接受前端传递过来的数据:EmployeePageQueryDTO

##### 封装分页查询结果

> 初始代码自带 用于返回后端分页查询结果 : PageResult

##### 实现业务逻辑

> :bookmark_tabs: `pageHelper` : 实现分页查询的实用mybatis插件
> [使用与实现原理](https://zhuanlan.zhihu.com/p/635875004)   -> 通过结合Mybatis拦截器实现动态sql,自动添加计算好的limit子句,startPage方法通过新建[ThreadLocal](#thread-local)将页码和每页记录数传递过去
>
> :information_source: mysql [limit子句底层实现原理](https://blog.csdn.net/qq_34115899/article/details/120727513)

- controller	

    ```java
        /**
         * 分页查询员工列表
         * @param employeePageQueryDTO
         * @return
         */
        @GetMapping("/page")
        @ApiOperation(value = "分页查询员工")
        public Result<PageResult> page(EmployeePageQueryDTO employeePageQueryDTO){
            log.info("分页查询员工：{}", employeePageQueryDTO);
            PageResult pageResult = employeeService.pageQuery(employeePageQueryDTO);
            return Result.success(pageResult);
        }
    ```

- service

    ```java
    //接口
        /**
         * 分页查询员工列表
         * @param employeePageQueryDTO
         * @return
         */
        PageResult pageQuery(EmployeePageQueryDTO employeePageQueryDTO);
    
    //实现
        /**
         * @param employeePageQueryDTO
         * @return
         */
        @Override
        public PageResult pageQuery(EmployeePageQueryDTO employeePageQueryDTO) {
            PageHelper.startPage(employeePageQueryDTO.getPage(), employeePageQueryDTO.getPageSize());
            Page<Employee> page= employeeMapper.pageQuery(employeePageQueryDTO);
            return new PageResult(page.getTotal(), page.getResult());
        }
    ```

- mapper

    ```java
    //由于语句较复杂,需要使用xml动态sql
        /**
         * 分页查询员工列表
         * @param employeePageQueryDTO
         * @return
         */
        Page<Employee> pageQuery(EmployeePageQueryDTO employeePageQueryDTO);
    ```

    ```xml
    <!-- 动态xml -->
    <select id="pageQuery" resultType="com.weekie.entity.Employee">
        select * from employee
        <where>
          <if test="name != null and name != ''">
            and name like concat('%', #{name}, '%')
          </if>
        </where>
        order by create_time desc
      </select>
    ```

    

    > :exclamation: xml文件中select语句的resultType填写的是**集合里面**的元素类型,因为`Page<Employee>`中的Page是list的子类,因此类型是集合里的元素Employee

    > :question: 为什么xml文件不用和项目包同名?
    >
    > -> 因为在项目配置文件专门配置路径了
    >
    > ```yaml
    > mybatis:
    > 	mapper-locations: classpath:mapper/*.xml
    > ```

#### 功能测试

- 接口文档测试

    ![image-20231218231923294](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231218231923294.png)

> :exclamation: 记得重新登录更新已经失效的jwt令牌



##### 解决后端发送日期格式问题

> :exclamation: 后端给前端传递过来的时间是数组形式,会发生奇怪的错误
>
> ![image-20231218234445689](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231218234445689.png)
>
> 解决方式![image-20231218234850316](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231218234850316.png)

- 方式1

    ```java
    //Employee.java
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updateTime;
    ```

- 方式2

    ```java
        /**
         * @param converters
         */
        protected void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
            log.info("开始设置消息转换器...");
            //创建一个消息转换器对象
            MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
            //需要为消息转换器设置一个对象转换器,对象转换器可以将Java对象序列化为json数据
            converter.setObjectMapper(new JacksonObjectMapper());
            //将消息转换器添加到集合中
            converters.add(0,converter);//优先使用自定义的消息转换器
        }
    ```

    测试成功

    ![image-20231219000919774](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219000919774.png)

### 启用禁用员工账号

#### 需求分析和设计

![image-20231219001756119](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219001756119.png)

![image-20231219001918269](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219001918269.png)

#### 代码开发

##### 实现业务逻辑

> :bell:由于接口不涉及查询操作,因此不用指定返回的Result对象的泛型

- controller	

    ```java
        /**
         * 启用禁用员工账号
         * @param status
         * @param id
         * @return
         */
        @PostMapping("/status/{status}")
        @ApiOperation(value = "启用禁用员工账号")
    //不必指定泛型
        public Result startOrStop(@PathVariable Integer status,Long id){
            log.info("启用禁用员工账号：{},{}", status,id);
            employeeService.startOrStop(status,id);
            return Result.success();
        }
    ```

- service

    ```java
    //接口
        void startOrStop(Integer status, Long id);
    //实现
        /**
         * 启用禁用员工账号
         *
         * @param status
         * @param id
         */
        @Override
        public void startOrStop(Integer status, Long id) {
            //利用builder实现更简洁的构造
            //由于启用禁用员工操作属于update,可以设置update通用方法,传入对象,根据对象数据的不同实现不同的修改
            Employee employee = Employee.builder().status(status)
                .id(id)
                .updateTime(LocalDateTime.now())
                .updateUser(BaseContext.getCurrentId())
                .build();
            employeeMapper.update(employee);
        }
    ```

- mapper

    ```java
    //update操作情景比较多样,因此使用动态sql
        /**
         * 根据传入数据动态更新员工信息
         * @param employee
         */
        void update(Employee employee);
    ```

    ```xml
    <!-- 动态xml -->
      <update id="update" parameterType="Employee">
        update employee
        <set>
            <if test="name != null and name != ''"> name = #{name}, </if>
            <if test="username != null and username != ''"> username = #{username}, </if>
            <if test="password != null and password != ''"> password = #{password}, </if>
            <if test="phone != null and phone != ''"> phone = #{phone}, </if>
            <if test="sex != null">sex = #{sex},</if>
            <if test="idNumber != null and idNumber != ''"> id_number = #{idNumber}, </if>
            <if test="status != null">status = #{status},</if>
            <if test="updateTime != null">update_time = #{updateTime},</if>
            <if test="updateUser != null">update_user = #{updateUser},</if>
        </set>
        <where>
          id = #{id}
        </where>
    </update>
    ```

    

#### 功能测试

- 接口文档测试

    ![image-20231219005234490](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219005234490.png)

- 前后端联调

    ![image-20231219005302166](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219005302166.png)

> 最后提交一下代码~

### 编辑员工

#### 需求分析和设计

![image-20231219152413367](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219152413367.png)

- 根据id查询员工接口

![image-20231219152631813](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219152631813.png)

- 编辑员工接口![image-20231219152813666](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219152813666.png)

#### 代码开发

##### 编写根据id查询员工接口

```java
//Controller

    /**
     * 根据id查询员工信息
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    @ApiOperation(value = "根据id查询员工信息")
    public Result<Employee> getById(@PathVariable Long id){
        Employee employee = employeeService.getById(id);
        return Result.success(employee);
    }
//ServiceInterface
    /**
     * 根据id查询员工信息
     * @param id
     * @return
     */
    Employee getById(Long id);

//ServiceImpl
    /**
     * 根据id查询员工信息
     *
     * @param id
     * @return
     */
    @Override
    public Employee getById(Long id) {
        Employee employee = employeeMapper.getById(id);
        employee.setPassword("****");
        return employee;
    }
//Mapper
    /**
     * 根据id查询员工信息
     * @param id
     * @return
     */
    @Select("select * from employee where id = #{id}")
    Employee getById(Long id);
```

##### 编写修改员工接口

> :bell: 由于前端传递的数据和之前新增员工格式一致,可以复用DTO
> :bell:update的Mapper方法在前面已经设置了动态根据传入数据修改,因此可以直接复用

```java
//Controller
    @PutMapping
    @ApiOperation(value = "修改员工信息")
    public Result update(@RequestBody EmployeeDTO employeeDTO){
        log.info("修改员工信息：{}", employeeDTO);
        employeeService.update(employeeDTO);
        return Result.success();
    }


//ServiceInterface
    /**
     * 编辑员工信息
     * @param employeeDTO
     */
    void update(EmployeeDTO employeeDTO);


//ServiceImpl
    /**
     * 编辑员工信息
     *
     * @param employeeDTO
     */
    @Override
    public void update(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeDTO, employee);
        employee.setUpdateTime(LocalDateTime.now());
        employee.setUpdateUser(BaseContext.getCurrentId());
        employeeMapper.update(employee);
    }
```

#### 功能测试

测试顺利

![image-20231219163827015](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219163827015.png)

![image-20231219164011945](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219164011945.png)

> 提交一下代码~

### 导入分类模块功能代码

#### 需求分析和设计

- 业务规则

![image-20231219164455928](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219164455928.png)

- 接口设计

![image-20231219164510079](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219164510079.png)

- 数据库设计

    ![image-20231219164854240](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219164854240.png)

#### 代码导入

> 导入资料提供的模块代码即可
>
> ![image-20231219165432626](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219165432626.png)
>
> :question:为什么有DishMapper和SetmealMapper
>
> -> 因为后续管理套餐和菜品的时候涉及到与分类有关的查询操作

#### 功能测试

测试成功

![image-20231219165928964](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219165928964.png)

> 提交一下代码~

## Day03 2023.12.19 菜品管理实现

### 公共字段自动填充

#### 问题分析

> :exclamation: 业务表中存在公共字段,冗余很多,不便于维护![image-20231219171041198](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219171041198.png)

#### 实现思路

> 分析各个字段修改时的操作类型![image-20231219171306663](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219171306663.png)
>
> 通过`AOP`[^2]给指定方法进行拦截,自动修改公共字段

- 自定义注解AutoFill,用于表示需要进行公共字段填充的方法
- 自定义切面类AutoFillAspect,统一拦截AutoFill注解方法,通过反射为公共字段赋值
- 在Mapper对应方法加入注解

[^2]: 面向切面编程,可以在不修改原有代码的基础上对特定代码进行批量的增添或修改功能

#### 代码开发

- 自定义注解

```java
//annotation.AutoFill.java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)


public @interface AutoFill {
    // 数据库操作类型,UPDATE,INSERT
    OperationType value();
}

```

- 自定义切面类

```java
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
```

> :exclamation:记得在所有需要自动填充的方法上面添加autoFill注解,并删除原来在Service层进行填充的冗余代码(包括builder里面创建实体类中填充的冗余字段)

> :bell:表达式后面输入.var再tab可以自动生成变
>
> 量名 

#### 功能测试

前后端联调成功![image-20231219202357926](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231219202357926.png)

> 提交一下代码~

### 新增菜品

#### 需求分析和设计

<img src="C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231221204231112.png" alt="image-20231221204231112" style="zoom:80%;" />

<img src="C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231221204254102.png" alt="image-20231221204254102" style="zoom:50%;" /><img src="C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231221204427315.png" alt="image-20231221204427315" style="zoom:50%;" />

接口设计

- 根据类型查询分类

    ![image-20231221204648606](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231221204648606.png)

- 文件上传

    ![image-20231221204735018](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231221204735018.png)

- 新增菜品

​	![](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231221205144810.png)

数据库设计

![image-20231221205511883](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231221205511883.png)

> :bookmark_tabs:`逻辑外键`:数据库层面并没有实现外键,而是在业务代码中当成外键来进行处理

#### 文件上传接口代码开发

##### 阿里云服务器oss配置

> 关于阿里云oss创建参照[黑马程序员2023新版JavaWeb视频](https://www.bilibili.com/video/BV1m84y1w7Tb?p=148&vd_source=8443fc4d20a1db2b35c059866e7ea268)p148

> :exclamation: 新版本oss将密钥存储在了环境变量中,笔者因为之前在环境变量配置过了,这里打算从yml获取系统环境变量,[方法教程](https://blog.csdn.net/qq_30299287/article/details/113858253)
>
> 本项目使用的是旧版本oss依赖,因此可以放心按照教程操作
>
> ![image-20231221213559326](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231221213559326.png)

- 在aplication-dev设置oss属性,并在aplication配置中进行变量引用

```yaml
#application-dev.yml
sky: 
    alioss:
        bucket-name: [你自己的oss服务器名字]
        endpoint: [你自己的oss服务器地址]
        access-key-id: ${OSS_ACCESS_KEY_ID} #这里引用了系统环境变量
        access-key-secret: ${OSS_ACCESS_KEY_SECRET}
```

```yaml
#application.yml
sky: 
	alioss:
        endpoint: ${alioss.endpoint}
        bucket-name: ${alioss.bucket-name}
        access-key-id: ${alioss.access-key-id}
        access-key-secret: ${alioss.access-key-secret}
```

> :exclamation: yml配置oss endpoint的时候记得把前面的https://去掉,笔者因为这个细节导致没能成功访问文件地址

> :bell:初始工程提供了`com.weekie.properties.AliOssProperties`这一个配置类,将yml配置内容进行了封装

- 在server模块配置类部分进行注入配置

```java
//com.weekie.config.OssConfiguration

/**
 * 阿里云OSS配置类
 */
@Configuration
@Slf4j
public class OssConfiguration {
    @Bean
    @ConditionalOnMissingBean
    public AliOssUtil aliOssUtil(AliOssProperties aliOssProperties) {
        log.info("开始初始化阿里云OSS配置...");
        return new AliOssUtil(aliOssProperties.getEndpoint(), aliOssProperties.getAccessKeyId(), aliOssProperties.getAccessKeySecret(), aliOssProperties.getBucketName());
    }
}
```

> :bookmark_tabs:`@Bean`注解用于标注一个方法，表示该方法将返回一个由 Spring 管理的 bean 实例。[详细介绍](https://zhuanlan.zhihu.com/p/618507088)

##### 文件上传业务配置

```java
//Controller
public class CommonController {
    
    @Autowired
    private AliOssUtil aliOssUtil;
    /**
     * 文件上传
     * @return
     */
    @PostMapping("/upload")
    @ApiOperation("文件上传")
    public Result<String> upload(MultipartFile file){
        log.info("文件上传：{}", file.getOriginalFilename());
        try{
            //获取原始文件名后缀
            String extension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
            //用uuid作为文件名，防止生成的临时文件重复
            String objectName = UUID.randomUUID().toString() + extension;
            //上传文件
            String filePath = aliOssUtil.upload(file.getBytes(), objectName);
            return Result.success(filePath);
        } catch (IOException e) {
            log.error(e.getMessage());
        }
        return Result.error(MessageConstant.UPLOAD_FAILED);
    }

}

```

简单测试一下,成功

![image-20231221224342482](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231221224342482.png)

#### 新增菜品接口代码开发

```java
//Controller
/**
 * 菜品管理接口
 */
@RestController
@RequestMapping("/admin/dish")
@Api(tags = "菜品管理接口")
@Slf4j
public class DishController {
    @Autowired
    private DishService dishService;

    /**
     * 新增菜品
     * @param dishDTO
     * @return
     */
    @PostMapping
    @ApiOperation("新增菜品")
    public Result save(@RequestBody DishDTO dishDTO){
        log.info("新增菜品：{}", dishDTO);
        dishService.saveWithFlavor(dishDTO);
        return Result.success();
    }

}

```

```java
//Service Interface
public interface DishService {
    /**
     * 新增菜品和口味数据
     * @param dishDTO
     */
    void saveWithFlavor(DishDTO dishDTO);
}
```

```java
//Service Impl
public class DishServiceImpl implements DishService {
    @Autowired
    private DishMapper dishMapper;
    @Autowired
    private DishFlavorMapper dishFlavorMapper;

    /**
     * 新增菜品和口味数据
     *
     * @param dishDTO
     */
    @Transactional//新增菜品和对应口味需要查询菜品表和口味表，所以需要事务
    @Override
    public void saveWithFlavor(DishDTO dishDTO) {
        //向菜品表插入一条数据
        Dish dish = new Dish();
        BeanUtils.copyProperties(dishDTO, dish);
        dishMapper.insert(dish);
        //获取菜品id,上面调用的mapper动态sql已经指定了将自增主键返回到实体类的id属性
        Long dishId = dish.getId();

        //向菜品口味表插入多条数据
        List<DishFlavor> flavors = dishDTO.getFlavors();
        if(flavors != null && flavors.size() > 0){
            flavors.forEach(flavor -> {
                flavor.setDishId(dishId);
            });
            dishFlavorMapper.insertBatch(flavors);
        }
    }
}

```

> :exclamation:使用事务需要开启事务管理,这里启动类已经配置好了
>
> :exclamation:新版本的SpringBoot(笔者之前用的是3.1.6版本)可以不用配置该注解了,详细参考[该博文](https://blog.csdn.net/MinggeQingchun/article/details/119579941)
>
> ![image-20231221231145272](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231221231145272.png)

> :bell: <font color='orange'>Long dishId = dish.getId();</font>获取主键id需要下面代码在动态sql中的配置

```java
//DishMapper
@Mapper
public interface DishMapper {

    /**
     * 根据分类id查询菜品数量
     * @param categoryId
     * @return
     */
    @Select("select count(id) from dish where category_id = #{categoryId}")
    Integer countByCategoryId(Long categoryId);

    /**
     * 新增菜品
     * @param dish
     */
    @AutoFill(OperationType.INSERT)
    void insert(Dish dish);
}

```

```java
//DishFlavorMapper
@Mapper
public interface DishFlavorMapper {

    /**
     * 批量插入口味数据
     * @param flavors
     */
    void insertBatch(List<DishFlavor> flavors);
}

```

```xml
//动态sql xml
<mapper>
	<insert id="insert" useGeneratedKeys="true" keyProperty="id">
        insert into dish (name, category_id, price, image, description, create_time, update_time, create_user, update_user,status) values (#{name}, #{categoryId}, #{price}, #{image}, #{description}, #{createTime}, #{updateTime}, #{createUser}, #{updateUser},#{status})
    </insert>
</mapper>
```

> :bookmark_tabs:`useGeneratedKeys="true"`:返回主键值,由于批量插入口味表数据的时候,需要获取菜品id,而菜品id是自增主键,业务代码传递过来的对象数据不包含主键值,因此可以通过新增菜品访问菜品表的时候顺便将主键值返回来进行获取
>
> :bookmark_tabs:`keyProperty="id"`:将返回的主键值赋值给insert方法传递过来的Dish对象的Id字段

```java
<mapper namespace="com.weekie.mapper.DishFlavorMapper">

    <insert id="insertBatch">
        insert into dish_flavor (dish_id,name,value) values
        <foreach collection="list" item="df" index="index" separator=",">
            (#{df.dishId},#{df.name},#{df.value})
        </foreach>
    </insert>
</mapper>
```

#### 功能测试

成功

![image-20231222010506506](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231222010506506.png)

> 提交一下代码~

### 菜品分页查询

#### 需求分析和设计

![image-20231222212158399](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231222212158399.png)

![image-20231222212320919](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231222212320919.png)

#### 代码开发

##### 设计VO

> 由于返回的数据包括category name,这项数据需要另查种类表才能获取,因此需要新的类来将展示的数据进行封装(初始工程已实现)

![image-20231222212617474](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231222212617474.png)

##### 业务代码开发

```java
//controller
        /**
         * 分页查询菜品
         * @param dishPageQueryDTO
         * @return
         */
        @GetMapping("/page")
        @ApiOperation("分页查询菜品")
        public Result<PageResult> page(DishPageQueryDTO dishPageQueryDTO){
            log.info("分页查询菜品：{}", dishPageQueryDTO);
            PageResult pageResult = dishService.pageQuery(dishPageQueryDTO);
            return Result.success(pageResult);
        }

```

```java
//Service Impl	
    /**
     * 分页查询菜品
     *
     * @param dishPageQueryDTO
     * @return
     */
    @Override
    public PageResult pageQuery(DishPageQueryDTO dishPageQueryDTO) {
        PageHelper.startPage(dishPageQueryDTO.getPage(), dishPageQueryDTO.getPageSize());
        Page<DishVO> page = dishMapper.pageQuery(dishPageQueryDTO);
        return new PageResult(page.getTotal(), page.getResult());

    }

```

```java
//Mapper
    /**
     * 分页查询菜品
     * @param dishPageQueryDTO
     * @return
     */
    Page<DishVO> pageQuery(DishPageQueryDTO dishPageQueryDTO);
```

 ```xml
 <!--动态xml-->
<select id="pageQuery" resultType="com.weekie.vo.DishVO">
    select d.*,c.name as categoryName from dish d left outer join category c on d.category_id=c.id
    <where>
        <if test="name!=null and name!=''">
            and d.name like concat('%',#{name},'%')
        </if>
        <if test="categoryId!=null and categoryId!=''">
            and d.category_id=#{categoryId}
        </if>
        <if test="status!=null and status!=''">
            and d.status=#{status}
        </if>
    </where>
    order by d.create_time desc
</select>
 ```

> 这里用到左外连接来进行多表查询,因为category查询的字段名字也叫name,为了能够顺利封装进VO对象中,在sql语句进行了别名设置,[快速复习内连接,外连接,自连接,子查询,多表查询](https://developer.aliyun.com/article/1397957)

#### 功能测试

一切顺利(已经懒得用接口文档调试了)

![image-20231222220143345](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231222220143345.png)

### 删除菜品

#### 需求分析和设计

![image-20231222220300909](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231222220300909.png)

![image-20231222220313210](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231222220313210.png)

![image-20231222220631602](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231222220631602.png)

![image-20231222220830330](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231222220830330.png)

#### 代码开发

```java
//Controller
        /**
         * 根据id删除菜品
         * @param ids
         * @return
         */
        @DeleteMapping
        @ApiOperation("根据id批量删除菜品")
        public Result delete(@RequestParam List<Long> ids){
            log.info("根据id批量删除菜品：{}", ids);
            dishService.deleteBatch(ids);
            return Result.success();
        }

```

> :bookmark_tabs:`@RequestParam`:自动解析请求参数,例如本项目中数组用字符串"1,2,3,4"这样逗号隔开的方式传递,该注解就可以让Spring MVC自动解析成数组

```java
//Service Impl

//注入新的mapper
@Autowired
private SetmealDishMapper setmealDishMapper;

/**
     * 根据id删除菜品
     *
     * @param ids
     */
    @Override
    public void deleteBatch(List<Long> ids) {
        // 判断当前菜品是否启售中，如果启售中则不能删除
        for (Long id : ids) {
            Dish dish = dishMapper.getById(id);
            if(dish.getStatus() == StatusConstant.ENABLE){
                throw new DeletionNotAllowedException(MessageConstant.DISH_ON_SALE);
            }
        }
        // 判断当前菜品是否被套餐关联，如果被套餐关联则不能删除
        List<Long> setmealIds = setmealDishMapper.getSetmealIdsByDishIds(ids);
        if(setmealIds != null && setmealIds.size() > 0){
            throw new DeletionNotAllowedException(MessageConstant.DISH_BE_RELATED_BY_SETMEAL);
        }
        for(Long id:ids){
             // 删除菜品表中的数据
             dishMapper.deleteById(id);
             // 删除菜品口味表中的数据
             dishFlavorMapper.deleteByDishId(id);
        }
    }
}
```

> 为什么不把所有id一次性都传给mapper,这样循环调用mapper的sql语句性能不会受到影响吗,答案稍后揭晓

```java
//DishMapper
       @Select("select * from dish where id = #{id}")
    Dish getById(Long id);

    @Delete("delete from dish where id = #{id}")
    void deleteById(Long id);

    void deleteByIds(List<Long> ids);
```

> 这里个人觉得查询所有字段确实很浪费性能,不过学习阶段为了防止后续因为自作聪明的改动导致出现难以定位的bug,暂且按照教程的写法来

```java
//SetmealDishMapper
//这个mapper负责关联套餐和菜品信息 
/**
     * 根据菜品id查询套餐id
     */
    List<Long> getSetmealIdsByDishIds(List<Long> dishIds);
```

```xml
//SetmealDishMapper 动态xml
    <select id="getSetmealIdsByDishIds" resultType="java.lang.Long">
        select setmeal_id from setmeal_dish where dish_id in
        <foreach collection="dishIds" item="dishId" open="(" separator="," close=")">
            #{dishId}
        </foreach>
    </select>
```

```java
//DishFlavorMapper
    /**
     * 根据菜品id删除口味数据
     * @param dishId
     */
    @Delete("delete from dish_flavor where dish_id = #{dishId}")
    void deleteByDishId(Long dishId);
```

> :exclamation: 为了避免和主键id混淆,这里推荐将参数命名为dishId

#### 功能测试

前后端联调成功(截图懒得发了)

> :exclamation: service该处代码循环请求多次sql语句,存在性能问题,需要优化,可以通过在mapper层拓展批量删除方法来代替
>
> ![image-20231222234636791](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231222234636791.png)

##### 进一步优化
```java
//Service Impl
//将原来有问题的for循环语句替换成
        dishMapper.deleteByIds(ids);
        dishFlavorMapper.deleteByDishIds(ids);
```

> 为什么没有优化判断是否启售的第一个循环,个人认为批量删除时常遇到误删启售菜品的情况,如果每次都一股脑将批量删除的所有菜品信息都查询的话反而造成性能浪费,当然也有可能就是老师懒得改...

```java
//DishMapper
//将deleteById函数修改为
    /**
     * 根据id批量删除菜品
     * @param ids
     */
    void deleteByIds(List<Long> ids);
```

```xml
//DishMapper 动态xml
    <delete id="deleteByIds">
        delete from dish where id in
        <foreach collection="ids" item="id" open="(" separator="," close=")">
            #{id}
        </foreach>
    </delete>
	
```

```java
//DishFlavorMapper
//原来deleteByDishId函数改为
    /**
     * 根据批量菜品id删除口味数据
     * @param dishIds
     */
    void deleteByDishIds(List<Long> dishIds);
```

```xml
//DishFlavorMapper 动态xml
    <delete id="deleteByDishIds">
        delete from dish_flavor where dish_id in
        <foreach collection="dishIds" item="dishId" open="(" separator="," close=")">
            #{dishId}
        </foreach>
    </delete>
```

### 修改菜品

#### 需求分析和设计

![image-20231223105049848](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223105049848.png)

![image-20231223105206719](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223105206719.png)

![image-20231223105447344](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223105447344.png)

#### 业务代码开发

##### 回显菜品及其口味数据

```java
//Controller
        /**
         * 根据id查询菜品及对应口味数据
         * @param id
         * @return
         */
        @GetMapping("/{id}")
        @ApiOperation("根据id查询菜品")
        public Result<DishVO> getById(@PathVariable Long id){
            log.info("根据id查询菜品：{}", id);
            DishVO dishVO = dishService.getByIdWithFlavor(id);
            return Result.success(dishVO);
        }
```

```java
//Service Impl
    /**
     * 根据id查询菜品及其对应口味数据
     *
     * @param id
     * @return
     */
    @Override
    public DishVO getByIdWithFlavor(Long id) {
        //获取菜品数据
        Dish dish = dishMapper.getById(id);
        //获取菜品口味数据
        List<DishFlavor> flavors = dishFlavorMapper.getByDishId(id);
        //将菜品和口味数据封装到VO对象中
        DishVO dishVO = new DishVO();
        BeanUtils.copyProperties(dish, dishVO);
        dishVO.setFlavors(flavors);
        return dishVO;
    }
```

```java
//DishFlavorMapper
    /**
     * 根据菜品id查询口味数据
     * @param dishiId
     * @return
     */
    @Select("select * from dish_flavor where dish_id = #{dishId}")
    List<DishFlavor> getByDishId(Long dishiId);
```

- 测试成功

    ![image-20231223110720731](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223110720731.png)

##### 修改菜品数据

```java
//Controller
    /**
     * 根据id修改菜品
     * @param dishDTO
     * @return
     */
    @PutMapping
    @ApiOperation("根据id修改菜品")
    public Result update(@RequestBody DishDTO dishDTO){
            log.info("修改菜品：{}", dishDTO);
            dishService.updateWithFlavor(dishDTO);
            return Result.success();
        }
    }
```

```java
//Service Impl
    /**
     * 根据id更新菜品及其对应口味数据
     *
     * @param dishDTO
     */
    @Transactional
    @Override
    public void updateWithFlavor(DishDTO dishDTO) {
        //更新菜品基本数据
        Dish dish = new Dish();
        BeanUtils.copyProperties(dishDTO, dish);
        dishMapper.update(dish);
        //更新菜品口味数据
        //先删除原来的口味数据
        dishFlavorMapper.deleteByDishId(dishDTO.getId());
        //再插入新的口味数据
        List<DishFlavor> flavors = dishDTO.getFlavors();
        //新增的口味数据要重新设置菜品id
        if(flavors != null && flavors.size() > 0){
            flavors.forEach(flavor -> flavor.setDishId(dishDTO.getId()));
            dishFlavorMapper.insertBatch(flavors);
        }

    }
```

```java
//DishMapper
    /**
     * 根据id更新菜品
     * @param dish
     */
    @AutoFill(OperationType.UPDATE)
    void update(Dish dish);
```

```java
//DishMapper 动态xml
    </select>
    <update id="update">
        update dish
        <set>
            <if test="name!=null and name!=''">
                name=#{name},
            </if>
            <if test="categoryId!=null">
                category_id=#{categoryId},
            </if>
            <if test="price!=null">
                price=#{price},
            </if>
            <if test="image!=null and image!=''">
                image=#{image},
            </if>
            <if test="description!=null and description!=''">
                description=#{description},
            </if>
            <if test="updateTime!=null">
                update_time=#{updateTime},
            </if>
            <if test="updateUser!=null and updateUser!=''">
                update_user=#{updateUser},
            </if>
            <if test="status!=null">
                status=#{status},
            </if>
        </set>
        where id=#{id}
    </update>
```

​		

> 最害怕的一集:update忘了加where子句,幸亏事先添加了事务注解,不然数据全被覆盖了!
>
> [如何在数据库层面配置防止全表删除或更新](https://zhuanlan.zhihu.com/p/93899524#:~:text=mysql%3E%20show%20variables%20like%20%27sql_safe_updates%27%3B%20%2B------------------%2B-------%2B%20%7C%20Variable_name,sql_safe_updates%3D1%3B%20Query%20OK%2C%200%20rows%20affected%20%280.00%20sec%29)
> 不过由于索引等并没有太多了解,安全模式可能会导致代码业务代码不可用,目前了解即可
>
> :exclamation:对于数据库update和delete操作一定要谨慎,一定要多检查where子句等细节,后续一定要学习数据库备份等相关安全操作,关于update和delete误操作的恢复办法

- 测试成功,警钟长鸣

    ![image-20231223115346700](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223115346700.png)

> 最后提交一下代码~

## Day04 2023.12.23 套餐管理(自行完成)

### 新增套餐

#### 需求分析和设计 

##### 产品原型

![image-20231223144235388](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223144235388.png)

##### 业务规则

- 查询启用的套餐分类
- 查询对应要新增的菜品

- 图片上传,将url返回给前端

- 接受前端传递过来的DTO

    - DTO结构

        | DTO字段           | 说明                                   |
        | ----------------- | -------------------------------------- |
        | id                | 主键                                   |
        | category_id       | 套餐分类id                             |
        | name,price        |                                        |
        | image,description |                                        |
        | setmealDishes     | 套餐菜品集合,需要同步更新setmealDish表 |
        | status            | 是否启用                               |

        > 在插入套餐表格的时候要将主键返回给对象,这样才能在同步更新关系表的时候获取套餐id

- 返回Result

##### 接口设计

| 接口(/admin)           | 方法 | 功能               |
| ---------------------- | ---- | ------------------ |
| /category/list(已完成) |      | 根据类型查询分类   |
| /dish/list             | get  | 根据分类id查询菜品 |
| /upload(已完成)        |      | 上传图片           |
| /setmeal               | post | 新增套餐           |

##### 数据库设计

![image-20231223150713503](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223150713503.png)

![image-20231223150723863](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223150723863.png)

#### 代码开发

##### 根据分类id查询菜品接口

> 由于没有要求分页,result就直接返回对象列表了

```java
//Controller
    /**
     * 根据菜品分类id查询菜品
     * @param categoryId
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("根据菜品分类id查询菜品")
    public Result<List<Dish>> list(Long categoryId){
            List<Dish> dishList = dishService.listByCategoryId(categoryId);
            return Result.success(dishList);
    }
```

```java
//Service Impl
    /**
     * 根据分类id查询菜品
     *
     * @param categoryId
     * @return
     */
    @Override
    public List<Dish> listByCategoryId(Long categoryId) {
        return dishMapper.listByCategoryId(categoryId);
    }
```

```java
//Dish Mapper
    /**
     * 根据分类id查询菜品
     * @param categoryId
     * @return
     */
    @Select("select * from dish where category_id = #{categoryId}")
    List<Dish> listByCategoryId(Long categoryId);
```

##### 新增套餐接口

```java
//SetmealController
/**
 * 套餐管理
 */
@RestController
@RequestMapping("/admin/setmeal")
@Api(tags = "套餐管理接口")
@Slf4j
public class SetmealController {
    @Autowired
    private SetmealService setmealService;
    @PostMapping
    @ApiOperation("新增套餐")
    public Result save(@RequestBody SetmealDTO setmealDTO){
        log.info("新增套餐：{}",setmealDTO);
        setmealService.saveWithDish(setmealDTO);
        return Result.success();
    }
}

```

```java
//SetmealServiceImpl
@Service
public class SetmealServiceImpl implements SetmealService{
    @Autowired
    private SetmealMapper setmealMapper;
    @Autowired
    private SetmealDishMapper setmealDishMapper;
    /**
     * 新增套餐及其对应菜品关系数据
     *
     * @param setmealDTO
     */
    @Transactional
    @Override
    public void saveWithDish(SetmealDTO setmealDTO) {
        Setmeal setmeal = new Setmeal();
        BeanUtils.copyProperties(setmealDTO,setmeal);
        //向套餐表插入一条数据
        setmealMapper.insert(setmeal);
        //向套餐菜品关系表插入多条数据
        List<SetmealDish> setmealDishes = setmealDTO.getSetmealDishes();
        //判断是否有菜品数据,并将套餐id填充
        if(setmealDishes != null && setmealDishes.size() > 0){
            setmealDishes.forEach(dish -> dish.setSetmealId(setmeal.getId()));
            //批量插入            
            setmealDishMapper.insertBatch(setmealDishes);
        }
    }
}

```

```java
//SetmealMapper
    /**
     * 添加套餐信息
     * @param setmeal
     */
    @AutoFill(OperationType.INSERT)
    void insert(Setmeal setmeal);

//动态xml
    <insert id="insert" useGeneratedKeys="true" keyProperty="id">
        insert into setmeal (category_id,name, price, image, description, create_time, update_time, create_user, update_user,status) values (#{categoryId},#{name}, #{price}, #{image}, #{description}, #{createTime}, #{updateTime}, #{createUser}, #{updateUser},#{status})
    </insert>
```



```java
//SetmealDishMapper
    /**
     * 批量插入套餐菜品关系数据
     * @param setmealDishes
     */
    void insertBatch(List<SetmealDish> setmealDishes);
//动态xml
    <insert id="insertBatch">
        insert into setmeal_dish (setmeal_id, dish_id,name,price,copies) values
        <foreach collection="list" item="sd" open="" separator="," >
            (#{sd.setmealId}, #{sd.dishId},#{sd.name},#{sd.price},#{sd.copies})
        </foreach>
    </insert>
```

#### 功能测试

运行顺利

![image-20231223155941762](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223155941762.png)

> 提交一下代码~

### 套餐分页查询

#### 需求分析和设计

##### 产品原型

![image-20231223171303390](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223171303390.png)

##### 业务规则

1. 需要关联分类表展示套餐分类id对应的分类名
2. 分页按照创建时间倒序排列

#### 代码开发

```java
//Controller

    /**
     * 分页查询套餐
     * @param setmealPageQueryDTO
     * @return
     */
    @GetMapping("/page")
    @ApiOperation("分页查询套餐")
    public Result<PageResult> page(SetmealPageQueryDTO setmealPageQueryDTO){
        log.info("分页查询套餐：{}",setmealPageQueryDTO);
        PageResult pageResult = setmealService.pageQuery(setmealPageQueryDTO);
        return Result.success(pageResult);
    }
```

```java
//Service Impl
    /**
     * 分页查询套餐
     *
     * @param setmealPageQueryDTO
     * @return
     */
    @Override
    public PageResult pageQuery(SetmealPageQueryDTO setmealPageQueryDTO) {
        PageHelper.startPage(setmealPageQueryDTO.getPage(),setmealPageQueryDTO.getPageSize());
        Page<SetmealVO> page = setmealMapper.pageQuery(setmealPageQueryDTO);
        return new PageResult(page.getTotal(), page.getResult());

    }
```

```java
//Mapper
    /**
     * 分页查询套餐
     * @param setmealPageQueryDTO
     */
    Page<SetmealVO> pageQuery(SetmealPageQueryDTO setmealPageQueryDTO);

//动态xml
    <select id="pageQuery" resultType="com.weekie.vo.SetmealVO">
        select s.*,c.name as categoryName from setmeal s left outer join category c on s.category_id=c.id
        <where>
            <if test="name!=null and name!=''">
                and s.name like concat('%',#{name},'%')
            </if>
            <if test="categoryId!=null">
                and s.category_id=#{categoryId}
            </if>
            <if test="status!=null and status!=''">
                and s.status=#{status}
            </if>
        </where>
        order by s.create_time desc
    </select>
```

#### 功能测试

顺利

![image-20231223174016182](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223174016182.png)

### 删除套餐

#### 需求分析和设计

##### 业务规则

1. 要求实现批量删除
2. 只有停售的套餐才可以被删除
3. 删除套餐要同步批量删除菜品套餐关系表中的对应数据

#### 代码开发

```java
//Controller
    /**
     * 根据id批量删除套餐
     * @param ids
     * @return
     */
    @DeleteMapping
    @ApiOperation("删除套餐")
    public Result delete(@RequestParam List<Long> ids) {
        log.info("删除套餐：{}", ids);
        setmealService.deleteBatch(ids);
        return Result.success();
    }
```

```java
//Service Impl
    /**
     * 根据id批量删除套餐
     *
     * @param ids
     */
    @Transactional
    @Override
    public void deleteBatch(List<Long> ids) {
        //判断当前套餐是否启售中,如果启售中则不能删除
        for(Long id : ids){
            Setmeal setmeal = setmealMapper.getById(id);
            if(Objects.equals(setmeal.getStatus(), StatusConstant.ENABLE)){
                throw new DeletionNotAllowedException(MessageConstant.SETMEAL_ON_SALE);
            }
        }
        //删除套餐表中对应数据
        setmealMapper.deleteByIds(ids);
        //删除套餐菜品关系表中对应数据
        setmealDishMapper.deleteBySetmealIds(ids);
    }
```

```java
//SetmealMapper
    /**
     * 根据id批量删除套餐
     * @param ids
     */
    void deleteByIds(List<Long> ids);

//动态 xml
    <delete id="deleteByIds">
        delete from setmeal where id in
        <foreach collection="ids" item="id" open="(" separator="," close=")">
            #{id}
        </foreach>
    </delete>
```

```java
//SetmealDishMapper
     /**
     * 根据套餐id批量删除套餐菜品关系数据
     * @param setmealIds
     */
    void deleteBySetmealIds(List<Long> setmealIds);

//动态 xml
    <delete id="deleteBySetmealIds">
        delete from setmeal_dish where setmeal_id in
        <foreach collection="setmealIds" item="setmealId" open="(" separator="," close=")">
            #{setmealId}
        </foreach>
    </delete>
```

#### 功能测试

成功了

> 提交一下代码~

### 修改套餐

#### 需求分析和设计

##### 业务规则

1. 前端发送请求回显套餐数据
2. 接受前端DTO对象并修改

##### 接口设计

| 接口          | 方法 | 功能           |
| ------------- | ---- | -------------- |
| /setmeal/{id} | get  | 根据id查询套餐 |
| /setmeal      | put  | 修改套餐       |

#### 代码开发

##### 根据id查询套餐接口

```java
//controller
/**
     * 根据id查询套餐
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    @ApiOperation("根据id查询套餐")
    public Result<SetmealVO> getById(@PathVariable Long id){
        log.info("根据id查询套餐：{}",id);
        SetmealVO setmealVO = setmealService.getById(id);
        return Result.success(setmealVO);
    }
```

```java
//Service Impl
     /**
     * 根据id查询套餐
     *
     * @param id
     * @return
     */
    @Override
    public SetmealVO getById(Long id) {
        //获取套餐基础信息
        SetmealVO setmealVO = setmealMapper.getByIdWithCategoryName(id);
        //根据套餐id获取对应菜品信息
        List<SetmealDish> setmealDishes = setmealDishMapper.getDishesBySetmealId(id);
        setmealVO.setSetmealDishes(setmealDishes);
        return setmealVO;
    }
```

```java
//SetmealMapper
    /**
     * 根据id获取套餐基本信息和对应类别名
     * @param id
     * @return
     */
    SetmealVO getByIdWithCategoryName(Long id);

//动态 xml
    <select id="getByIdWithCategoryName" resultType="com.weekie.vo.SetmealVO">
        select s.*,c.name as categoryName from setmeal s left outer join category c on s.category_id=c.id where s.id=#{id}
    </select>
```

```java
//SetmealDishMapper
    /**
     * 根据套餐id查询菜品id
     * @param id
     * @return
     */
    @Select("select * from setmeal_dish where setmeal_id = #{id}")
    List<SetmealDish> getDishesBySetmealId(Long id);
```



功能测试通过

![image-20231223203906061](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223203906061.png)

##### 修改套餐接口

```java
//Controller
    /**
     * 修改套餐
     * @param setmealDTO
     * @return
     */
    @PutMapping
    @ApiOperation("修改套餐")
    public Result update(@RequestBody SetmealDTO setmealDTO){
        log.info("更新套餐：{}",setmealDTO);
        setmealService.updateWithDish(setmealDTO);
        return Result.success();
    }
```

```java
//Service Impl
    /**
     * 修改套餐
     *
     * @param setmealDTO
     */
    @Override
    public void updateWithDish(SetmealDTO setmealDTO) {
        //修改套餐基础信息
        Setmeal setmeal = new Setmeal();
        BeanUtils.copyProperties(setmealDTO,setmeal);
        setmealMapper.update(setmeal);
        //删除套餐菜品关系表中对应数据
        setmealDishMapper.deleteBySetmealIds(Arrays.asList(setmeal.getId()));
        //向套餐菜品关系表插入多条数据
        List<SetmealDish> setmealDishes = setmealDTO.getSetmealDishes();
        // TODO: 2023/12/23 将菜品数据批量填充的方法代码有重复,等待优化方案 
        //判断是否有菜品数据,并将套餐id填充
        if(setmealDishes != null && setmealDishes.size() > 0){
            setmealDishes.forEach(dish -> dish.setSetmealId(setmeal.getId()));
            //批量插入
            setmealDishMapper.insertBatch(setmealDishes);
        }

    }
```

> 这里将菜品数据批量填充的方法代码有重复,看看后续有没有什么好的解决方案吧

```java
//Mapper
    /**
     * 修改套餐基础信息
     * @param setmeal
     */
    @AutoFill(OperationType.UPDATE)
    void update(Setmeal setmeal);

//动态 xml
<update id="update">
        update setmeal
        <set>
            <if test="categoryId!=null">
                category_id=#{categoryId},
            </if>
            <if test="name!=null and name!=''">
                name=#{name},
            </if>
            <if test="price!=null">
                price=#{price},
            </if>
            <if test="image!=null and image!=''">
                image=#{image},
            </if>
            <if test="description!=null and description!=''">
                description=#{description},
            </if>
            <if test="updateTime!=null">
                update_time=#{updateTime},
            </if>
            <if test="updateUser!=null and updateUser!=''">
                update_user=#{updateUser},
            </if>
            <if test="status!=null">
                status=#{status},
            </if>
        </set>
        where id=#{id}
    </update>
       
```

功能测试顺利

![image-20231223211532196](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231223211532196.png)

### 启售停售套餐

#### 需求分析和设计

##### 业务规则

1. 如果套餐内有停售菜品,则套餐无法启售

##### 接口设计

| 接口            | 功能                                   |
| --------------- | -------------------------------------- |
| /dish/status    | 修改菜品启售状态(怕以后忘了顺便给做了) |
| /setmeal/status | 修改套餐启售状态                       |

#### 代码开发

##### 启售停售菜品接口

```java
//Controller
    /**
     * 启用或禁用菜品
     * @param status
     * @param id
     * @return
     */
    @PostMapping("/status/{status}")
    @ApiOperation("启用或禁用菜品")
    public Result status(@PathVariable Integer status,Long id){
            dishService.startOrStop(status,id);
            return Result.success();
    }


//Service Impl
    /**
     * 启用或禁用菜品
     *
     * @param status
     * @param id
     */
    @Override
    public void startOrStop(Integer status, Long id) {
        Dish dish = Dish.builder().status(status).id(id).build();
        dishMapper.update(dish);
    }

```



##### 启售停售套餐接口

```java
//Controller
    /**
     * 修改套餐是否启售
     * @param status
     * @return
     */
    @PostMapping("/status/{status}")
    @ApiOperation("修改套餐是否启售")
    public Result status(@PathVariable Integer status,Long id){
        log.info("修改套餐为{}状态",status == StatusConstant.ENABLE ? "启售" : "停售");
        setmealService.startOrStop(status,id);
        return Result.success();
    }
```

```java
//Service Impl
    /**
     * 启用或禁用套餐
     *
     * @param status
     * @param id
     */
    @Override
    public void startOrStop(Integer status, Long id) {
        if(Objects.equals(status, StatusConstant.ENABLE)){
            //查看套餐对应菜品是否处于启售状态
            List<SetmealDish> setmealDishes = setmealDishMapper.getDishesBySetmealId(id);
            // TODO: 2023/12/23 找机会把循环sql的代码优化了
            // TODO: 2023/12/23 修改套餐内容的时候,如果添加了新的菜品,但是没有启售,那么套餐是否应该也设置为停售状态?还是统一在修改之后均设置成停售状态?
            for(SetmealDish setmealDish : setmealDishes){
                if(dishMapper.getById(setmealDish.getDishId()).getStatus().equals(StatusConstant.DISABLE)){
                    throw new DeletionNotAllowedException(MessageConstant.SETMEAL_ENABLE_FAILED);
                }
            }

        }
        //封装套餐对象,修改状态
        Setmeal setmeal = Setmeal.builder().id(id).status(status).build();
        setmealMapper.update(setmeal);
    }
```

> b站老师并没有将确认是否启售状态的循环sql语句重构,于是这里为了保持统一,也没有重构,等一下后面是否有优化方案

> 修改套餐内容的时候,如果添加了新的菜品,但是没有启售,那么套餐是否应该也设置为停售状态?还是统一在修改之后均设置成停售状态?资料代码里面貌似并没有注意到这个问题

#### 功能测试

总之就是没问题...

> 提交一下代码~

## Day05 2023.12.24 Redis与店铺营业状态设置

### Redis入门

#### Redis简介

> :bookmark_tabs:`Redis`:是一个基于内存的key-value结构数据库

- 基于内存存储,读写性能高
- 适合存储热点数据(热点商品,资讯,新闻等,短时间内会有大量用户访问)
- 应用广泛

#### Redis安装

> 解压资料压缩包,命令行所在目录运行下面指令
>
> ![image-20231224134841800](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224134841800.png)
>
> 再另开cmd运行redis-cli.exe进入客户端![image-20231224135152304](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224135152304.png)
>
> 可以指定ip和端口
>
> ```cmd
> redis-cli.exe -h localhost -p 6379
> ```
>
> 设置密码 将redis.windows.conf文件 requirepass 注释取消掉
>
> ![image-20231224135648656](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224135648656.png)
>
> ![image-20231224135927039](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224135927039.png)
>
> ![image-20231224140002013](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224140002013.png)

> :bell:由于每次都要手动启动redis很麻烦,笔者这里将redis注册为windows服务然后开机自启动,[此处教程](https://www.jianshu.com/p/4a5ebe3c6dbd)

#### 图形化操作

> 打算直接用idea的redis图形化界面了...

和mysql添加数据源的操作一样

用户为空,密码填写你设置的密码,数据库默认有0-15共16个,数据库之间互相独立

![image-20231224182108393](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224182108393.png)

### Redis数据类型

> key-value中key是字符串类型,而value有5种常用数据类型

| 数据类型                 | 特点                                                         |
| ------------------------ | ------------------------------------------------------------ |
| 字符串 string            | 普通字符串,最简单的数据类型                                  |
| 哈希  hash               | 类似于java中的HashMap结构,适合存储一些对象                   |
| 列表 list                | 按照插入顺序排序,可以有重复元素,类似LinkedList               |
| 集合 set                 | 无序集合,没有重复元素,类似HashSet                            |
| 有序集合 sorted set/zset | 集合每个元素关联一个分数(score),根据分数升序排序,没有重复元素,分数是double类型 |

### Redis常用命令

#### 字符串操作命令

| 命令                    | 功能                         |
| ----------------------- | ---------------------------- |
| set key value           | 设定指定key的值              |
| get key                 | 获取指定key的值              |
| setex key seconds value | 设定指定key值,并设置过期时间 |
| setnx key value         | 只有在key不存在时设置key的值 |

#### 哈希操作命令

![image-20231224141801532](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224141801532.png)

| 命令                 | 功能                                  |
| -------------------- | ------------------------------------- |
| hset key field value | 将哈希表key中的字段field值设置为value |
| hget key field       | 获取指定field的value值                |
| hdel key field       | 删除指定field的键值对                 |
| hkeys key            | 获取哈希表中所有字段                  |
| hvals key            | 获取哈希表中所有值                    |

#### 列表操作命令

![image-20231224142452224](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224142452224.png)

| 命令                      | 功能                           |
| ------------------------- | ------------------------------ |
| lpush key value1 [value2] | 将一个或多个值插入到头部(左侧) |
| lrange key start stop     | 获取列表指定范围内元素         |
| rpop key                  | 移除并获取列表最后一个元素     |
| llen key                  | 获取列表长度                   |

#### 集合操作命令

![image-20231224145420287](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224145420287.png)

| 命令                       | 功能                     |
| -------------------------- | ------------------------ |
| sadd key member1 [member2] | 向集合添加一个或多个成员 |
| smembers key               | 返回集合中的所有成员     |
| scard key                  | 获取集合的成员数         |
| sinter key1 [key2]         | 返回给定所有集合的交集   |
| sunion key1 [key2]         | 返回所有给定集合的并集   |
| srem key member1 [member2] | 删除集合中一个或多个成员 |

#### 有序集合操作命令

![image-20231224154921299](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224154921299.png)



| 命令                                     | 功能                                                         |
| ---------------------------------------- | ------------------------------------------------------------ |
| zadd key score1 member1 [score2 member2] | 向有序集合添加一个或多个成员                                 |
| zrange key start stop [withscores]       | 通过索引区间返回有序集合中指定区间内的成员,withscores会将分数也返回[start和stop设置为0和-1表示所有成员] |
| zincrby key increment member             | 有序集合中对指定成员的分数加上增量increment                  |
| zrem key member1 [member2]               | 移除有序集合中的一个或多个成员                               |

#### 通用命令

> 任何数据类型都可以使用的命令

| 命令         | 功能                               |
| ------------ | ---------------------------------- |
| keys pattern | 查找所有符合给定样式的key          |
| exists key   | 检查给定key是否存在(1存在 0不存在) |
| type key     | 返回key储存的值的类型              |
| del key      | key存在的时候删除key               |

### 在Java操作Redis

#### Redis的Java客户端

- Jedis  -> 官方推荐无缝过渡
- lettuce -> 底层基于netty,性能优秀
- spring data redis -> spring提供的封装,更加简单

#### Spring Data Redis使用方式 	

![image-20231224161111563](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224161111563.png)

1. 导入maven坐标(初始工程已完成)

2. 配置Redis数据源

    - application.yml配置

        ![image-20231224162448243](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224162448243.png)

    - dev配置

        ![image-20231224162535211](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224162535211.png)

3. 编写配置类,创建Redis Template对象

    ```java
    @Configuration
    @Slf4j
    public class RedisConfiguration {
        @Bean
        public RedisTemplate redisTemplate(RedisConnectionFactory redisConnectionFactory){
            log.info("开始创建redis模板对象");
            //设置redis连接工厂对象
            RedisTemplate redisTemplate = new RedisTemplate();
            redisTemplate.setConnectionFactory(redisConnectionFactory);
            //设置redis key的序列化器
            redisTemplate.setKeySerializer(new StringRedisSerializer());
            return redisTemplate;
        }
    
    }
    ```

4. 通过Redis Template对象操作Redis

> :bell:关于序列化器
>
> 如果指定key序列化器为String类型,则可以在图形化界面查看到string正常的值,如果使用默认或其他类型则会产生序列化的乱码

### 店铺营业状态设置

#### 需求分析和设计

![image-20231224185747063](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224185747063.png)

> 由于客户端和管理端请求前缀不同,因此 两者对于店铺营业状态的查询采用不同接口

![image-20231224185947613](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224185947613.png)

> 由于店铺只有一个,如果为此还要特地去建一张mysql表的话太浪费了,所以直接用redis的字符串来存储就行了

#### 代码开发

> 由于接口比较简单,三个接口的开发放在一起了

```java
//常量类
public class ShopConstant {

        //营业
        public static final Integer ENABLE = 1;

        //休息
        public static final Integer DISABLE = 0;

        //redis字段
        public static final String SHOP_STATUS_KEY = "SHOP_STATUS";

}

```

> :bell:这里自己创建了一个常量类用来封装商铺状态以及redis的商铺状态key值

```java
//管理端ShopController
@RestController("adminShopController")
@RequestMapping("/admin/shop")
@Api(tags = "商铺管理接口")
@Slf4j
public class ShopController {
    @Autowired
    private RedisTemplate<String, Integer> redisTemplate;

    /**
     * 设置商铺营业状态
     * @param status
     * @return
     */
    @PutMapping("/{status}")
    @ApiOperation("设置商铺营业状态")
    public Result setStatus(@PathVariable Integer status){
        log.info("设置商铺营业状态：{}",status == ShopConstant.ENABLE ? "营业中" : "休息中");
        redisTemplate.opsForValue().set(ShopConstant.SHOP_STATUS_KEY,status);
        return Result.success();
    }

    /**
     * 获取商铺营业状态
     * @return
     */
    @GetMapping("/status")
    @ApiOperation("获取商铺营业状态")
    public Result<Integer> getStatus(){
        Integer status = redisTemplate.opsForValue().get(ShopConstant.SHOP_STATUS_KEY);
        log.info("获取商铺营业状态：{}",status == ShopConstant.ENABLE ? "营业中" : "休息中");
        return Result.success(status);
    }

}
```

```java
//用户端ShopController
@RestController("userShopController")
@RequestMapping("/user/shop")
@Api(tags = "商铺管理接口")
@Slf4j
public class ShopController {
    @Autowired
    private RedisTemplate<String, Integer> redisTemplate;
    /**
     * 获取商铺营业状态
     * @return
     */
    @GetMapping("/status")
    @ApiOperation("获取商铺营业状态")
    public Result<Integer> getStatus(){
        Integer status = redisTemplate.opsForValue().get(ShopConstant.SHOP_STATUS_KEY);
        log.info("获取商铺营业状态：{}",status == ShopConstant.ENABLE ? "营业中" : "休息中");
        return Result.success(status);
    }

}

```

> :bell:因为管理端和用户端都有一个ShopController,都以相同的名字(默认为首字母小写)注入到了SpringIOC容器中产生冲突,因此用户端的名字需要在@RestController注解另行设置 



#### 功能测试

顺利

![image-20231224193626690](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224193626690.png)

![image-20231224193728743](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224193728743.png)



> :bell:因为后续要开发许多用户端接口,因此在swagger想要做出区分,可以在WebmvcConfiguration原来生成swagger文档的位置替换成如下代码
>
> ```java
>     /**
>      * 生成管理端接口文档
>      * @return
>      */
>     @Bean
>     public Docket docketAdmin() {
>         log.info("开始生成管理端接口文档...");
>         ApiInfo apiInfo = new ApiInfoBuilder()
>                 .title("苍穹外卖项目管理端接口文档")
>                 .version("2.0")
>                 .description("苍穹外卖项目管理端接口文档")
>                 .build();
>         Docket docket = new Docket(DocumentationType.SWAGGER_2)
>             .groupName("管理端接口文档")
>                 .apiInfo(apiInfo)
>                 .select()
>                 .apis(RequestHandlerSelectors.basePackage("com.weekie.controller.admin"))
>                 .paths(PathSelectors.any())
>                 .build();
>         return docket;
>     }
> 
>     /**
>      * 生成用户端接口文档
>      * @return
>      */
>     @Bean
>     public Docket docketUser() {
>         log.info("开始生成用户端接口文档...");
>         ApiInfo apiInfo = new ApiInfoBuilder()
>             .title("苍穹外卖项目用户端接口文档")
>             .version("2.0")
>             .description("苍穹外卖项目用户端接口文档")
>             .build();
>         Docket docket = new Docket(DocumentationType.SWAGGER_2)
>             .groupName("用户端接口文档")
>             .apiInfo(apiInfo)
>             .select()
>             .apis(RequestHandlerSelectors.basePackage("com.weekie.controller.user"))
>             .paths(PathSelectors.any())
>             .build();
>         return docket;
>     }
> ```
>
> 
>
> 效果如图
>
> ![image-20231224195636059](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224195636059.png)





## Day06 2023.12.28 微信登录与商品浏览

### HttpClient

> :bookmark_tabs:`HttpClient`:是JavaEE子项目,可以让java代码通过它发送http请求
>
> ![image-20231224212513276](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224212513276.png)

#### 入门案例

```java
@SpringBootTest
public class HttpClientTest {
    @Test
    public void testGET() throws IOException {
        //创建HttpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();//CloseableHttpClient是HttpClient的一个实现类,HttpClients是HttpClient的工具类,用于生成HttpClient对象
        //创建请求对象
        HttpGet httpGet = new HttpGet("http://localhost:8080/user/shop/status");
        //发送请求,并接受响应
        CloseableHttpResponse response = httpClient.execute(httpGet);
        //获取响应状态码
        int statusCode = response.getStatusLine().getStatusCode();
        System.out.println("服务端响应状态码"+statusCode);
        //获取响应对象
        HttpEntity entity = response.getEntity();
        String body = EntityUtils.toString(entity);
        System.out.println("服务端响应数据为:"+body);

        //关闭资源
        response.close();
        httpClient.close();
    }
    
    
    @Test
    public void testPOST() throws IOException {
        //创建HttpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();
        //创建请求对象
        HttpPost httpPost = new HttpPost("http://localhost:8080/admin/employee/login");
        StringEntity entity = new StringEntity(
            JSONObject.toJSONString(new JSONObject()
            .fluentPut("username", "admin")
            .fluentPut("password", "123456")));
        //设置请求格式和编码
        entity.setContentType("application/json");
        entity.setContentEncoding("utf-8");
        httpPost.setEntity(entity);

        //发送请求,并接受响应
        CloseableHttpResponse response = httpClient.execute(httpPost);
        //获取响应状态码
        int statusCode = response.getStatusLine().getStatusCode();
        System.out.println("服务端响应状态码"+statusCode);
        //获取响应对象
        HttpEntity responseEntity = response.getEntity();
        String body = EntityUtils.toString(responseEntity);
        System.out.println("服务端响应数据为:"+body);
        //关闭资源
        response.close();
        httpClient.close();
    }
}	
```



测试成功

![image-20231224213538330](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224213538330.png)

![image-20231224214812206](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224214812206.png)

> 项目中已经封装了HttpClientUtil工具类,直接使用就行



### 微信小程序开发

#### 准备工作

1. 注册小程序并获取app id和app secret

    > 参考视频教程即可,这里我将id和secret设置成了环境变量存储在电脑中

2. 安装开发者工具

#### 入门案例

- 创建项目(不使用模板)

- 进入项目,在详情栏本地设置中勾选

    ![image-20231224223139028](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224223139028.png)

##### 目录结构

![image-20231224223236181](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224223236181.png)

![image-20231224223404507](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231224223404507.png)

### 微信登录业务开发

####  导入小程序代码

导入资料提供的项目文件夹

请求的后端地址可以在common/vendor.js里面设置

![image-20231227155904296](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227155904296.png)

#### 微信登录流程

![微信小程序注册入口与登陆 - 知乎](https://pic3.zhimg.com/v2-8283b8896df8723e624d4b82d3805532_r.jpg)

![image-20231227160534106](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227160534106.png)

![image-20231227161148388](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227161148388.png)

postman进行测试

![image-20231227161818610](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227161818610.png)

![image-20231227161832152](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227161832152.png)

#### 需求分析和设计

![image-20231227162051320](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227162051320.png)

![image-20231227162218899](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227162218899.png)

![image-20231227162632857](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227162632857.png)

> :question: 为什么接口路径有两个user?
>
> -> 第一个user代表用户端,第二个user代表userController,用来处理和用户相关的请求

#### 代码开发

##### 进行小程序相关配置

导入小程序id和密钥

![image-20231227165302315](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227165302315.png)

![image-20231227165325673](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227165325673.png)

> :bell:这里用了系统环境变量来存储

配置为微信用户生成jwt令牌时使用的配置项

![image-20231227165806601](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227165806601.png)

##### 业务主要代码开发

```java
//Controller
@RestController
@RequestMapping("/user/user")
@Api(tags = "用户管理接口")
@Slf4j
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private JwtProperties jwtProperties;


    /**
     * 用户微信登录
     * @param userLoginDTO
     * @return
     */
    @PostMapping("/login")
    @ApiOperation("用户微信登录")
    public Result<UserLoginVO> login(@RequestBody UserLoginDTO userLoginDTO){
        log.info("用户微信登录：{}",userLoginDTO.getCode());
        //微信登录
        User user = userService.login(userLoginDTO);
        //为微信用户生成jwt令牌
        Map<String,Object> claims = new HashMap<>();
        claims.put(JwtClaimsConstant.USER_ID,user.getId());
        String token = JwtUtil.createJWT(jwtProperties.getUserSecretKey(), jwtProperties.getUserTtl(),
            claims);
        //封装成VO
        UserLoginVO userLoginVO = UserLoginVO.builder()
            .id(user.getId())
            .openid(user.getOpenid())
            .token(token).build();
        return Result.success(userLoginVO);


    }
}
```

```java
//ServiceImpl
@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private WeChatProperties weChatProperties;
    @Autowired
    private UserMapper userMapper;

    /**
     * 用户微信登录
     *
     * @param userLoginDTO
     * @return
     */
    @Override
    public User login(UserLoginDTO userLoginDTO) {
        //调用微信接口获取openid
        String openid = getOpenid(userLoginDTO.getCode());
        //判断openid是否存在
        if(openid == null){
            log.error("微信登录失败，code无效");
            throw new LoginFailedException(MessageConstant.LOGIN_FAILED);
        }
        //判断用户是否是新的用户,如果是新用户则自动完成注册
        User user = userMapper.getByOpenid(openid);
        if(user == null){
            user = User.builder().openid(openid)
                .createTime(LocalDateTime.now())
                .build();
            userMapper.insert(user);
        }

        return user;
    }

    /**
     * 调用微信接口获取openid
     * @param code
     * @return
     */
    private String getOpenid(String code){
        Map<String,String> params = new HashMap<>();
        params.put(WeChatConstent.WX_LOGIN_APPID,weChatProperties.getAppid());
        params.put(WeChatConstent.WX_LOGIN_SECRET,weChatProperties.getSecret());
        params.put(WeChatConstent.WX_LOGIN_JSCODE,code);
        params.put(WeChatConstent.WX_LOGIN_GRANT_TYPE,WeChatConstent.WX_LOGIN_GRANT_TYPE_VALUE);
        String openid = JSONObject.parseObject(HttpClientUtil.doGet(WeChatConstent.WX_LOGIN_URL,params)).getString(WeChatConstent.WX_LOGIN_OPENID);
        return openid;
    }

}
```

> :bell:这里将微信登录获取openid的代码抽取成了类的私有方法,并且将微信请求接口相关常量封装到了一个常量类当中
> ```java
> //常量类
> public class WeChatConstent {
>     //微信服务登录接口地址
>     public static final String WX_LOGIN_URL = "https://api.weixin.qq.com/sns/jscode2session";
> 
>     //微信服务登入传入参数键值
>     public static final String WX_LOGIN_APPID = "appid";
>     public static final String WX_LOGIN_SECRET = "secret";
>     public static final String WX_LOGIN_JSCODE = "js_code";
>     public static final String WX_LOGIN_GRANT_TYPE = "grant_type";
>     public static final String WX_LOGIN_GRANT_TYPE_VALUE = "authorization_code";
> 
>     //微信服务登入返回参数键值
>     public static final String WX_LOGIN_OPENID = "openid";
> }
> ```
>
> 

```java
//Mapper
@Mapper
public interface UserMapper {
    /**
     * 根据openid查询用户
     * @param openid
     * @return
     */
    @Select("select * from user where openid = #{openid}")
    User getByOpenid(String openid);

    /**
     * 新增用户
     * @param user
     */
    void insert(User user);
}

//动态xml
<mapper namespace="com.weekie.mapper.UserMapper">


    <insert id="insert" useGeneratedKeys="true" keyProperty="id">
        insert into user (openid,name,phone,sex,id_number,avatar,create_time)
        values(#{openid},#{name},#{phone},#{sex},#{idNumber},#{avatar},#{createTime})
    </insert>
</mapper>
```

> :exclamation: 这里Controller需要获取User的id,因此要进行主键回显的设置

##### 设置用户端jwt校验拦截器

```java
//拦截器

**
 * jwt令牌校验的拦截器
 */
@Component
@Slf4j
public class JwtTokenUserInterceptor implements HandlerInterceptor {
    @Autowired
    private JwtProperties jwtProperties;


    /**
     * 校验jwt
     *
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //判断当前拦截到的是Controller的方法还是其他资源
        if (!(handler instanceof HandlerMethod)) {
            //当前拦截到的不是动态方法，直接放行
            return true;
        }

        //1、从请求头中获取令牌
        String token = request.getHeader(jwtProperties.getUserTokenName());

        //2、校验令牌
        try {
            log.info("jwt校验:{}", token);
            Claims claims = JwtUtil.parseJWT(jwtProperties.getUserSecretKey(), token);
            Long userId = Long.valueOf(claims.get(JwtClaimsConstant.USER_ID).toString());
            //将当前登录用户的id存入到当前线程中
            BaseContext.setCurrentId(userId);
            log.info("当前用户id："+userId);
            //3、通过，放行
            return true;
        } catch (Exception ex) {
            //4、不通过，响应401状态码
            response.setStatus(401);
            return false;
        }
    }
}

```

```java
//配置类进行拦截器注册
    protected void addInterceptors(InterceptorRegistry registry) {
        log.info("开始注册自定义拦截器...");
        registry.addInterceptor(jwtTokenUserInterceptor).addPathPatterns("/user/**")
            .excludePathPatterns("/user/user/login")
            .excludePathPatterns("/user/shop/status");
    }
```

> :exclamation: 这里还要排除查询商店状态这一请求路径,因为这项请求在用户还没有执行操作的时候就已经执行了 

#### 功能测试

成功

![image-20231227221634094](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227221634094.png)

![image-20231227222722136](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227222722136.png)

### 导入商品浏览功能代码

#### 需求分析和设计

##### 产品原型

![image-20231227224634280](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227224634280.png)

> 如果菜品没有口味数据,则右下角只显示+号,否则会显示`选择规格`

##### 接口设计

| 接口路径(/user) | 方法 | 功能                            |
| --------------- | ---- | ------------------------------- |
| /category/list  | GET  | 查询分类                        |
| /dish/list      | GET  | 根据分类Id查询菜品,包括口味数据 |
| /setmeal/list   | GET  | 根据分类id查询套餐              |
| /setmeal/dish   |      | 根据套餐id查询包含的菜品        |

![image-20231227225021239](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227225021239.png)

![image-20231227225535846](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227225535846.png)

![image-20231227225510077](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227225510077.png)

![image-20231227225446376](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227225446376.png)

#### 代码导入

> :exclamation: 注意除了controller以外,其他代码需要将里面的方法单独导入,而不是用整个文件覆盖

> :exclamation: 这里老师给的资料里面DishMapper实现的方法是list,而之前自己实现的是listByCategoryId方法,因此将该方法重构成`List<Dish> list(Dish dish)`,并将原来通过注解方式实现的sql改为动态xml语句
>
> ```java
> //改动新增的动态xml语句
> <select id="list" resultType="com.weekie.entity.Dish">
>      select * from dish
>      <where>
>          <if test="status!=null and status!=''">
>              and status=#{status}
>          </if>
>          <if test="categoryId!=null">
>              and category_id=#{categoryId}
>          </if>
>          <if test="name!=null and name!=''">
>              and name like concat('%',#{name},'%')
>          </if>
>      </where>
>      order by create_time desc
>  </select>
> ```
>
> 相应的service方法调用的地方只需要将原来categoryId用dish对象封装好即可,记得设置只查询启用的菜品
>
> ```java
> //ServiceImpl改动的地方
>  /**
>      * 根据分类id查询菜品
>      *
>      * @param categoryId
>      * @return
>      */
>     public List<Dish> listByCategoryId(Long categoryId){
>         Dish dish = Dish.builder().categoryId(categoryId)
>             .status(StatusConstent.ENABLE)
>             .build();
>         return dishMapper.list(dish);
>     }
> ```
>
> 

#### 功能测试

> :exclamation: 小程序端报错401了,根据视频弹幕提示,可能是常量EMP_ID忘记改成USER_ID或者配置类配置错了
>
> ![image-20231227234406421](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227234406421.png)
>
> 但检查之后发现不是这个问题,而是
>
> ![image-20231227235155833](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227235155833.png)
>
> 没错,新版微信发过来的请求头token名字更新了,叫做`authentication`,而不是`authorization`
>
> 只需要将配置文件中的user-token-name更改即可
>
> ![image-20231227235454820](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227235454820.png)

测试成功

![image-20231227235804882](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231227235804882.png)

![image-20231228000126770](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231228000126770.png)

> :bell:渲染错误只是因为部分图片地址是老师服务器那边的,获取不到,不用担心

> 提交一下代码~

## Day07 2023.12.30 缓存商品与购物车

### 缓存菜品

#### 问题说明

> 用户端小程序展示的菜品数据都是通过查询数据库获得的,如果用户端访问量比较大,数据库访问压力随之增大



#### 实现思路

使用redis来缓存菜品数据,减少数据库查询操作

![image-20231228134814587](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231228134814587.png)

##### 缓存逻辑分析

- 缓存粒度:每个分类下的菜品保存为一份缓存数据
- 缓存更新:数据库中菜品数据有变更时及时清理缓存数据

#### 代码开发

> :exclamation: 一定要事先检查自己操作的文件是user端而不是admin端的,笔者由于没注意,写到一半才发现这个问题(哭)
> :star: 这里推荐idea插件 mark directory,可以将指定目录的文件设置成指定颜色,这样就可以在导航栏更容易区分哪些文件是用户端,哪些文件是管理端的了

> :exclamation: 之前在用户端和管理端的shopController控制台输出有问题,原来status == ShopConstant.ENABLE语句需要改成如下所示
>
> ![image-20231228162338009](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231228162338009.png)
>
> 这是java很基础的一个知识点,== 用于比较引用的地址是否相等,而不是值相等,之所以老师的代码可以用==,是因为老师没有把字符串常量封装到常量类里面,字符串常量单独存储在常量区,因此相同的字符串存储的地址是一样的

```java
//Controller
    /**
     * 根据分类id查询菜品
     *
     * @param categoryId
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("根据分类id查询菜品")
    public Result<List<DishVO>> list(Long categoryId) {
        //从redis中获取菜品列表
        String key = RedisConstent.USER_DISH_LIST_KEY_PREFIX + categoryId;//dish_id
        List<DishVO> list = (List<DishVO>) redisTemplate.opsForValue().get(key);
        //如果redis有数据，直接返回
        if(list != null && list.size() > 0){
            log.info("从redis中获取菜品列表");
            return Result.success(list);
        }
        //如果redis没有数据，从数据库中查询,并将数据存入redis
        Dish dish = Dish.builder()
            .categoryId(categoryId)
            .status(StatusConstant.ENABLE).build();

        list = dishService.listWithFlavor(dish);
        redisTemplate.opsForValue().set(key,list);

        return Result.success(list);
    }

}
```

> :exclamation: 这里将key值前缀封装到了RedisConstant类中,并且重构之前的ShopConstant类中的key字段转移到RedisConstant类中(通过idea重构中的移动成员变量即可实现)

```java
//常量类
public class RedisConstent {
    //redis key
    public static final String USER_DISH_LIST_KEY_PREFIX = "dish_";

    public static final String SHOP_STATUS_KEY = "SHOP_STATUS";
}

```



#### 功能测试

![image-20231228163328994](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231228163328994.png)

第二次直接命中缓存

![image-20231228163454762](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231228163454762.png)

浏览所有分类,都存入了缓存中

![image-20231228163731690](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231228163731690.png)

##### 数据一致性问题

>  :exclamation: 数据一致性问题,在数据库数据发生变动的时候需要及时清理缓存
>  需要进行清除缓存的请求类型:修改,删除,启售停售,新增菜品(因为新增菜品后分类也会发生改变,不清理会导致页面展示不出来该菜品)
>
>  :bell:上述操作只会在管理端出现,因此需要转到admin的controller进行修改
>
>  ```java
>  // admin/DishController
>  @Autowired
>  private RedisTemplate redisTemplate;
>  
>  /**
>           * 新增菜品
>           * @param dishDTO
>           * @return
>           */
>          @PostMapping
>          @ApiOperation("新增菜品")
>          public Result save(@RequestBody DishDTO dishDTO){
>              log.info("新增菜品：{}", dishDTO);
>              dishService.saveWithFlavor(dishDTO);
>              //清理单个分类缓存
>              cleanCache("dish_"+dishDTO.getCategoryId());
>  
>              return Result.success();
>          }
>  
>  /**
>           * 根据id删除菜品
>           * @param ids
>           * @return
>           */
>          @DeleteMapping
>          @ApiOperation("根据id批量删除菜品")
>          public Result delete(@RequestParam List<Long> ids){
>              log.info("根据id批量删除菜品：{}", ids);
>              dishService.deleteBatch(ids);
>              //清理redis缓存
>              // TODO: 2023/12/30 有必要删除的时候清理缓存吗？毕竟删除的前提是禁用这个菜品,既然禁用了，那么就不会再被用户查询到了,等修改的时候再一并清理缓存不就好了吗？
>              cleanCache("dish_*");
>              return Result.success();
>          }
>  /**
>       * 根据id修改菜品
>       * @param dishDTO
>       * @return
>       */
>      @PutMapping
>      @ApiOperation("根据id修改菜品")
>      public Result update(@RequestBody DishDTO dishDTO){
>              log.info("修改菜品：{}", dishDTO);
>              dishService.updateWithFlavor(dishDTO);
>              //由于修改的时候涉及到的缓存更新机制比较复杂，所以这里简单粗暴的清理所有缓存
>              Set keys = redisTemplate.keys("dish_*");
>              return Result.success();
>      }
>      /**
>       * 启用或禁用菜品
>       * @param status
>       * @param id
>       * @return
>       */
>      @PostMapping("/status/{status}")
>      @ApiOperation("启用或禁用菜品")
>      public Result status(@PathVariable Integer status,Long id){
>              dishService.startOrStop(status,id);
>              //同样的，这里也是简单粗暴的清理所有缓存
>              Set keys = redisTemplate.keys("dish_*");
>              return Result.success();
>      }
>  
>      //清理缓存数据
>      private void cleanCache(String pattern){
>          Set keys = redisTemplate.keys(pattern);
>          redisTemplate.delete(keys);
>      }
>  ```
>
>  简单测试一下
>
>  修改烤鸟菜品为蜀味牛蛙分类
>
>  ![image-20231230164519662](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230164519662.png)
>
>  缓存已清空
>
>  ![image-20231230165018696](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230165018696.png)
>
>  查询成功
>
>  ![image-20231230165115868](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230165115868.png)

### 缓存套餐

#### Spring Cache

> :bookmark_tabs:`Spring Cache`:是spring的一个框架,实现了基于注解的缓存功能,提供了顶层抽象,可以底层丝滑切换到不同的缓存实现(如 EHCache Caffeine Redis)

| 注解           | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| @EnableCaching | 开启缓存注解功能,通常加载启动雷伤                            |
| @Cacheable     | 在方法执行前先查询缓存中是否有数据,如果有数据,则直接返回缓存数据,如果没有,则通过反射调用方法将方法返回值放到缓存中 |
| @CachePut      | 将方法的返回值放到缓存中.和Cacheable的区别是它只能进行放,不能取数据 |
| @CacheEvict    | 将一条或多条数据从缓存中删除                                 |

##### 测试项目

按照教程导入项目并配置好数据库之后

```java
//Controller
    @PostMapping
    @CachePut(cacheNames = "userCache",key = "#user.id")//如果使用spring cache缓存数据,key的生成为 userCache::key值
    public User save(@RequestBody User user){
        userMapper.insert(user);
        return user;
    }
```

> :bookmark_tabs:`SpEL`:Spring表达式(Spring Expression Language),可以根据表达式动态传入key值,其中的`.`被称作对象导航
>
> 上述表达式也可以写成`"#result.id"`,表示从注解修饰的方法的返回值中获取成员变量,还可以写成`"#p0"`获取方法的第一个参数,`#a0.id`

```java
    @GetMapping
    @Cacheable(cacheNames = "userCache",key = "#id")//如果使用spring cache缓存数据,key的生成为 userCache::key值
    public User getById(Long id){
        User user = userMapper.getById(id);
        return user;
    }
```

> Cacheable注解会首先查看是否有指定key的缓存,如果没有则执行下面的方法获取返回值
>
> :exclamation:该注解不能使用SpEL中的`"result"`语句

```java
    @DeleteMapping
    @CacheEvict(cacheNames = "userCache",key = "#id")
    public void deleteById(Long id){
        userMapper.deleteById(id);
    }

	@DeleteMapping("/delAll")
    @CacheEvict(cacheNames = "userCache",allEntries = true)
    public void deleteAll(){
        userMapper.deleteAll();
    }

```

> @CacheEvict删除指定键值的缓存,`allEntries = true`可以删除所有的键值对

#### 实现思路

![image-20231230182751987](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230182751987.png)

#### 代码开发

```java
//用户端 setmeal Controller
/**
     * 条件查询
     *
     * @param categoryId
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("根据分类id查询套餐")
    @Cacheable(cacheNames = "setmealCache",key = "#categoryId")
    public Result<List<Setmeal>> list(Long categoryId) {
        Setmeal setmeal = new Setmeal();
        setmeal.setCategoryId(categoryId);
        setmeal.setStatus(StatusConstant.ENABLE);

        List<Setmeal> list = setmealService.list(setmeal);
        return Result.success(list);
    }
```

```java
//管理端 setmealController

/**
 * 套餐管理
 */
@RestController
@RequestMapping("/admin/setmeal")
@Api(tags = "套餐管理接口")
@Slf4j
public class SetmealController {
    @Autowired
    private SetmealService setmealService;
    @PostMapping
    @ApiOperation("新增套餐")
    @CacheEvict(cacheNames = "setmealCache",key = "#setmealDTO.categoryId")
    public Result save(@RequestBody SetmealDTO setmealDTO){
        log.info("新增套餐：{}",setmealDTO);
        setmealService.saveWithDish(setmealDTO);
        return Result.success();
    }



    /**
     * 根据id批量删除套餐
     * @param ids
     * @return
     */
    @DeleteMapping
    @ApiOperation("删除套餐")
    @CacheEvict(cacheNames = "setmealCache",allEntries = true)
    public Result delete(@RequestParam List<Long> ids) {
        log.info("删除套餐：{}", ids);
        setmealService.deleteBatch(ids);
        return Result.success();
    }


    /**
     * 修改套餐
     * @param setmealDTO
     * @return
     */
    @PutMapping
    @ApiOperation("修改套餐")
    @CacheEvict(cacheNames = "setmealCache",allEntries = true)
    public Result update(@RequestBody SetmealDTO setmealDTO){
        log.info("更新套餐：{}",setmealDTO);
        setmealService.updateWithDish(setmealDTO);
        return Result.success();
    }

    /**
     * 修改套餐是否启售
     * @param status
     * @return
     */
    @PostMapping("/status/{status}")
    @ApiOperation("修改套餐是否启售")
    @CacheEvict(cacheNames = "setmealCache",allEntries = true)
    public Result status(@PathVariable Integer status,Long id){
        log.info("修改套餐为{}状态", Objects.equals(status, StatusConstant.ENABLE) ? "启售" : "停售");
        setmealService.startOrStop(status,id);
        return Result.success();
    }
}

```

#### 功能测试

停售套餐后,刷新小程序页面,套餐被隐藏

![image-20231230184017701](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230184017701.png)

![image-20231230184036394](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230184036394.png)

> 提交一下代码~

### 添加购物车

#### 需求分析和设计

![image-20231230184709521](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230184709521.png)

![image-20231230210750647](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230210750647.png)

![image-20231230210912050](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230210912050.png)

![image-20231230211145045](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230211145045.png)

![image-20231230211203740](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230211203740.png)

> :question: 为什么要设计冗余字段
>
> -> 提高查询速度,避免多次访问数据库
>
> :exclamation:冗余字段不要大量使用,并且冗余字段内容应该相对稳定

#### 代码开发

```java
//C端Controller
@RestController
@RequestMapping("/user/shoppingCart")
@Slf4j
@Api(tags = "C端购物车相关接口")
public class ShoppingCartController {
    @Autowired
    private ShoppingCartService shoppingCartService;
    /**
     * 添加购物车
     * @param shoppingCartDTO
     * @return
     */
    @PostMapping("/add")
    @ApiOperation("添加购物车")
    public Result add(@RequestBody ShoppingCartDTO shoppingCartDTO){
        log.info("添加购物车：{}",shoppingCartDTO);
        shoppingCartService.addShoppingCart(shoppingCartDTO);
        return Result.success();

    }

}
```

```java
//Service

@Service
@Slf4j
public class ShoppingCartServiceImpl implements ShoppingCartService {

    @Autowired
    private ShoppingCartMapper shoppingCartMapper;
    @Autowired
    private DishMapper dishMapper;
    @Autowired
    private SetmealMapper setmealMapper;

    /**
     * 添加购物车
     *
     * @param shoppingCartDTO
     */
    @Override
    public void addShoppingCart(ShoppingCartDTO shoppingCartDTO) {
        //获取购物车列表
        ShoppingCart shoppingCart = new ShoppingCart();
        BeanUtils.copyProperties(shoppingCartDTO, shoppingCart);
        shoppingCart.setUserId(BaseContext.getCurrentId());

        List<ShoppingCart> shoppingCartList = shoppingCartMapper.list(shoppingCart);
        //判断购物车中是否存在该商品
        if (shoppingCartList != null && shoppingCartList.size() > 0) {
            //如果存在，更新数量加1
            ShoppingCart cart = shoppingCartList.get(0);
            cart.setNumber(cart.getNumber()+1);
            shoppingCartMapper.updateNumberById(cart);
        }
        else{
            Long dishId = shoppingCartDTO.getDishId();
            //判断添加的是菜品还是套餐
            if( dishId != null){
                //添加菜品
                Dish dish = dishMapper.getById(dishId);
                shoppingCart.setName(dish.getName());
                shoppingCart.setImage(dish.getImage());
                shoppingCart.setAmount(dish.getPrice());
            }
            else{
                //添加套餐
                Long setmealId = shoppingCartDTO.getSetmealId();
                Setmeal setmeal = setmealMapper.getById(setmealId);
                shoppingCart.setName(setmeal.getName());
                shoppingCart.setImage(setmeal.getImage());
                shoppingCart.setAmount(setmeal.getPrice());
            }
            shoppingCart.setNumber(1);
            shoppingCart.setCreateTime(LocalDateTime.now());
            shoppingCartMapper.insert(shoppingCart);
        }
    }

}

```

```java
//Mapper
@Mapper
public interface ShoppingCartMapper {

    /**
     * 查询购物车列表
     * @param shoppingCart
     * @return
     */
    List<ShoppingCart> list(ShoppingCart shoppingCart);

    /**
     * 根据id更新购物车同一件商品数量
     * @param cart
     */
    @Update("update shopping_cart set number = #{number} where id = #{id}")
    void updateNumberById(ShoppingCart cart);

    /**
     * 插入购物车数据
     * @param shoppingCart
     */
    @Insert("insert into shopping_cart (user_id, dish_id, setmeal_id, name, image, amount, number, create_time) values (#{userId}, #{dishId}, #{setmealId}, #{name}, #{image}, #{amount}, #{number}, #{createTime})")
    void insert(ShoppingCart shoppingCart);
}

//动态xml

    <select id="list" resultType="com.weekie.entity.ShoppingCart">
        select * from shopping_cart
        <where>
            <if test="userId != null">
                and user_id = #{userId}
            </if>
            <if test="setmealId != null">
                and setmeal_id = #{setmealId}
            </if>
            <if test="dishId != null">
                and dish_id = #{dishId}
            </if>
            <if test="dishFlavor != null">
                and dish_flavor = #{dishFlavor}
            </if>
        </where>
    </select>
```

#### 功能测试

正常封装,且重复添加只增加数量,由于查看购物车业务还没有开发,前端不会返回结果

![image-20231230232135529](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230232135529.png)

> 提交一下代码~

### 查看购物车

#### 需求分析和设计

![image-20231230233218034](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230233218034.png)

![image-20231230233313272](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231230233313272.png)

#### 代码开发

```java
//Controller
    /**
     * 查询购物车
     * @return
     */
    @GetMapping("/list")
    @ApiOperation("查询购物车")
    public Result<List<ShoppingCart>> list(){
        List<ShoppingCart> list = shoppingCartService.showShoppingCart();
        return Result.success(list);
    }
```

```java
//ServiceImpl
    /**
     * 查询购物车
     * @return
     */
    @Override
    public List<ShoppingCart> showShoppingCart() {
        Long userId = BaseContext.getCurrentId();
        ShoppingCart shoppingCart = ShoppingCart.builder().userId(userId).build();
        shoppingCart.setUserId(BaseContext.getCurrentId());
        List<ShoppingCart> list = shoppingCartMapper.list(shoppingCart);
        return list;
    }

```



#### 功能测试

顺利

![image-20231231001031936](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231001031936.png)

### 清空购物车

#### 代码开发

```java
//Controller
    /**
     * 清空购物车
     * @return
     */
    @DeleteMapping("/clean")
    @ApiOperation("清空购物车")
    public Result clean(){
        shoppingCartService.cleanShoppingCart();
        return Result.success();
    }
```

```java
//Service
    /**
     * 清空购物车
     */
    @Override
    public void cleanShoppingCart() {
        Long userId = BaseContext.getCurrentId();
        shoppingCartMapper.deleteByUserId(userId);
    }
```

```java
//Mapper
    /**
     * 根据用户id删除购物车数据
     * @param userId
     */
    @Delete("delete from shopping_cart where user_id = #{userId}")
    void deleteByUserId(Long userId);
```

#### 功能测试

清空成功

![image-20231231002124187](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231002124187.png)

### 删除购物车商品

#### 需求分析与设计

- 获取指定商品的主键id和数量,用于修改

- 查询购物车中指定商品的数量,如果大于1,则减1,否则删除该商品

#### 代码开发

```java
//Controller
    /**
     * 删除购物车中的一个商品
     * @param shoppingCartDTO
     * @return
     */
    @PostMapping("/sub")
    @ApiOperation("删除购物车中的一个商品")
    public Result sub(@RequestBody ShoppingCartDTO shoppingCartDTO){
        log.info("删除购物车中的一个商品：{}",shoppingCartDTO);
        shoppingCartService.subShoppingCart(shoppingCartDTO);
        return Result.success();
    }
```

```java
//ServiceImpl
    /**
     * 删除购物车中的一个商品
     *
     * @param shoppingCartDTO
     */
    @Override
    public void subShoppingCart(ShoppingCartDTO shoppingCartDTO) {
        Long userId = BaseContext.getCurrentId();
        ShoppingCart shoppingCart = new ShoppingCart();
        BeanUtils.copyProperties(shoppingCartDTO, shoppingCart);
        shoppingCart.setUserId(userId);
        //获取指定商品的主键id和商品数量
        List<ShoppingCart> list = shoppingCartMapper.list(shoppingCart);
        if(list == null || list.size() == 0){
            throw new BaseException("购物车中不存在该商品");
        }
        ShoppingCart cart = list.get(0);
        Integer number = cart.getNumber();
        if(number > 1){
            //数量大于1，更新数量减1
            cart.setNumber(number-1);
            shoppingCartMapper.updateNumberById(cart);
        }
        else{
            //数量等于1，删除该商品
            shoppingCartMapper.deleteById(cart);
        }

    }
```

> :information_source: 个人觉得既然用户能够删除购物车中的商品,那么这个商品在购物车数据库中肯定存在,没有必要判断,不过还是和老师保持一致吧,不一定哪天就因为这个细节出现了严重的bug...

```java
//Mapper
    @Delete("delete from shopping_cart where id = #{id}")
    void deleteById(ShoppingCart shoppingCart);
```



#### 功能测试

顺利

![image-20231231005937220](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231005937220.png)

### 对以前遗留问题的优化

#### 代码优化

- // TODO: 2023/12/23 找机会把循环sql的代码优化了

    > 调用dishMapper而不是setmealDishMapper来查询菜品,这样就可以将菜品是否启售一次性查询出来了,

    ```java
    //admi/SetmealServiceImpl
    /**
         * 启用或禁用套餐
         *
         * @param status
         * @param id
         */
        @Override
        public void startOrStop(Integer status, Long id) {
            if(Objects.equals(status, StatusConstant.ENABLE)){
    
                List<Dish> dishList = dishMapper.getBySetmealId(id);
                if(dishList != null && dishList.size() > 0){
                    dishList.forEach(dish -> {
                        if(StatusConstant.DISABLE == dish.getStatus()){
                            throw new SetmealEnableFailedException(MessageConstant.SETMEAL_ENABLE_FAILED);
                        }
                    });
                }
            }
    
            Setmeal setmeal = Setmeal.builder()
                .id(id)
                .status(status)
                .build();
            setmealMapper.update(setmeal);
        }
    ```

    >  可以在idea检查一下是否存在没有使用过的变量方法
    > [教程](https://www.cnblogs.com/chuzijing/p/14591220.html)

- // TODO: 2023/12/23 修改套餐内容的时候,如果添加了新的菜品,但是没有启售,那么套餐是否应该也设置为停售状态?还是统一在修改之后均设置成停售状态?

    > 在update方法末尾添加,如果原来套餐状态是启用的话,用try catch语句调用启用套餐来检查是否符合条件,如果中途报错,则将状态设置为停售

```java
    /**
     * 修改套餐
     *
     * @param setmealDTO
     */
    @Override
    public void updateWithDish(SetmealDTO setmealDTO) {
        //修改套餐基础信息
        Setmeal setmeal = new Setmeal();
        BeanUtils.copyProperties(setmealDTO,setmeal);
        setmealMapper.update(setmeal);
        //删除套餐菜品关系表中对应数据
        setmealDishMapper.deleteBySetmealIds(Arrays.asList(setmeal.getId()));
        //向套餐菜品关系表插入多条数据
        List<SetmealDish> setmealDishes = setmealDTO.getSetmealDishes();
        // TODO: 2023/12/23 将菜品数据批量填充的方法代码有重复,等待优化方案 
        //判断是否有菜品数据,并将套餐id填充
        if(setmealDishes != null && setmealDishes.size() > 0){
            setmealDishes.forEach(dish -> dish.setSetmealId(setmeal.getId()));
            //批量插入
            setmealDishMapper.insertBatch(setmealDishes);
        }

        if(Objects.equals(setmeal.getStatus(), StatusConstant.ENABLE)){
            try {
                //调用启用套餐方法检查是否能启用
                startOrStop(StatusConstant.ENABLE, setmeal.getId());
            } catch (SetmealEnableFailedException e) {
                //如果启用失败,则将套餐状态改为禁用
                               log.warn(MessageConstant.SETMEAL_ENABLE_FAILED);
                startOrStop(StatusConstant.DISABLE, setmeal.getId());
            }
            
        }

    }
}
```

#### 功能测试

将停售菜品加入启售套餐中,启售套餐自动变成停售

![image-20231228173117174](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231228173117174.png)

![image-20231228174023470](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231228174023470.png)

> :bell:前端暂时没有关于这种新增菜品包含停售菜品的响应信息,因此只在后端显示

> :bell:// TODO: 2023/12/23 将菜品数据批量填充的方法代码有重复,等待优化方案 
> 暂不解决

> 提交一下代码~

## Day08 用户下单与订单支付 2023.12.31

![image-20231231164553536](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231164553536.png)

### 导入地址簿功能代码

#### 产品原型

![image-20231231165226655](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231165226655.png)

![image-20231231165417594](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231165417594.png)

#### 功能测试

导入代码之后

![image-20231231171245110](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231171245110.png)

![image-20231231171254643](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231171254643.png)

### 用户下单

#### 需求分析和设计

##### 产品原型

![image-20231231171906726](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231171906726.png)

提交页面

![image-20231231172253265](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231172253265.png)

支付页面

![image-20231231172524059](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231172524059.png)

##### 接口设计

![image-20231231172628646](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231172628646.png)

##### 数据库设计

![image-20231231183301521](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231183301521.png)



订单表

![image-20231231183413875](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231183413875.png)

订单明细表

![image-20231231183809758](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231183809758.png)

#### 代码开发 

```java
//C端OrderController

```

> :bell:后续还要在管理端创建`OrderController`,因此提前在这里设置bean对象的别名

```java
//ServiceImpl
@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    private OrderDetailMapper orderDetailMapper;
    @Autowired
    private AddressBookMapper addressBookMapper;
    @Autowired
    private ShoppingCartMapper shoppingCartMapper;
    /**
     * 用户下单
     *
     * @param ordersSubmitDTO
     * @return
     */
    @Transactional
    @Override
    public OrderSubmitVO submitOrder(OrdersSubmitDTO ordersSubmitDTO) {
        //处理各种业务异常(地址簿为空，购物车为空等)
        AddressBook addressBook = addressBookMapper.getById(ordersSubmitDTO.getAddressBookId());
        if (addressBook == null) {
            throw new AddressBookBusinessException(MessageConstant.ADDRESS_BOOK_IS_NULL);
        }
        //获取当前用户的购物车数据
        ShoppingCart shoppingCart = new ShoppingCart();
        Long userId = BaseContext.getCurrentId();
        shoppingCart.setUserId(userId);
        List<ShoppingCart> shoppingCartList = shoppingCartMapper.list(shoppingCart);
        if (shoppingCartList == null || shoppingCartList.size() == 0) {
            throw new ShoppingCartBusinessException(MessageConstant.SHOPPING_CART_IS_NULL);
        }
        //向订单表插入一条订单数据
        Orders orders = new Orders();
        BeanUtils.copyProperties(ordersSubmitDTO, orders);
        orders.setOrderTime(LocalDateTime.now());
        orders.setPayStatus(Orders.UN_PAID);
        orders.setStatus(Orders.PENDING_PAYMENT);
        // TODO: 2023/12/31 用时间戳生成订单号可靠吗
        orders.setNumber(String.valueOf(System.currentTimeMillis()));
        orders.setConsignee(addressBook.getConsignee());
        orders.setUserId(userId);
                orders.setAddress(addressBook.getDetail());
        orders.setPhone(addressBook.getPhone());

        orderMapper.insert(orders);
        //向订单详情表插入多条订单详情数据
        List<OrderDetail> orderDetailList = new ArrayList<>();
        for (ShoppingCart cart : shoppingCartList) {
            OrderDetail orderDetail = new OrderDetail();
            BeanUtils.copyProperties(cart, orderDetail);
            orderDetail.setOrderId(orders.getId());//设置订单id
            orderDetailList.add(orderDetail);
        }
        //批量插入到订单详情表
        orderDetailMapper.insertBatch(orderDetailList);
        //清空用户购物车
        shoppingCartMapper.deleteByUserId(userId);
        //封装返回结果
        OrderSubmitVO orderSubmitVO = OrderSubmitVO.builder()
            .id(orders.getId())
            .orderNumber(orders.getNumber())
            .orderAmount(orders.getAmount())
            .orderTime(orders.getOrderTime()).build();
        
        return orderSubmitVO;
    }
}
```

> :question:为什么后端要处理这些异常状况,这种事情难道不是由前端负责的吗
>
> -> 前端的校验不能保证用户传过来的数据百分百正确,并且如果不法分子劫持了前端,可能会试图发送恶意数据造成后端瘫痪,因此后端有必要多上一层保险保障程序的健壮性

> :exclamation: 涉及了多个表的操作,记得加事务注解

```java
//OrderMapper

@Mapper
public interface OrderMapper {

    /**
     * 插入订单数据
     * @param orders
     */
    void insert(Orders orders);
}



//动态xml
<insert id="insert" useGeneratedKeys="true" keyProperty="id">
    insert into orders (
      number, status, user_id, address_book_id, order_time, checkout_time,
      pay_method, pay_status, amount, remark, phone, address, user_name,
      consignee, cancel_reason, rejection_reason, cancel_time,
      estimated_delivery_time, delivery_status, delivery_time,
      pack_amount, tableware_number, tableware_status
    )
    values (
     #{number}, #{status}, #{userId}, #{addressBookId}, #{orderTime}, #{checkoutTime},
     #{payMethod}, #{payStatus}, #{amount}, #{remark}, #{phone}, #{address}, #{userName},
     #{consignee}, #{cancelReason}, #{rejectionReason}, #{cancelTime},
     #{estimatedDeliveryTime}, #{deliveryStatus}, #{deliveryTime},
     #{packAmount}, #{tablewareNumber}, #{tablewareStatus}
    )
  </insert>
      
```

> :bell:感觉一个一个对照数据库表填写插入语句太繁琐了?直接把定义表结构的sql语句扔给ai让它生成就行了,想念mp的第xxx天(

```java
//OrderDetailMapper

@Mapper
public interface OrderDetailMapper {

    void insertBatch(List<OrderDetail> orderDetailList);
}

//动态xml
  <insert id="insertBatch">
    insert into order_detail (
    order_id, name, image, dish_id, setmeal_id, dish_flavor, number, amount
    )
    values
    <foreach collection="orderDetailList" item="orderDetail" separator=",">
      (
      #{orderDetail.orderId}, #{orderDetail.name}, #{orderDetail.image},
      #{orderDetail.dishId}, #{orderDetail.setmealId}, #{orderDetail.dishFlavor},
      #{orderDetail.number}, #{orderDetail.amount}
      )
    </foreach>
  </insert>

```



#### 功能测试

![image-20231231234009225](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231234009225.png)

![image-20231231233929708](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231233929708.png)

> 提交一下代码~

### 订单支付	

#### 微信支付介绍 

![image-20231231235424986](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231235424986.png)

![image-20231231235515429](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20231231235515429.png)

![image-20240101000017289](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101000017289.png)

业务关键流程

1. 商务后台调用微信接口生成预支付交易单

    ![image-20240101001047689](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101001047689.png)

2. 小程序A用户请求微信后台进行微信支付操作

    ![image-20240101001253005](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101001253005.png)

3. 微信后台返回支付结果通知商户

#### 微信支付准备工作

> :question:如何保证调用过程的安全性
>
> -> 使用多种加密,使用证书和密钥文件
>
> :question:微信后台如何调用到商户系统
>
> -> 由于商户地址目前是局域网主机地址,公网访问不到,可以利用`内网穿透`技术获取临时域名

##### 获取微信平台证书和商户私钥文件

##### 获取临时域名

按照老师提供的教程操作即可

![image-20240101010738668](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101010738668.png)

![image-20240101010843965](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101010843965.png)

![image-20240101011332883](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101011332883.png)

![image-20240101011653254](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101011653254.png)

#### 代码导入

##### 导入配置

```java
//application.yml
  wechat:
    appid: ${sky.wechat.appid}
    secret: ${sky.wechat.secret}
    mchid: ${sky.wechat.mchid}
    mch-serial-no: ${sky.wechat.mch-serial-no}
    private-key-file-path: ${sky.wechat.private-key-file-path}
    api-v3-key: ${sky.wechat.api-v3-key}
    we-chat-pay-cert-file-path: ${sky.wechat.we-chat-pay-cert-file-path}
    notify-url: ${sky.wechat.notify-url}
    refund-notify-url: ${sky.wechat.refund-notify-url}
```

> :bell:由于咱自学者没有提供的现成的商户号,因此application-dev个人配置部分暂时用假数据占位,后续会给出跳过微信支付的方法
>
> ```java
> //application-dev.yml
> sky:
>   wechat:
>     appid: ${WECHAT_APP_ID}
>     secret: ${WECHAT_APP_SECRET}
>     mchid: your_dev_mchid
>     mch-serial-no: your_dev_mch_serial_no
>     private-key-file-path: /path/to/your/dev/private-key-file.pem
>     api-v3-key: your_dev_api_v3_key
>     we-chat-pay-cert-file-path: /path/to/your/dev/we-chat-pay-cert-file.pem
>     notify-url: https://your-dev-notify-url.com
>     refund-notify-url: https://your-dev-refund-notify-url.com
> ```
>
> 

##### 导入业务代码

> :bell:只需要导入每个文件中没有实现的部分,userMapper需要单独实现一下getById方法,PayNptifyController需要放在controller.notify包下面,因为这是微信回调请求后端,而不是由用户或者管理端发出

##### 代码改造

> :bell: 由于自学者一般没有商户号,不能使用微信支付功能,因此可以通过改造让小程序跳过支付功能,直接返回支付成功

###### 后端部分

```java
//OrderServiceImpl
    /**
     * 订单支付
     *
     * @param ordersPaymentDTO
     * @return
     */
    public OrderPaymentVO payment(OrdersPaymentDTO ordersPaymentDTO) throws Exception {
        // 当前登录用户id
        Long userId = BaseContext.getCurrentId();
        User user = userMapper.getById(userId);

//        //调用微信支付接口，生成预支付交易单
//        JSONObject jsonObject = weChatPayUtil.pay(
//            ordersPaymentDTO.getOrderNumber(), //商户订单号
//            new BigDecimal(0.01), //支付金额，单位 元
//            "苍穹外卖订单", //商品描述
//            user.getOpenid() //微信用户的openid
//        );
        // TODO: 2024/1/1 暂时跳过微信支付接口，直接生成预支付交易单,并执行支付成功操作
        JSONObject jsonObject = new JSONObject();//由于个人微信支付接口未开通，所以直接跳过微信支付接口
		paySuccess(ordersPaymentDTO.getOrderNumber());
        
        
        
        
        if (jsonObject.getString("code") != null && jsonObject.getString("code").equals("ORDERPAID")) {
            throw new OrderBusinessException("该订单已支付");
        }

        OrderPaymentVO vo = jsonObject.toJavaObject(OrderPaymentVO.class);
        vo.setPackageStr(jsonObject.getString("package"));

        return vo;
    }

    /**
     * 支付成功，修改订单状态
     *
     * @param outTradeNo
     */
    public void paySuccess(String outTradeNo) {

        // 根据订单号查询订单
        Orders ordersDB = orderMapper.getByNumber(outTradeNo);

        // 根据订单id更新订单的状态、支付方式、支付状态、结账时间
        Orders orders = Orders.builder()
            .id(ordersDB.getId())
            .status(Orders.TO_BE_CONFIRMED)
            .payStatus(Orders.PAID)
            .checkoutTime(LocalDateTime.now())
            .build();

        orderMapper.update(orders);

        // TODO: 2024/1/1 暂时跳过微信支付接口，直接修改订单状态的代码
//        //通过webSocket向客户端推送消息
//        Map map = new HashMap(){{
//            put("type", "order");
//            put("orderId", ordersDB.getId());
//            put("content", "您有新的订单,请计时处理,"+"订单号: "+outTradeNo);
//            }};
//        String json = JSON.toJSONString(map);
//        webSocketServer.sendToAllClient(json);


}

```

> :bell:这里后面注释掉的部分是之后开发新的订单提醒功能的时候需要改造的代码,由于需要导入后面才会用到的webSocket模块代码,因此这里暂时注释掉,后续学习到相应位置会及时进行改正的,总之这里先用todo注释标记一下吧

###### 前端部分

> :information_source: 在小程序中的`pages\pay\index.js`文件中,查找`wx.requestPayment`方法,将其整个注释掉,这样就跳过了调用微信后台进行微信支付的操作了

```javascript
        (0, _api.paymentOrder)(params).then(function (res) {
          if (res.code === 1) {
            //todo : 跳过微信小程序支付功能
            // wx.requestPayment({
            //   nonceStr: res.data.nonceStr,
            //   package: res.data.packageStr,
            //   paySign: res.data.paySign,
            //   timeStamp: res.data.timeStamp,
            //   signType: res.data.signType,
            //   success:function(res){
            //     wx.showModal({
            //       title: '提示',
            //       content: '支付成功',
            //       success:function(){
            //         uni.redirectTo({url: '/pages/success/index?orderId=' + _this.orderId });
            //       }
            //     })
            //     console.log('支付成功!')
            //   }
            // })

 //todo : 取消了重定向代码的注释来跳过微信支付
            uni.redirectTo({url: '/pages/success/index?orderId=' + _this.orderId });

          } else {
            wx.showModal({
              title: '提示',
              content: res.msg
            })
          }
        });
      }
```



#### 功能测试

成功提示下单成功

![image-20240101024041805](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101024041805.png)

> 提交一下代码~奖励奖励辛劳了一天的自己吧`^o^`

## Day09 2024.01.01 历史订单与商家订单管理(自行完成)

> 🎉<font color='orange'>Happy New Year!</font>
>
> `新的一年,禄禄鱼祝大家永葆青春活力,持续进步,"你所追寻的必将寻你而来!"`

### 用户端历史订单模块

#### 查询历史订单

##### 需求分析和接口设计

###### 产品原型

![image-20240101171224222](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101171224222.png)

###### 业务规则

- 分页查询,分别可以查询全部订单,待退款,退款
- 用pageQueryDTO接受传参
- 给前端返回orderVO : 包含订单菜品信息和订单详情(orderVO继承了orders,有额外的订单详情和菜品信息)
- 订单顺序按照下单时间倒序排列

##### 代码开发

```java
    /**
     * 分页查询历史订单
     * @param ordersPageQueryDTO
     *
     * @return
     */
    //包含page,pageSize和status,其中status为订单状态,1待付款 2待接单 3已接单 4派送中 5已完成 6已取消
    @GetMapping("/historyOrders")
    @ApiOperation("分页查询历史订单")
    public Result<PageResult> historyOrders(OrdersPageQueryDTO ordersPageQueryDTO){
        log.info("分页查询订单：{}", ordersPageQueryDTO);
        PageResult pageResult = orderService.pageQuery(ordersPageQueryDTO);
        return Result.success(pageResult);
    }
```

> :exclamation: 这里我直接使用ordersPagequeryDTO来接受参数,而不是老师后续在service层再进行封装,我个人认为这种优化是合理且不会影响后续代码的

```java
    /**
     * 分页查询历史订单
     *
     * @param ordersPageQueryDTO
     * @return
     */
    @Override
    public PageResult pageQuery(OrdersPageQueryDTO ordersPageQueryDTO) {
        //设置分页
        PageHelper.startPage(ordersPageQueryDTO.getPage(), ordersPageQueryDTO.getPageSize());
        ordersPageQueryDTO.setUserId(BaseContext.getCurrentId());
        //分页条件查询
        Page<Orders> page = orderMapper.pageQuery(ordersPageQueryDTO);
        //封装返回结果
        List<OrderVO> orderVOList = new ArrayList<>();
        if(page != null && page.size() > 0){
            for (Orders orders : page) {
                Long orderId = orders.getId();
                //查询订单详情
                List<OrderDetail> orderDetailList = orderDetailMapper.getByOrderId(orderId);
                //封装订单详情
                OrderVO orderVO = new OrderVO();
                BeanUtils.copyProperties(orders, orderVO);
                orderVO.setOrderDetailList(orderDetailList);
                orderVOList.add(orderVO);
            }
        }
        return new PageResult(page.getTotal(), orderVOList);
    }
```



> :exclamation: 这里我本来想直接通过pageQuery一次性用动态sql和多表查询返回VO,避免老师提供代码的循环语句sql,但是我发现老师的方法在后续代码中有多次复用,为了避免以后因为自己的耍小聪明导致后续重构的痛苦,这里统一采用老师提供的答案参考的想法实现

```java
//OrderMapper

    /**
     * 分页条件查询历史订单
     * @param ordersPageQueryDTO
     *
     * @return
     * 按照下单时间倒序排列
     */
    Page<Orders> pageQuery(OrdersPageQueryDTO ordersPageQueryDTO);

//动态xml
<select id="pageQuery" resultType="com.weekie.entity.Orders">
    select * from orders
    <where>
        <if test="number != null and number!='' ">
            and number like concat('%',#{number},'%')
        </if>
        <if test="phone != null and phone!='' ">
            and phone like concat('%',#{phone},'%')
        </if>
        <if test="status != null">
            and status = #{status}
        </if>
        <if test="beginTime != null">
            and order_time &gt;= #{beginTime}
        </if>
        <if test="endTime != null">
            and order_time &lt;= #{endTime}
        </if>
        <if test="userId != null">
            and user_id = #{userId}
        </if>
    </where>
    order by order_time desc
  </select>
```

##### 功能测试

![image-20240101175428340](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101175428340.png)



#### 查询订单详情

##### 需求分析和设计

###### 业务规则

- 根据id给前端返回OrderVO对象

##### 代码开发

```java
//Controller

    /**
     * 查询订单详情页
     *
     * @param id
     * @return
     */
    @Override
    public OrderVO details(Long id) {
        //根据id查询订单
        Orders orders = orderMapper.getById(id);
        //根据订单id查询订单详情
        List<OrderDetail> orderDetailList = orderDetailMapper.getByOrderId(id);
        //封装返回结果
        OrderVO orderVO = new OrderVO();
        BeanUtils.copyProperties(orders, orderVO);
        orderVO.setOrderDetailList(orderDetailList);
        return orderVO;
    }
```

> :information_source: 关于controller方法的命名,我目前坚持的原则是,命名和请求路径保持一致,至于service层相应的命名,要求能表达业务的完整,不过并没有什么确切标准,总的来说还是比较纠结的,这里就和老师给的答案保持一致了

```java
//ServiceImpl
    /**
     * 查询订单详情页
     *
     * @param id
     * @return
     */
    @Override
    public OrderVO details(Long id) {
        //根据id查询订单
        Orders orders = orderMapper.getById(id);
        //根据订单id查询订单详情
        List<OrderDetail> orderDetailList = orderDetailMapper.getByOrderId(id);
        //封装返回结果
        OrderVO orderVO = new OrderVO();
        BeanUtils.copyProperties(orders, orderVO);
        orderVO.setOrderDetailList(orderDetailList);
        return orderVO;
    }
```

```java
//Mapper
    /**
     * 根据订单id查询订单明细
     * @param orderId
     * @return
     */
    @Select("select * from order_detail where order_id = #{orderId}")
    List<OrderDetail> getByOrderId(Long orderId);
```

##### 功能测试

顺利

![image-20240101183211730](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101183211730.png)

#### 取消订单

##### 需求设计和分析

###### 业务规则

- 待支付和待接单状态下,用户可以直接取消订单

- 商家已经接单的状态下,用户取消订单需电话沟通商家

- 派送中状态下,用户取消订单需要电话沟通商家

- 如果在待接单状态下取消订单,需要给用户退款

- 取消订单后将订单状态修改为"已取消"

    > 笔者本来以为只要简简单单改一下状态就行,没想到有这么多讲究,于是这部分打算直接参考老师的来写了,关于微信付款部分也会进行一定修改

##### 代码开发

```java
//Controller
	    /**
     * 用户取消订单
     * @param id
     * @return
     */
    @PutMapping("/cancel/{id}")
    @ApiOperation("用户取消订单")
    public Result cancel(@PathVariable Long id){
        log.info("用户取消订单：{}", id);
        orderService.userCancelById(id);
        return Result.success();
    }
```

> :exclamation: 这里后续商家管理端也会操作取消订单,因此service层方法要做出区分

```java
    /**
     * 用户取消订单
     *
     * @param id
     */
    @Override
    public void userCancelById(Long id) {
        //根据id查询订单
        Orders orders = orderMapper.getById(id);
        //判断订单是否存在
        if (orders == null) {
            throw new OrderBusinessException(MessageConstant.ORDER_NOT_FOUND);
        }
        //如果订单状态到达商家接单以后的阶段，不能直接取消订单
        if (orders.getStatus() >= Orders.CONFIRMED) {
            throw new OrderBusinessException(MessageConstant.ORDER_STATUS_ERROR);
        }
        // TODO: 2024/1/1 暂时跳过微信退款接口，直接修改订单状态的代码
//        //订单处于待接单状态下需要进行退款
//        if (orders.getStatus().equals(Orders.TO_BE_CONFIRMED)) {
//            //调用微信退款接口
//            try {
//                weChatPayUtil.refund(
//                    orders.getNumber(),//商户订单号
//                    orders.getNumber(),//商户退款单号
//                    orders.getAmount(),//订单金额
//                    orders.getAmount()//退款金额
//                );
//            } catch (Exception e) {
//                throw new OrderBusinessException(MessageConstant.ORDER_REFUND_ERROR);
//            }
//            //修改订单支付状态为退款
//            orders.setPayStatus(Orders.REFUND);
//        }
        //修改订单状态为已取消,并设置取消原因和取消时间
        orders.setStatus(Orders.CANCELLED);
        orders.setCancelReason(MessageConstant.ORDER_CANCELLED_BY_USER);
        orders.setCancelTime(LocalDateTime.now());
        //更新订单
        orderMapper.update(orders);
    }
}
```

> :bell:这里直接将判断微信退款的逻辑注释掉,直接修改订单状态为取消

##### 功能测试

![image-20240101192353424](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101192353424.png)

#### 再来一单

##### 需求分析和设计

###### 业务规则

将用户原来购物车的数据再次放进购物车里面就行

##### 代码开发

```java
//Controller
    /**
     * 再来一单
     * @param id
     * @return
     */
    @PostMapping("/repetition/{id}")
    @ApiOperation("再来一单")
    public Result repitition(@PathVariable Long id){
        log.info("再来一单：{}", id);
        orderService.repitition(id);
        return Result.success();
    }
```



```java
//ServiceImpl

/**
     * 再来一单
     *
     * @param id
     */
    @Override
    public void repetition(Long id) {
        //根据id查询订单详情
        List<OrderDetail> orderDetailList = orderDetailMapper.getByOrderId(id);
        //查询用户id
        Long userId = BaseContext.getCurrentId();
        //根据订单详情生成购物车数据
        List<ShoppingCart> shoppingCartList = orderDetailList.stream().map(orderDetail -> {
            ShoppingCart shoppingCart = new ShoppingCart();
            //将除了id,createTime以外的属性拷贝到shoppingCart对象中
            BeanUtils.copyProperties(orderDetail, shoppingCart, "id", "createTime");
            shoppingCart.setUserId(userId);
            shoppingCart.setCreateTime(LocalDateTime.now());
            return shoppingCart;
        }).collect(Collectors.toList());
        //批量插入购物车数据
        shoppingCartMapper.insertBatch(shoppingCartList);
    }

```

> 发现老师那边的代码突然写的优雅起来了...,于是就照搬了一下

```java
//ShoppingCartMapper
    /**
     * 批量插入购物车数据
     * @param shoppingCartList
     */
    void insertBatch(List<ShoppingCart> shoppingCartList);



//动态xml
  <insert id="insertBatch">
    insert into shopping_cart(name, image, user_id, dish_id, setmeal_id, dish_flavor, number, amount, create_time)
    values
    <foreach collection="shoppingCartList" item="item" index="index" separator=",">
      (#{item.name}, #{item.image}, #{item.userId}, #{item.dishId}, #{item.setmealId}, #{item.dishFlavor}, #{item.number}, #{item.amount}, #{item.createTime})
    </foreach>
  </insert>

```

##### 功能测试

顺利

![image-20240101202013881](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101202013881.png)

> 提交一下代码~

### 商家端订单管理

#### 订单搜索

##### 需求分析和设计

###### 产品原型

![image-20240101222536923](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101222536923.png)

![image-20240101225749468](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101225749468.png)

###### 业务规则

- 输入订单号/手机号模糊搜索,可以根据不同订单状态分别展示
- 以OrderDTO形势接受参数
- 分页查询展示
- 以OrderVO形式返回给前端,其中otherDishes字段需要填充
- otherDishes字符串的格式为 : 例如 `宫保鸡丁*3;红烧带鱼*2;`菜品之间用`;`隔开

##### 代码开发



```java
//AdminOrderController
@RestController("adminOrderController")
@RequestMapping("/admin/order")
@Api(tags = "管理员端订单相关接口")
@Slf4j
public class OrderController {
    @Autowired
    private OrderService orderService;

    /**
     * 订单搜索分页查询
     * @param ordersPageQueryDTO
     * @return
     */
    @GetMapping("/conditionSearch")
    @ApiOperation("订单搜索分页查询")
    public Result<PageResult> conditionSearch(OrdersPageQueryDTO ordersPageQueryDTO) {
        log.info("订单条件查询，参数为：{}", ordersPageQueryDTO);
        PageResult pageResult = orderService.pageQuery(ordersPageQueryDTO, RoleConstant.USER);
        return Result.success(pageResult);
    }
}

```

> :bell:这里我和老师采取了不同的思路,我为pageQuery方法设置了第二个参数用来指定是用户端还是管理端的请求,这样两者就调用同一个分页查询方法,根据角色不同,会封装不同数据的VO对象

```java
//RoleConstant
public class RoleConstant {
    public static final Integer ADMIN = 0;
    public static final Integer USER = 1;
}
```



```java
//ServiceImpl
    /**
     * 分页查询历史订单
     *
     * @param ordersPageQueryDTO
     * @param roleType
     * @return
     */
    @Override
    public PageResult pageQuery(OrdersPageQueryDTO ordersPageQueryDTO, Integer roleType) {
        //设置分页
        PageHelper.startPage(ordersPageQueryDTO.getPage(), ordersPageQueryDTO.getPageSize());
               if(roleType.equals(RoleConstant.USER)){
            //如果是用户查询订单，需要根据用户id查询
            ordersPageQueryDTO.setUserId(BaseContext.getCurrentId());
        }
        //分页条件查询
        Page<Orders> page = orderMapper.pageQuery(ordersPageQueryDTO);
        //封装返回结果
        List<OrderVO> orderVOList = new ArrayList<>();
        Long total = 0L;
        if(page != null && page.size() > 0){
            //如果是管理员查询订单，需要补充otherDishes字段信息,否则补充orderDetailList字段信息
            if (roleType.equals(RoleConstant.ADMIN)) {
                addOtherDishes(page, orderVOList);
            } else {
                addOrderDetails(page, orderVOList);
            }
            total = page.getTotal();
        }
        return new PageResult(total, orderVOList);
    }

    /**
     * 补充订单详情字段信息
     * @param page
     * @param orderVOList
     */
    private void addOrderDetails(Page<Orders> page, List<OrderVO> orderVOList) {
        for (Orders orders : page) {
            Long orderId = orders.getId();
            //查询订单详情
            List<OrderDetail> orderDetailList = orderDetailMapper.getByOrderId(orderId);
            //封装订单详情
            OrderVO orderVO = new OrderVO();
            BeanUtils.copyProperties(orders, orderVO);
            orderVO.setOrderDetailList(orderDetailList);
            orderVOList.add(orderVO);
        }
    }

    /**
     * 补充订单otherDishes字段信息
     * @param page
     * @param orderVOList
     */
    private void addOtherDishes(Page<Orders> page, List<OrderVO> orderVOList) {
        for (Orders orders : page) {
            //封装订单基础信息
            OrderVO orderVO = new OrderVO();
            BeanUtils.copyProperties(orders, orderVO);
            //获取订单详情信息
            List<OrderDetail> orderDetailList = orderDetailMapper.getByOrderId(orders.getId());
            //根据订单详情生成otherDishes字符串,并封装到orderVO中
            String otherDishes = getOtherDishes(orderDetailList);
            orderVO.setOrderDishes(otherDishes);
            orderVOList.add(orderVO);
        }
    }

    /**
     * 根据订单详情生成otherDishes字符串
     * @param orderDetailList
     * @return
     */
    private String getOtherDishes(List<OrderDetail> orderDetailList) {
        //根据订单详情生成otherDishes字符串
        List<String> otherDishesList = orderDetailList.stream().map(orderDetail -> orderDetail.getName() + "*" + orderDetail.getNumber()).collect(Collectors.toList());
        return String.join(";", otherDishesList);
    }
```

> :bell:这里又封装了多个私有方法用来简化代码,记得在用户端修改分页查询传入参数

##### 功能测试

![image-20240101234031560](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101234031560.png)

> 之前的几个订单因为代码忘了设计电话号码和地址,导致没有传入

![image-20240101234200397](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240101234200397.png)

> 查询的时候报的404是统计数据的接口,不用担心

#### 各个状态的订单数量统计

##### 需求分析和设计

根据订单状态查询各自数量并封装到VO对象返回即可

##### 代码开发

```java
//Controller
    /**
     * 订单统计
     * @return
     */
    @GetMapping("/statistics")
    @ApiOperation("订单统计")
    public Result<OrderStatisticsVO> statistics(){
        OrderStatisticsVO orderStatisticsVO = orderService.statistics();
        return Result.success(orderStatisticsVO);
    }
```

```java
//ServiceImpl
/**
     * 订单统计
     *
     * @return
     */
    @Override
    public OrderStatisticsVO statistics() {
        //分别查询待接单,待派送,派送中的订单数量
        Integer toBeConfirmed = orderMapper.countByStatus(Orders.TO_BE_CONFIRMED);
        Integer confirmed = orderMapper.countByStatus(Orders.CONFIRMED);
        Integer deliveryInProgress = orderMapper.countByStatus(Orders.DELIVERY_IN_PROGRESS);
        //封装返回结果
        return OrderStatisticsVO.builder()
            .toBeConfirmed(toBeConfirmed)
            .confirmed(confirmed)
            .deliveryInProgress(deliveryInProgress).build();
    }

```

> :bell:记得在VO类添加@Builder注解,只因build方法写起来简介,自己比较喜欢

```java
//Mapper
    /**
     * 根据订单状态统计订单数量
     * @param status
     * @return
     */
    @Select("select count(id) from orders where status = #{status}")
    Integer countByStatus(Integer status);
```

##### 功能测试

![image-20240102000840495](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240102000840495.png)

成功显示

#### 查询订单详情

##### 需求分析和设计

###### 产品原型

![image-20240102001003793](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240102001003793.png)

###### 业务规则

- 接收id,查询返回VO
- VO需要填充OrderDetailList字段

##### 代码开发

```java
    /**
     * 订单详情
     * @param id
     * @return
     */
    @GetMapping("/details/{id}")
    @ApiOperation("订单详情")
    public Result<OrderVO> details(@PathVariable Long id){
        OrderVO orderVO = orderService.details(id);
        return Result.success(orderVO);
    }
```

> 之前已经实现过了,只写一个controller就够了

##### 功能测试

顺利

![image-20240102001615898](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240102001615898.png)

#### 接单

##### 需求分析和设计

###### 业务规则

商家接单并没有什么限制,只需要把状态改成已接单就行了

##### 代码开发

```java
//Controller
    /**
     * 商家接单
     * @param ordersConfirmDTO
     * @return
     */
    @PutMapping("/confirm")
    public Result confirm(@RequestBody OrdersConfirmDTO ordersConfirmDTO){
        orderService.adminConfirm(ordersConfirmDTO);
        return Result.success();
    }
```

> 有点纳闷为啥不直接传一个id值,非得要设计一个DTO

```java
//ServiceImpl
    /**
     * 商家确认订单
     *
     * @param ordersConfirmDTO
     */
    @Override
    public void adminConfirm(OrdersConfirmDTO ordersConfirmDTO) {
        Orders orders = Orders.builder()
            .id(ordersConfirmDTO.getId())
            .status(Orders.CONFIRMED)
            .build();
        orderMapper.update(orders);
    }
```

##### 功能测试

修改成功

![image-20240102002357135](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240102002357135.png)

#### 拒单

##### 需求分析与设计

###### 业务规则

- 只有订单处于待接单状态才能执行拒单操作
- 商家拒单需要指定原因
- 如果用户完成了支付,商家拒单的时候需要进行退款操作
- 最后将订单状态改为`已取消`即可

##### 代码开发

```java
//Controller
    /**
     * 商家拒单
     * @param ordersRejectionDTO
     * @return
     */
    @PutMapping("/rejection")
    public Result rejection(@RequestBody OrdersRejectionDTO ordersRejectionDTO){
        orderService.adminRejection(ordersRejectionDTO);
        return Result.success();
    }
```

```java
//ServiceImpl
    /**
     * 商家拒单
     *
     * @param ordersRejectionDTO
     */
    @Override
    public void adminRejection(OrdersRejectionDTO ordersRejectionDTO) {
        //判断有没有填写拒单原因
        if(ordersRejectionDTO.getRejectionReason().isEmpty()){
            throw new OrderBusinessException(MessageConstant.ORDER_REJECTION_REASON_IS_NULL);
        }
        Orders ordersDB = orderMapper.getById(ordersRejectionDTO.getId());
        //只有订单为待接单才能执行拒单操作
        if(!ordersDB.getStatus().equals(Orders.TO_BE_CONFIRMED)){
            throw new OrderBusinessException(MessageConstant.ORDER_STATUS_ERROR);
        }
        // TODO: 2024/1/2 暂时跳过微信退款接口，直接修改订单状态的代码
//        //如果订单支付状态为已支付，需要执行退款操作
//        if(ordersDB.getPayStatus().equals(Orders.PAID)){
//            try {
//                String refund = weChatPayUtil.refund(
//                    ordersDB.getNumber(),//商户订单号
//                    ordersDB.getNumber(),//商户退款单号
//                    ordersDB.getAmount(),//订单金额
//                    ordersDB.getAmount()//退款金额
//                );
//                log.info("商家处理微信退款：{}", refund);
//            } catch (Exception e) {
//                throw new OrderBusinessException(MessageConstant.ORDER_REFUND_ERROR);
//            }
//        }
        //修改订单状态为已取消,并设置取消原因和取消时间
        Orders orders = Orders.builder()
            .id(ordersRejectionDTO.getId())
            .status(Orders.CANCELLED)
            .cancelReason(ordersRejectionDTO.getRejectionReason())
            .cancelTime(LocalDateTime.now())
            .build();
        orderMapper.update(orders);
    }
```

> :bell:另外造一个orders对象而不是用原来从数据库获取的对象来更新数据库是为了避免更改原来不用改变的字段,提升性能
> 这里另外判断了如果没有提交拒单原因,后端不会允许拒单
>
> 同样地,这里跳过了退款逻辑,直接取消订单

##### 功能测试

取消成功 

![image-20240102005503267](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240102005503267.png)

#### 取消订单

##### 需求分析和设计

其实和拒单一个逻辑

##### 代码开发

```java
//Controller
    /**
     * 商家取消订单
     * @param ordersCancelDTO
     * @return
     */
    @PutMapping("/cancel")
    @ApiOperation("商家取消订单")
    public Result cancel(@RequestBody OrdersCancelDTO ordersCancelDTO){
        orderService.adminCancel(ordersCancelDTO);
        return Result.success();
    }
```



`此处代码进行了重构,抽取了微信退款代码`

```java
//ServiceImpl 
/**
     * 用户取消订单
     *
     * @param id
     */
    @Override
    public void userCancelById(Long id) {
        //根据id查询订单
        Orders ordersDB = orderMapper.getById(id);
        //判断订单是否存在
        if (ordersDB == null) {
            throw new OrderBusinessException(MessageConstant.ORDER_NOT_FOUND);
        }
        //如果订单状态到达商家接单以后的阶段，不能直接取消订单
        if (ordersDB.getStatus() >= Orders.CONFIRMED) {
            throw new OrderBusinessException(MessageConstant.ORDER_STATUS_ERROR);
        }
        // TODO: 2024/1/1 暂时跳过微信退款接口，直接修改订单状态的代码
//        weChatRefundVerify(ordersDB);
        //修改订单状态为已取消,并设置取消原因和取消时间
        Orders orders = Orders.builder()
            .id(id)
            .status(Orders.CANCELLED)
            .cancelReason(MessageConstant.ORDER_CANCELLED_BY_USER)
            .cancelTime(LocalDateTime.now())
            .payStatus(ordersDB.getPayStatus())
            .build();
        //更新订单
        orderMapper.update(orders);
    }   
/**
     * 商家拒单
     *
     * @param ordersRejectionDTO
     */
    @Override
    public void adminRejection(OrdersRejectionDTO ordersRejectionDTO) {
        //判断有没有填写拒单原因
        if(ordersRejectionDTO.getRejectionReason().isEmpty()){
            throw new OrderBusinessException(MessageConstant.ORDER_REJECTION_REASON_IS_NULL);
        }
        Orders ordersDB = orderMapper.getById(ordersRejectionDTO.getId());
        //只有订单为待接单才能执行拒单操作
        if(!ordersDB.getStatus().equals(Orders.TO_BE_CONFIRMED)){
            throw new OrderBusinessException(MessageConstant.ORDER_STATUS_ERROR);
        }
        // TODO: 2024/1/2 暂时跳过微信退款接口，直接修改订单状态的代码
//        weChatRefundVerify(ordersDB);
        //修改订单状态为已取消,并设置取消原因和取消时间
        Orders orders = Orders.builder()
            .id(ordersRejectionDTO.getId())
            .status(Orders.CANCELLED)
            .rejectionReason(ordersRejectionDTO.getRejectionReason())
            .cancelTime(LocalDateTime.now())
            .payStatus(ordersDB.getPayStatus())
            .build();
        orderMapper.update(orders);
    }


    /**
     * 商家取消订单
     *
     * @param ordersCancelDTO
     */
    @Override
    public void adminCancel(OrdersCancelDTO ordersCancelDTO) {
        //根据id查询订单
        Orders ordersDB = orderMapper.getById(ordersCancelDTO.getId());
        // TODO: 2024/1/2 暂时跳过微信退款接口，直接修改订单状态的代码
//        weChatRefundVerify(ordersDB);
        //修改订单状态为已取消,并设置取消原因和取消时间
        Orders orders = Orders.builder()
            .id(ordersCancelDTO.getId())
            .status(Orders.CANCELLED)
            .cancelReason(ordersCancelDTO.getCancelReason())
            .cancelTime(LocalDateTime.now())
            .payStatus(ordersDB.getPayStatus())
            .build();
        orderMapper.update(orders);
    }
    /**
     * 校验是否应当退款并处理退款
     * @param ordersDB
     */
    private void weChatRefundVerify(Orders ordersDB) {
        //如果订单支付状态为已支付，需要执行退款操作
        if(ordersDB.getPayStatus().equals(Orders.PAID)){
            try {
                String refund = weChatPayUtil.refund(
                    ordersDB.getNumber(),//商户订单号
                    ordersDB.getNumber(),//商户退款单号
                    ordersDB.getAmount(),//订单金额
                    ordersDB.getAmount()//退款金额
                );
                log.info("商家处理微信退款：{}", refund);
            } catch (Exception e) {
                throw new OrderBusinessException(MessageConstant.ORDER_REFUND_ERROR);
            }
            //修改订单支付状态为退款
            ordersDB.setPayStatus(Orders.REFUND);
        }
    }
```

> :exclamation: 由于判断是否应当退款并处理退款的逻辑在此处serviceImpl有三处重复,因此有必要将其封装为一个方法,其他方法也进行了一些bug修改,请务必将上述方法都检查一遍

##### 功能测试

顺利

![image-20240102013022506](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240102013022506.png)

#### 派送订单

##### 需求分析和设计

把状态修改成派送中即可,只有待派送的订单才能执行这个操作

##### 代码开发

```java
//Controller
    /**
     * 派送订单
     *
     * @return
     */
    @PutMapping("/delivery/{id}")
    @ApiOperation("派送订单")
    public Result delivery(@PathVariable("id") Long id) {
        orderService.delivery(id);
        return Result.success();
    }
```



```java
//ServiceImpl    
/**
     * 订单派送
     *
     * @param id
     */
    @Override
    public void delivery(Long id) {
        //根据id查询订单
        Orders ordersDB = orderMapper.getById(id);
        //只有订单为待派送才能执行派送操作
        if(ordersDB == null || !ordersDB.getStatus().equals(Orders.CONFIRMED)){
            throw new OrderBusinessException(MessageConstant.ORDER_STATUS_ERROR);
        }
        Orders orders = Orders.builder()
            .id(id)
            .status(Orders.DELIVERY_IN_PROGRESS)
            .build();
        orderMapper.update(orders);
    }
```

##### 功能测试

![image-20240102015042766](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240102015042766.png)

#### 完成订单

##### 需求设计和分析

同上逻辑

##### 代码开发

```java
//Controller 
/**
     * 完成订单
     *
     * @return
     */
    @PutMapping("/complete/{id}")
    @ApiOperation("完成订单")
    public Result complete(@PathVariable("id") Long id) {
        orderService.complete(id);
        return Result.success();
    }
```

```java
//ServiceImpl
/**
     * 完成订单
     *
     * @param id
     */
    public void complete(Long id) {
        // 根据id查询订单
        Orders ordersDB = orderMapper.getById(id);

        // 校验订单是否存在，并且状态为4
        if (ordersDB == null || !ordersDB.getStatus().equals(Orders.DELIVERY_IN_PROGRESS)) {
            throw new OrderBusinessException(MessageConstant.ORDER_STATUS_ERROR);
        }
        Orders orders = Orders.builder()
            .id(id)
            .status(Orders.COMPLETED)
            .build();
        orderMapper.update(orders);
    }
```

##### 功能测试

![image-20240102015100087](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240102015100087.png)

> 提交一下代码~

### 已有功能优化-检验收货地址是否超出配送范围

#### 环境准备

登入百度地图开放平台

> 进入控制台需要进行个人认证,笔者这里选择的是学生认证,走完流程大概几个小时后审核会通过
>
> 按照资料创建应用并获取AK
>
> 可以通过ipshu这个网站来查看自己的公网ip,将其添加到ip校验白名单中(期间不要用梯子)

#### 相关配置注入

这里依然是使用环境变量来存储密钥

```yaml
//application.yml 
sky:
	shop:
    	address: 北京市海淀区上地十街10号
  	baidu:
    	ak: ${sky.baidu.ak}
    	
//application-dev.yml
sky:
	baidu:
		ak: ${BAIDU_ACCESS_KEY}
```

#### 代码编写

在OrderServiceImpl编写用于校验是否超出范围的私有方法

submitOrder方法会调用该方法

```java
//调用了判断是否超出配送范围方法的重构submitOrder 
/**
     * 用户下单
     *
     * @param ordersSubmitDTO
     * @return
     */
    @Transactional
    @Override
    public OrderSubmitVO submitOrder(OrdersSubmitDTO ordersSubmitDTO) {
        //处理各种业务异常(地址簿为空，购物车为空等)
        AddressBook addressBook = addressBookMapper.getById(ordersSubmitDTO.getAddressBookId());
        if (addressBook == null) {
            throw new AddressBookBusinessException(MessageConstant.ADDRESS_BOOK_IS_NULL);
        }
        //判断是否超出配送范围
        String address = addressBook.getCityName()+ addressBook.getDistrictName() + addressBook.getDetail();
        if(isOutOfRange(address))
        {
            throw new OrderBusinessException(MessageConstant.ORDER_DELIVERY_OUT_OF_RANGE);
        }
        //获取当前用户的购物车数据
        ShoppingCart shoppingCart = new ShoppingCart();
        Long userId = BaseContext.getCurrentId();
        shoppingCart.setUserId(userId);
        List<ShoppingCart> shoppingCartList = shoppingCartMapper.list(shoppingCart);
        if (shoppingCartList == null || shoppingCartList.size() == 0) {
            throw new ShoppingCartBusinessException(MessageConstant.SHOPPING_CART_IS_NULL);
        }
        //向订单表插入一条订单数据
        Orders orders = new Orders();
        BeanUtils.copyProperties(ordersSubmitDTO, orders);
        orders.setOrderTime(LocalDateTime.now());
        orders.setPayStatus(Orders.UN_PAID);
        orders.setStatus(Orders.PENDING_PAYMENT);
        // TODO: 2023/12/31 用时间戳生成订单号可靠吗
        orders.setNumber(String.valueOf(System.currentTimeMillis()));
        orders.setConsignee(addressBook.getConsignee());
        orders.setAddress(addressBook.getDetail());
        orders.setPhone(addressBook.getPhone());
        orders.setUserId(userId);
        orderMapper.insert(orders);
        //向订单详情表插入多条订单详情数据
        List<OrderDetail> orderDetailList = new ArrayList<>();
        for (ShoppingCart cart : shoppingCartList) {
            OrderDetail orderDetail = new OrderDetail();
            BeanUtils.copyProperties(cart, orderDetail);
            orderDetail.setOrderId(orders.getId());//设置订单id
            orderDetailList.add(orderDetail);
        }
        //批量插入到订单详情表
        orderDetailMapper.insertBatch(orderDetailList);
        //清空用户购物车
        shoppingCartMapper.deleteByUserId(userId);
        //封装返回结果
        OrderSubmitVO orderSubmitVO = OrderSubmitVO.builder()
            .id(orders.getId())
            .orderNumber(orders.getNumber())
            .orderAmount(orders.getAmount())
            .orderTime(orders.getOrderTime()).build();

        return orderSubmitVO;
    }

 
```

```java
//用于调用百度接口判断是否超出配送范围的方法   
/**
     * 调用百度地图api判断是否超出配送范围
     * @param userAddress
     * @return
     */
    private boolean isOutOfRange(String userAddress) {
        Map map = new HashMap(){{
            put("address", shopAddress);
            put("output", "json");
            put("ak", baiduAk);
            }};
        //获取商店经纬度坐标
        String shopCOordinate = HttpClientUtil.doGet(BaiduConstant.BAIDU_API_GEOCODEING_URL, map);
        JSONObject response = JSONObject.parseObject(shopCOordinate);
        if(!response.getString("status").equals("0")){
            throw new OrderBusinessException(MessageConstant.BAIDU_API_ERROR);
        }
        //解析响应结果
        JSONObject location = response.getJSONObject("result").getJSONObject("location");
        //经纬度坐标
        String lat = location.getString("lat");
        String lng = location.getString("lng");
        String shopLngLat = lng + "," + lat;

        //获取用户经纬度坐标
        map.put("address",userAddress);
        String userCoordinate = HttpClientUtil.doGet(BaiduConstant.BAIDU_API_GEOCODEING_URL, map);
        response = JSONObject.parseObject(userCoordinate);
        if(!response.getString("status").equals("0")){
            throw new OrderBusinessException(MessageConstant.BAIDU_API_ERROR);
        }
        //解析响应结果
        location = response.getJSONObject("result").getJSONObject("location");
        //经纬度坐标
        lat = location.getString("lat");
        lng = location.getString("lng");
        String userLngLat = lng + "," + lat;
        
        map.put("origin", shopLngLat);
        map.put("destination", userLngLat);
        map.put("steps_info","0");
        //获取路线规划信息
        JSONObject directionLiteJson = JSON.parseObject(HttpClientUtil.doGet(BaiduConstant.BAIDU_API_DIRECTIONLITE_URL, map));
        if(!directionLiteJson.getString("status").equals("0")){
            throw new OrderBusinessException(MessageConstant.BAIDU_API_ERROR);
        }
        //解析响应结果
        JSONObject result = directionLiteJson.getJSONObject("result");
        //获取路线距离
        JSONArray jsonArray = result.getJSONArray("routes");
        Integer distance = jsonArray.getJSONObject(0).getInteger("distance");
        //判断距离是否超出配送范围
        if(distance > ShopConstant.DELIVERY_RANGE_METERS){
            return true;
        }
        return false;
    }
```

> :bell:这里设置了类来存储常量,其实这种就用一次的代码没有必要这么较真,不过个人有点强迫症吧,遇到没有的常量自行创建即可,这里就不展示了

#### 功能测试

调试成功,传入的地址是天津市和平区和平小学 和 北京市海淀区上地十街10号,距离146734m

![image-20240103212933201](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240103212933201.png)

后端返回订单超出范围

![image-20240103213203041](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240103213203041.png)

然后把地址改成华为大厦(百度大楼附近)试试

![image-20240103213626035](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240103213626035.png)

下单成功

![image-20240103213739151](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240103213739151.png)

> 提交一下代码~

## Day10 2024.01.02 订单状态定时处理,来单提醒和客户催单

> :birthday:祝我生日快乐~话说生日也并没有什么特别的事情,还是像往常一样写代码(笑)

### SpringTask

> :bookmark_tabs:`SpringTask`是Spring框架提供的任务调度工具,可以按照约定的时间自动执行某个代码逻辑

#### cron表达式

> :bookmark_tabs:`cron表达式`是一个字符串,用来定义任务触发的时间
>
> 构成规则:分成6(或7)个部分(域),每个部门用空格隔开,分别代表:秒/分钟/小时/日/月/周/年(可选)
>
> 例如:
>
> ![image-20240102163758384](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240102163758384.png)
>
> :bell:因为周往往能够决定日期,因此日和周两者不同同时出现

其实只要会用cron表达式在线生成器就行了

> :star:这里推荐idea插件`Cron Descriptor`和`Mark Cron Tools`用来在idea查看和编写cron表达式(或者直接下载`toolset`插件,里面有各种各样的工具)
>

#### 入门案例

##### 使用步骤

1. 导入maven坐标 spring-context(已存在)

2. 启动类添加@EnableScheduling开启任务调度

3. 自定义定时任务类

    ```java
    //自定义定时任务类
    @Component
    @Slf4j
    public class MyTask {
        //定时任务,每五秒钟触发一次
        @Scheduled(cron = "0/5 * * * * ?")
        public void executeTask(){
            log.info("定时任务开始执行,{}",new Date());
        }
    }
    ```

    

### 订单状态定时处理

#### 需求分析和设计

- 下单后未支付,超过一定时间自动取消订单
- 用户收货后管理端没有点击完成按钮,订单一定时间后自动完成
- 每分钟检查一次是否存在支付超时订单,如果存在超过15分钟后仍未支付的订单,则将状态更改为`已取消`
- 每天凌晨1点检查是否有派送中的订单,自动完成

#### 代码开发

```java
//定时任务类 task/OrderTask.java
@Component
@Slf4j
public class OrderTask {
    /**
     * 订单超时时间限制（分钟）
     */
    public static final int ORDER_TIME_OUT_MINUTES = 15;
    @Autowired
    private OrderMapper orderMapper;
    /**
     * 处理超时订单
     */
    @Scheduled(cron = "0 * * * * ?")//每分钟执行一次
    public void processTimeoutOrder() {
        log.info("处理超时订单,当前时间：{}", LocalDateTime.now());
        //计算超时订单对应的下单时间
        LocalDateTime orderTime = LocalDateTime.now().minusMinutes(ORDER_TIME_OUT_MINUTES);
        //查询超时订单
        List<Orders> ordersList = orderMapper.getByStatusAndOrderTimeLT(Orders.PENDING_PAYMENT, orderTime);
        if(!ordersList.isEmpty()){
            for (Orders orders : ordersList) {
                orders.setStatus(Orders.CANCELLED);
                orders.setCancelReason(MessageConstant.ORDER_TIMEOUT);
                orders.setCancelTime(LocalDateTime.now());
                orderMapper.update(orders);
            }
        }
    }

    /**
     * 处理一直处于派送中的订单
     */
    @Scheduled(cron = "0 0 1 * * ?")//每天凌晨1点执行
    public void processDeliveryOrder(){
        log.info("处理一直处于派送中的订单,当前时间：{}", LocalDateTime.now());
        //计算超时订单对应的下单时间(即前一天的订单)
        LocalDateTime orderTime = LocalDateTime.now().minusHours(1);
        //查询超时订单
        List<Orders> ordersList = orderMapper.getByStatusAndOrderTimeLT(Orders.DELIVERY_IN_PROGRESS, orderTime);
        if(!ordersList.isEmpty()){
            for (Orders orders : ordersList) {
                orders.setStatus(Orders.COMPLETED);
                orderMapper.update(orders);
            }
        }

    }
```

#### 功能测试

![](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240102185849685.png)

> 提交一下代码~

### WebSocket

> :bookmark_tabs:`webSocket`是基于TCP的一种网络协议,实现了浏览器与服务器全双工通信,即浏览器和服务器只需要完成一次握手,两者之间就可以创建持久性的连接,并进行双向数据传输
>
> **简单理解就是服务端也可以主动给客户端发送数据,而不必等待客户端发送请求**
>
> 应用场景:
>
> - 视频弹幕
> - 网页聊天
> - 体育实况更新
> - 股票基金报价实时更新

#### 入门案例(含导入webSocket功能代码)

1. 前端,用于和服务端进行通信

    ```java
    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>WebSocket Demo</title>
    </head>
    <body>
        <input id="text" type="text" />
        <button onclick="send()">发送消息</button>
        <button onclick="closeWebSocket()">关闭连接</button>
        <div id="message">
        </div>
    </body>
    <script type="text/javascript">
        var websocket = null;
        var clientId = Math.random().toString(36).substr(2);
    
        //判断当前浏览器是否支持WebSocket
        if('WebSocket' in window){
            //连接WebSocket节点
            websocket = new WebSocket("ws://localhost:8080/ws/"+clientId);
        }
        else{
            alert('Not support websocket')
        }
    
        //连接发生错误的回调方法
        websocket.onerror = function(){
            setMessageInnerHTML("error");
        };
    
        //连接成功建立的回调方法
        websocket.onopen = function(){
            setMessageInnerHTML("连接成功");
        }
    
        //接收到消息的回调方法
        websocket.onmessage = function(event){
            setMessageInnerHTML(event.data);
        }
    
        //连接关闭的回调方法
        websocket.onclose = function(){
            setMessageInnerHTML("close");
        }
    
        //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = function(){
            websocket.close();
        }
    
        //将消息显示在网页上
        function setMessageInnerHTML(innerHTML){
            document.getElementById('message').innerHTML += innerHTML + '<br/>';
        }
    
        //发送消息
        function send(){
            var message = document.getElementById('text').value;
            websocket.send(message);
        }
    	
    	//关闭连接
        function closeWebSocket() {
            websocket.close();
        }
    </script>
    </html>
    ```

    > webSocket协议和http有所区别,因此请求路径是`ws://...`

    1. 服务端

    > 将webSocketServer.java代码粘贴到 `server/webSocket`包下面

    ```java
    /**
     * WebSocket服务
     */
    @Component
    @ServerEndpoint("/ws/{sid}")
    public class WebSocketServer {
    
        //存放会话对象
        private static Map<String, Session> sessionMap = new HashMap();
    
        /**
         * 连接建立成功调用的方法
         */
        @OnOpen
        public void onOpen(Session session, @PathParam("sid") String sid) {
            System.out.println("客户端：" + sid + "建立连接");
            sessionMap.put(sid, session);
        }
    
        /**
         * 收到客户端消息后调用的方法
         *
         * @param message 客户端发送过来的消息
         */
        @OnMessage
        public void onMessage(String message, @PathParam("sid") String sid) {
            System.out.println("收到来自客户端：" + sid + "的信息:" + message);
        }
    
        /**
         * 连接关闭调用的方法
         *
         * @param sid
         */
        @OnClose
        public void onClose(@PathParam("sid") String sid) {
            System.out.println("连接断开:" + sid);
            sessionMap.remove(sid);
        }
    
        /**
         * 群发
         *
         * @param message
         */
        public void sendToAllClient(String message) {
            Collection<Session> sessions = sessionMap.values();
            for (Session session : sessions) {
                try {
                    //服务器向客户端发送消息
                    session.getBasicRemote().sendText(message);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
    
    }
    
    ```

    > @OnOpen等注解由webSocket包提供,相当于设置回调方法

    2. 导入配置类将webSocket注册进容器中

    ```java
    @Configuration
    public class WebSocketConfiguration {
    
        @Bean
        public ServerEndpointExporter serverEndpointExporter() {
            return new ServerEndpointExporter();
        }
    
    }
    ```

    3. 导入定时任务类

    ```java
    @Component
    public class WebSocketTask {
        @Autowired
        private WebSocketServer webSocketServer;
    
        /**
         * 通过WebSocket每隔5秒向客户端发送消息
         */
        @Scheduled(cron = "0/5 * * * * ?")
        public void sendMessageToClient() {
            webSocketServer.sendToAllClient("这是来自服务端的消息：" + DateTimeFormatter.ofPattern("HH:mm:ss").format(LocalDateTime.now()));
        }
    }
    
    ```

### 来单提醒

#### 需求分析和设计

当用户下单且成功支付后,需要第一时间通知外卖商家

- 语音播报
- 弹出提示框

设计

- 通过webSocket实现双向长连接
- 客户支付成功后,调用webSocket相关api推送消息
- 客户端解析消息,判断是来单提醒还是催单信息
- 约定推送格式为json,字段包括type,orderId,content
    - type 1为来单提醒,2为催单

#### 代码开发

> 在上述导入完webSocket类之后,通过调用sendtoAllclient方法实现消息推送,这部分代码在之前改造代码跳过微信支付的时候已经提前写好了,只需要将注释去掉就行

```java
    @Autowired
    private WebSocketServer webSocketServer;
    /**
     * 支付成功，修改订单状态
     *
     * @param outTradeNo
     */
    public void paySuccess(String outTradeNo) {

        // 根据订单号查询订单
        Orders ordersDB = orderMapper.getByNumber(outTradeNo);

        // 根据订单id更新订单的状态、支付方式、支付状态、结账时间
        Orders orders = Orders.builder()
            .id(ordersDB.getId())
            .status(Orders.TO_BE_CONFIRMED)
            .payStatus(Orders.PAID)
            .checkoutTime(LocalDateTime.now())
            .build();

        orderMapper.update(orders);

        // TODO: 2024/1/1 暂时跳过微信支付接口，直接修改订单状态的代码
        //通过webSocket向客户端推送接单消息
        Map map = new HashMap(){{
            put("type", WebSocketConstant.NEW_ORDER_TYPE);
            put("orderId", ordersDB.getId());
            put("content", "您有新的订单,请及时处理,"+"订单号: "+outTradeNo);
            }};
        String json = JSON.toJSONString(map);
        webSocketServer.sendToAllClient(json);


    }
```

> :exclamation: 之前消息推送的代码有一部分写的有问题,这里建议重新复制粘贴一下(type字段的值不正确)
>
> 另外单独创建了常量类用于存放推送消息类型常量
>
> ```java
> public class WebSocketConstant {
>     //接单提醒
>     public static final Integer NEW_ORDER_TYPE = 1;
>     //催单提醒
>     public static final Integer URGE_ORDER_TYPE = 2;
> 
> }
> ```

#### 功能测试

当打开管理端网页的时候,自动和后端建立一个会话

![image-20240104000628960](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240104000628960.png)

小程序端完成支付订单之后,管理端网页会弹出提示,以及相应的提示音

![image-20240104002015705](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240104002015705.png)

> :bug: 关于一个诡异的bug的发现,小程序端突然在某个时候查询套餐列表的时候,没有查到任何数据,但是后端正常返回成功的空数据,且此时在查询套餐的接口处添加断点,请求的时候不会执行到断点,当在管理端重新启售停售套餐之后,套餐又可以正常展示在小程序端页面了,而且断点也可以捕捉到请求,暂时不清楚具体是什么原因

### 客户催单

#### 需求设计和分析

用户在小程序中点击催单按钮后,第一时间通知商家

- 语音播报
- 弹出提示框
- 推送消息格式设计规则同上

#### 代码开发

```java
//Controller
    /**
     * 用户催单
     * @param id
     * @return
     */
    @GetMapping("/reminder/{id}")
    @ApiOperation("用户催单")
    public Result reminder(@PathVariable Long id){
        orderService.reminder(id);
        return Result.success();
    }
```

```java
//ServiceImpl  
/**
     * 用户催单
     * @param id
     */
    @Override
    public void reminder(Long id) {
        //根据id查询订单
        Orders ordersDB = orderMapper.getById(id);
        //只有订单存在才能执行催单操作
        if(ordersDB == null){
            throw new OrderBusinessException(MessageConstant.ORDER_STATUS_ERROR);
        }
        //通过webSocket向客户端推送催单消息
        Map map = new HashMap(){{
            put("type", WebSocketConstant.REMIND_ORDER_TYPE);
            put("orderId", ordersDB.getId());
            put("content", "用户催单,请及时处理,"+"订单号: "+ordersDB.getNumber());
            }};
        String json = JSON.toJSONString(map);
        webSocketServer.sendToAllClient(json);
    }

```

#### 功能测试

催单时可以看到有催单信息

![image-20240104010839276](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240104010839276.png)

不过问题是,并没有听到语音提示,自己检查了前端文件确实包含这个语音文件

后来自己一直点了五六下,终于有声音了,看来代码没有问题,可能是前端文件加载的问题吧

> :hammer_and_wrench: 个人觉得应该加一个防止用户骚扰的功能

> :coffee: 辛苦了!提交一下代码,回宿舍美美地睡上一觉吧~

## Day11 2024.01.04 数据统计之图形报表

实现效果

![image-20240104012024486](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240104012024486.png)

### Apache ECharts

包括柱形图,饼状图,折线图等,基于javascript的数据可视化工具

 *<font color='green'>后端重点研究图标所需数据格式来返回合适的动态数据</font>*



### 营业额统计

#### 需求分析和设计

![image-20240105185726375](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240105185726375.png)

业务规则

- 只统计已经完成的订单
- 展示数据x轴为日期,纵轴为营业额
- 日期通过时间选择区间动态展示

![image-20240105190236778](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240105190236778.png)

#### 代码开发

```java
//COntroller
/**
 * 数据统计相关接口
 */

@RestController
@RequestMapping("/admin/report")
@Api(tags = "数据统计相关接口")
@Slf4j
public class ReportController {
    @Autowired
    private ReportService reportService;
    /**
     * 营业额报表
     * @return
     */
    @GetMapping("/turnoverStatistics")
    @ApiOperation("营业额统计")
    public Result<TurnoverReportVO> turnoverStatistics(@DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate begin,
        @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate end){
        log.info("营业额报表：{}-{}",begin,end);
        TurnoverReportVO turnoverReportVO = reportService.getTurnoverStatistics(begin,end);
        return Result.success(turnoverReportVO);

    }

}
```

```java
//ServiceImpl
@Service
public class ReportServiceImpl implements ReportService {
    @Autowired
    private OrderMapper orderMapper;
    /**
     * 统计指定时间区间的营业额
     * @param begin
     * @param end
     * @return
     */
    @Override
    public TurnoverReportVO getTurnoverStatistics(LocalDate begin, LocalDate end) {
        //计算从开始到结束日期的dateList
        List<LocalDate> dateList = Stream.iterate(begin, date -> date.plusDays(1))
            .limit(ChronoUnit.DAYS.between(begin, end.plusDays(1)))
            .collect(Collectors.toList());

        List<Double> turnoverList = new ArrayList<>();
        for(LocalDate date : dateList){
            //获取日期开始结束具体时间
            LocalDateTime beginTime = LocalDateTime.of(date, LocalTime.MIN);
            LocalDateTime endTime = LocalDateTime.of(date, LocalTime.MAX);

            //查询指定时间区间的订单营业额
            Map map = new HashMap(){{
                put("beginTime",beginTime);
                put("endTime",endTime);
                put("status", Orders.COMPLETED);
            }};
            Double turnover = orderMapper.sumByMap(map);
            //如果营业额为空，设置为0
            turnover = turnover == null ? 0 : turnover;
            turnoverList.add(turnover);
        }
        //将turnoverList和dateList转成字符串封装进VO
        TurnoverReportVO turnoverReportVO = TurnoverReportVO.builder()
            .dateList(StringUtils.join(dateList, ","))
            .turnoverList(StringUtils.join(turnoverList, ","))
            .build();
        return turnoverReportVO;
    }
}
```

> 这里选择老师的循环sql语句方法,因为自己不太会写group by语句,而且查询量不大,直接用循环语句发送sql语句来查询了

```java
//Mappper

    /**
     * 根据动态条件统计营业额数量
     * @param map
     * @return
     */
    Double sumByMap(Map map);

//动态xml 
  <select id="sumByMap" resultType="java.lang.Double">
    select sum(amount) from orders
    <where>
        <if test="beginTime != null">
            and order_time &gt;= #{beginTime}
        </if>
        <if test="endTime != null">
            and order_time &lt;= #{endTime}
        </if>
        <if test="status != null">
            and status = #{status}
        </if>
    </where>
  </select>
```



#### 功能测试

测试顺利

![image-20240105204659389](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240105204659389.png)

### 用户统计

#### 需求分析和设计

![image-20240105205353517](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240105205353517.png)

业务规则

- x轴日期,y轴用户数
- 根据时间选择区间(默认的总的时间范围),展示每天的用户总量和用户新增

![image-20240105205615437](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240105205615437.png)

#### 代码开发

```java
//Controller
    /**
     * 用户统计
     * @param begin
     * @param end
     * @return
     */
    @GetMapping("/userStatistics")
    @ApiOperation("用户统计")
    public Result<UserReportVO> userStatistics(
        @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate begin,
        @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate end){
        log.info("用户统计：{}-{}",begin,end);
        UserReportVO userReportVO = reportService.getUserStatistics(begin,end);
        return Result.success(userReportVO);

    }
```

```java
//ServiceImpl
/**
     * 统计指定时间区间的用户注册量
     *
     * @param begin
     * @param end
     * @return
     */
    @Override
    public UserReportVO getUserStatistics(LocalDate begin, LocalDate end) {
        //计算从开始到结束日期的dateList
        List<LocalDate> dateList = Stream.iterate(begin, date -> date.plusDays(1))
            .limit(ChronoUnit.DAYS.between(begin, end.plusDays(1)))
            .collect(Collectors.toList());

        List<Integer> totalUserList = new ArrayList<>();
        List<Integer> newUserList = new ArrayList<>();
        for (LocalDate date : dateList) {
            //获取日期开始结束具体时间
            LocalDateTime beginTime = LocalDateTime.of(date, LocalTime.MIN);
            LocalDateTime endTime = LocalDateTime.of(date, LocalTime.MAX);
           //查询指定时间区间的总用户注册量
            Map map = new HashMap() {{
                put("endTime", endTime);
            }};
            Integer totalUserCount = userMapper.countByMap(map);
            //查询指定时间区间的新用户注册量,即注册时间在指定时间区间内的用户数量
            map.put("beginTime", beginTime);
            Integer newUserCount = userMapper.countByMap(map);
            //如果用户数量为空，设置为0
            totalUserCount = totalUserCount == null ? 0 : totalUserCount;
            newUserCount = newUserCount == null ? 0 : newUserCount;
            totalUserList.add(totalUserCount);
            newUserList.add(newUserCount);
        }
        //将totalUserList、newUserList和dateList转成字符串封装进VO
        UserReportVO userReportVO = UserReportVO.builder()
            .dateList(StringUtils.join(dateList, ","))
            .totalUserList(StringUtils.join(totalUserList, ","))
            .newUserList(StringUtils.join(newUserList, ","))
            .build();
        return userReportVO;
    }
```

```java
//Mapper
    /**
     * 查询指定时间区间的用户注册量
     * @param map
     * @return
     */
    Integer countByMap(Map map);

//动态xml

<select id="countByMap" resultType="java.lang.Integer">
    select count(id) from user
    <where>
      <if test="beginTime != null">
        and create_time &gt;= #{beginTime}
      </if>
      <if test="endTime != null">
        and create_time &lt;= #{endTime}
      </if>
    </where>

  </select>
```



#### 功能测试

> 由于当前小程序只有自己的一个用户,因此总的用户和新增用户固定不变

![image-20240105230644522](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240105230644522.png)

> 提交一下代码~

### 订单统计

#### 需求分析和设计

![image-20240105231429291](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240105231429291.png)

业务规则

- 有效订单状态指已完成的订单
- x轴为日期,y轴为订单总数和有效订单数
- 根据时间区间,展示每天的订单总数和有效订单数
- 展示所选区间的有效订单数,总订单数,订单完成率(有效订单数/总订单数 * 100%)

#### 代码开发

```java
//Controller
    /**
     * 订单统计
     * @param begin
     * @param end
     * @return
     */
    @GetMapping("/ordersStatistics")
    @ApiOperation("订单统计")
    public Result<OrderReportVO> orderStatistics(
        @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate begin,
        @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate end){
        log.info("订单统计：{}-{}",begin,end);
        OrderReportVO orderReportVO = reportService.getOrderStatistics(begin,end);
        return Result.success(orderReportVO);

    }
```

```java
//ServiceImpl
    /**
     * 统计指定时间区间的订单量
     *
     * @param begin
     * @param end
     * @return
     */
    @Override
    public OrderReportVO getOrderStatistics(LocalDate begin, LocalDate end) {
        List<LocalDate> dateList = getDateList(begin, end);
        //遍历dateList，查询每天的订单量,每天的有效订单量,订单总数,有效订单总数
        List<Integer> orderCountList = new ArrayList<>();
        List<Integer> validOrderCountList = new ArrayList<>();

        for (LocalDate date : dateList) {
            //获取日期开始结束具体时间
            LocalDateTime beginTime = LocalDateTime.of(date, LocalTime.MIN);
            LocalDateTime endTime = LocalDateTime.of(date, LocalTime.MAX);
            //查询指定时间区间的订单量
            Map map = new HashMap() {{
                put("beginTime", beginTime);
                put("endTime", endTime);
            }};
            Integer orderCount = getOrderCount(map);
            //查询指定时间区间的有效订单量
            map.put("status", Orders.COMPLETED);
            Integer validOrderCount = getOrderCount(map);
            //存放每天的订单量和有效订单量
            orderCountList.add(orderCount);
            validOrderCountList.add(validOrderCount);

        }
        //计算总订单量和有效订单量
        Integer totalOrderCountList = orderCountList.stream().mapToInt(Integer::intValue).sum();
        Integer totalValidOrderCountList = validOrderCountList.stream().mapToInt(Integer::intValue).sum();
        //计算总订单量和有效订单量的占比
        Double orderCompletionRate = (totalOrderCountList == 0 ? 0.0 : totalValidOrderCountList.doubleValue() * 100 / totalOrderCountList);
        //将orderCountList、validOrderCountList和dateList,orderCompletionRate转成字符串封装进VO
        OrderReportVO orderReportVO = OrderReportVO.builder()
            .dateList(StringUtils.join(dateList, ","))
            .orderCountList(StringUtils.join(orderCountList, ","))
            .validOrderCountList(StringUtils.join(validOrderCountList, ","))
            .totalOrderCount(totalOrderCountList)
            .validOrderCount(totalValidOrderCountList)
            .orderCompletionRate(orderCompletionRate.doubleValue())
            .build();
        return orderReportVO;
    }

    private static List<LocalDate> getDateList(LocalDate begin, LocalDate end) {
        return Stream.iterate(begin, date -> date.plusDays(1))
            .limit(ChronoUnit.DAYS.between(begin, end.plusDays(1)))
            .collect(Collectors.toList());
    }

    private Integer getOrderCount(Map map){
        Integer orderCount = orderMapper.countByMap(map);
        orderCount = orderCount == null ? 0 : orderCount;
        return orderCount;
    }
```

> :question: 为什么不直接在第一个循环里面顺便把订单总量和有效订单总量计算出来
>
> -> b站弹幕说一个循环最好只负责一件事情,分成多个循环其实并不会让性能有什么提升,反而会增加代码的耦合度,不方便后期单独修改某一个功能
>
> 可以看到使用流式编程计算得到订单总量,代码简洁优雅易懂,应多多借鉴

```java
//Mapper
    /**
     * 根据动态条件统计订单数量
     * @param map
     * @return
     */
    Integer countByMap(Map map);
//动态xml
<select id="countByMap" resultType="java.lang.Integer">
    select count(id) from orders
    <where>
        <if test="beginTime != null">
            and order_time &gt;= #{beginTime}
        </if>
        <if test="endTime != null">
            and order_time &lt;= #{endTime}
        </if>
        <if test="status != null">
            and status = #{status}
        </if>
    </where>
  </select>
```

#### 功能测试

顺利,完成率令人堪忧...

![image-20240106002320272](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106002320272.png)

> 提交一下代码~

### 销量排名Top10

#### 需求分析和设计

![image-20240106003908498](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106003908498.png)

业务规则

- 根据时间选择区间,展示销量前10的商品(包括菜品和套餐)
- x轴商品名称,y轴销量
- 销量即商品销售的份数

![image-20240106004201817](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106004201817.png)

#### 代码开发

```java
//Controller
    /**
     * 商品销量top10
     * @param begin
     * @param end
     * @return
     */
    @GetMapping("/top10")
    @ApiOperation("商品销量top10")
    public Result<SalesTop10ReportVO> top10(
        @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate begin,
        @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate end){
        log.info("商品销量top10：{}-{}",begin,end);
        SalesTop10ReportVO salesTop10ReportVO = reportService.getSalesTop10(begin,end);
        return Result.success(salesTop10ReportVO);

    }
```

> 在编写service方法之前,先思考一下sql语句要怎么查询

统计销量细则

- 查询订单详情记录,某一菜品销量数为对应number字段的总和

- 其中还要根据order_id查询相应的订单表,如果订单状态不是完成,则不能计算在内

    简单用sql语句测试一下

    ```sql
    # sql原型
    select od.name,sum(od.number) from order_detail od,orders o where od.order_id = o.id and o.status = 5 and o.order_time >= beginTime and o.order_time <= endTime group by od.name order by sum(od.number) desc limit 10
    ```

    ![image-20240106010234442](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106010234442.png)

    可以看到返回了数据,由于之前完成的订单不多,数据设置的不太有测试意义(笑)

    把status限制去掉试一下,可以看到符合预期

    ![image-20240106012125642](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106012125642.png)

```java
//ServiceImpl
    /**
     * 统计指定时间区间的商品销量top10
     *
     * @param begin
     * @param end
     * @return
     */
    @Override
    public SalesTop10ReportVO getSalesTop10(LocalDate begin, LocalDate end) {
        List<LocalDate> dateList = getDateList(begin, end);
        //查询商品销量
        //select od.name,sum(od.number) from order_detail od,orders o where od.order_id = o.id and o.status = 5 and o.order_time >= beginTime and o.order_time <= endTime group by od.name order by sum(od.number) desc limit 10
        LocalDateTime beginTime = LocalDateTime.of(begin, LocalTime.MIN);
        LocalDateTime endTime = LocalDateTime.of(end, LocalTime.MAX);
        List<GoodsSalesDTO> goodsSalesDTOList = orderMapper.getSalesTop10(beginTime, endTime);
        //将goodsSalesDTOList中的name和number分别转成列表字符串封装进VO
        SalesTop10ReportVO salesTop10ReportVO = SalesTop10ReportVO.builder()
            .nameList(StringUtils.join(goodsSalesDTOList.stream().map(GoodsSalesDTO::getName).collect(Collectors.toList()), ","))
            .numberList(StringUtils.join(goodsSalesDTOList.stream().map(GoodsSalesDTO::getNumber).collect(Collectors.toList()), ","))
            .build();
        return salesTop10ReportVO;
    }

```

```java
//Mapper
   /**
     * 根据指定时间区间查询商品销量top10
     * @param beginTime
     * @param endTime
     * @return
     */
    List<GoodsSalesDTO> getSalesTop10(LocalDateTime beginTime, LocalDateTime endTime);

//动态xml
 <select id="getSalesTop10" resultType="com.weekie.dto.GoodsSalesDTO">
    select od.name,sum(od.number) number
    from order_detail od,orders o
      <where>
        od.order_id = o.id and o.status = 5
        <if test="beginTime != null">
            and o.order_time &gt;= #{beginTime}
        </if>
        <if test="endTime != null">
            and o.order_time &lt;= #{endTime}
        </if>
      </where>
      group by od.name
      order by number desc
      limit 10
  </select>
```



#### 功能测试

顺利

![image-20240106014016930](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106014016930.png)

> 提交一下代码,晚上好好犒劳一下自己:heart:

## Day12 2024.01.06 数据统计之Excel报表

> :star2: 后端部分最后一天,加油特种兵

![image-20240106155958197](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106155958197.png)

![image-20240106160040244](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106160040244.png)

### 工作台

#### 需求设计和分析

> 工作台是系统运营的数据看板,提供了快捷操作入口,可以有效提高商家的工作效率

![image-20240106160238448](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106160238448.png)

包括

- 今日数据
- 订单管理
- 菜品总览
- 套餐总览
- 订单信息

名词解释

- 营业额:已完成订单的总金额
- 有效订单:已经完成的订单数量
- 订单完成率:有效订单/总订单数
- 平均客单价:营业额/有效订单数

![image-20240106160700838](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106160700838.png)

#### 代码导入

> 正常导入即可

#### 功能测试

![image-20240106161608213](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106161608213.png)

> 为什么把所有数据都给查出来了?这...这不对吧
>
> 经检查,是由于之前自己写的函数参数名字和老师的不一致导致的
>
> 导入的代码一部分调用了昨天写的函数,其中开始时间和结束时间我在mapper传入参数的名字为`beginTime`和`endTime`,而老师写的函数传入参数名字叫做`begin`和`end`,因此自然因为读取不到时间区间而把表中所有数据都给查了
>
> 只需要按照如下把参数名字改掉就行,个人认为`beginTIme`和`endTime`名字取的更合理一些
>
> ```java
> //Controller
>     /**
>      * 工作台今日数据查询
>      * @return
>      */
>     @GetMapping("/businessData")
>     @ApiOperation("工作台今日数据查询")
>     public Result<BusinessDataVO> businessData(){
>         //获得当天的开始时间
>         LocalDateTime beginTime = LocalDateTime.now().with(LocalTime.MIN);
>         //获得当天的结束时间
>         LocalDateTime endTime = LocalDateTime.now().with(LocalTime.MAX);
> 
>         BusinessDataVO businessDataVO = workspaceService.getBusinessData(beginTime, endTime);
>         return Result.success(businessDataVO);
>     }
> ```
>
> ```java
> //ServiceImpl
>   /**
>      * 根据时间段统计营业数据
>      * @param beginTime
>      * @param endTime
>      * @return
>      */
>     public BusinessDataVO getBusinessData(LocalDateTime beginTime, LocalDateTime endTime) {
>         /**
>          * 营业额：当日已完成订单的总金额
>          * 有效订单：当日已完成订单的数量
>          * 订单完成率：有效订单数 / 总订单数
>          * 平均客单价：营业额 / 有效订单数
>          * 新增用户：当日新增用户的数量
>          */
> 
>         Map map = new HashMap();
>         map.put("beginTime",beginTime);
>         map.put("endTime",endTime);
> 
>         //查询总订单数
>         Integer totalOrderCount = orderMapper.countByMap(map);
> 
>         map.put("status", Orders.COMPLETED);
>         //营业额
>         Double turnover = orderMapper.sumByMap(map);
>         turnover = turnover == null? 0.0 : turnover;
> 
>         //有效订单数
>         Integer validOrderCount = orderMapper.countByMap(map);
> 
>         Double unitPrice = 0.0;
> 
>         Double orderCompletionRate = 0.0;
>         if(totalOrderCount != 0 && validOrderCount != 0){
>             //订单完成率
>             orderCompletionRate = validOrderCount.doubleValue() / totalOrderCount;
>             //平均客单价
>             unitPrice = turnover / validOrderCount;
>         }
> 
>         //新增用户数
>         Integer newUsers = userMapper.countByMap(map);
> 
>         return BusinessDataVO.builder()
>                 .turnover(turnover)
>                 .validOrderCount(validOrderCount)
>                 .orderCompletionRate(orderCompletionRate)
>                 .unitPrice(unitPrice)
>                 .newUsers(newUsers)
>                 .build();
>     }
> /**
>      * 查询订单管理数据
>      *
>      * @return
>      */
>     public OrderOverViewVO getOrderOverView() {
>         Map map = new HashMap();
>         map.put("beginTime", LocalDateTime.now().with(LocalTime.MIN));
>         map.put("status", Orders.TO_BE_CONFIRMED);
> 
>         //待接单
>         Integer waitingOrders = orderMapper.countByMap(map);
> 
>         //待派送
>         map.put("status", Orders.CONFIRMED);
>         Integer deliveredOrders = orderMapper.countByMap(map);
> 
>         //已完成
>         map.put("status", Orders.COMPLETED);
>         Integer completedOrders = orderMapper.countByMap(map);
> 
>         //已取消
>         map.put("status", Orders.CANCELLED);
>         Integer cancelledOrders = orderMapper.countByMap(map);
> 
>         //全部订单
>         map.put("status", null);
>         Integer allOrders = orderMapper.countByMap(map);
> 
>         return OrderOverViewVO.builder()
>                 .waitingOrders(waitingOrders)
>                 .deliveredOrders(deliveredOrders)
>                 .completedOrders(completedOrders)
>                 .cancelledOrders(cancelledOrders)
>                 .allOrders(allOrders)
>                 .build();
>     }
> 
> 
> ```

这回再测试一下

顺利

![image-20240106163358097](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106163358097.png)

在小程序端点餐看看数据有没有变化

![image-20240106164356369](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106164356369.png)

> 一些测试反馈
>
> :bug: 如果在支付完订单后管理端响起接单提示音的时候点击催单,在播放催单提示音的同时会再一次响起接单提示音
>
> :bug: 在商家操作订单的时候,用户端显示的订单页面并不会同步刷新
>
> :hammer_and_wrench: 前端接单和催单弹窗应该过一段时间自动消失,而不是商家手动点击

> 提交一下代码~

### Apache POI

#### 介绍

> 是一个处理office文件的开源项目,绝大部分都是用来操作excel文件

#### 入门案例

```java
public class POITest {
    /**
     * 通过POI生成Excel文件并写入内容
     *
     */
    public static void write() throws IOException {
        //内存中创建一个Excel文件
        XSSFWorkbook excel = new XSSFWorkbook();
        //创建一个工作表
        XSSFSheet sheet = excel.createSheet("info");
        //创建一行并创建一个单元格并写入内容
        XSSFRow row0 = sheet.createRow(0);
        row0.createCell(0).setCellValue("姓名");
        row0.createCell(1).setCellValue("城市");
        //创建第二行并创建单元格并写入内容
        XSSFRow row1 = sheet.createRow(1);
        row1.createCell(0).setCellValue("张三");
        row1.createCell(1).setCellValue("北京");

        FileOutputStream fos = new FileOutputStream("C:\\Users\\86130\\Desktop\\info.xlsx");
        excel.write(fos);

        //关闭资源
        fos.close();
        excel.close();
    }

    /**
     * 通过POI读取Excel文件中的内容
     * @throws IOException
     */
    public static void read() throws IOException {
        System.out.println("读取Excel文件中的内容");
        FileInputStream fis = new FileInputStream("C:\\Users\\86130\\Desktop\\info.xlsx");
        XSSFWorkbook excel = new XSSFWorkbook(fis);
        XSSFSheet sheet = excel.getSheet("info");
        //遍历所有行输出
        for (int i = 0; i <= sheet.getLastRowNum(); i++) {
            XSSFRow row = sheet.getRow(i);
            //遍历所有列输出
            for (int j = 0; j < row.getLastCellNum(); j++) {
                System.out.print(row.getCell(j) + "\t");
            }
            System.out.println();
        }
        //关闭资源
        fis.close();
        excel.close();
        
    }
    @Test
    public void testPOI(){
        try {
            write();
            read();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}

```



### 导出运营数据报表

#### 需求分析和设计

![image-20240106190918004](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106190918004.png)

业务规则

- 导出Excel形式的报表文件
- 导出最近30天的运营数据

![image-20240106191039209](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106191039209.png)

> :bell:该接口没有返回数据,因为报表导出功能本质上是文件下载
>
> 服务端会通过输出流将Excel文件下载到客户端浏览器

#### 代码开发

实现步骤

> 由于直接在代码创建文件实现样式过于繁琐,因此通常都是实现设计好模板文件然后通过poi在里面充填数据

1. 设计Excel模板文件

    >  在server模块的resource.template目录下面将模板文件复制进去
    >
    > ![image-20240106193031620](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106193031620.png)

2. 查询仅30天的运营数据

3. 将查询到的运营数据写入模板文件

4. 通过输出流将Excel文件下载到客户端浏览器

```java
//Controller
    /**
     * 导出营业数据报表
     * @param response
     */
    @GetMapping("/export")
    @ApiOperation("导出营业数据报表")
    public void export(HttpServletResponse response){
        reportService.exportBusinessData(response);
    }
```

> 虽然接口本身不传入任何数据,但需要一个response对象来获取输出流实现文件输出

> :star:推荐一个idea插件`RestfulTool`,可以直接通过url跳转到对应controller方法,可以直观显示controller和service之间的调用关系

> :star:推荐一个idea插件`File Path Autocomplete`,可以实现文件目录的自动填充

```java
//ServiceImpl
    /**
     * 导出营业数据报表
     *
     * @param response
     */
    @Override
    public void exportBusinessData(HttpServletResponse response) {
        /*查询近30天的营业数据
        * 概览数据:
        *   通过workspaceService的getBusinessData接口即可*/
        LocalDate beginDate = LocalDate.now().minusDays(30);
        LocalDate endDate= LocalDate.now().minusDays(1);

        LocalDateTime beginTime = LocalDateTime.of(beginDate, LocalTime.MIN);
        LocalDateTime endTime = LocalDateTime.of(endDate, LocalTime.MAX);

        //查询概览数据
        BusinessDataVO businessDataVO = workspaceService.getBusinessData(beginTime, endTime);

        //基于现有的模板文件创建一个新的excel文件,并写入数据
        try {
            XSSFWorkbook excel = new XSSFWorkbook(this.getClass().getClassLoader().getResourceAsStream("template/运营数据报表模板.xlsx"));
            XSSFSheet sheet = excel.getSheet("Sheet1");
            //填充时间数据
            sheet.getRow(1).getCell(1).setCellValue("时间: " + beginDate + " 至 " + endDate);
            //填充第4行
            XSSFRow row = sheet.getRow(3);
            //填充营业额
            row.getCell(2).setCellValue(businessDataVO.getTurnover());
            //填充订单完成率
            row.getCell(4).setCellValue(businessDataVO.getOrderCompletionRate());
            //填充新增用户数
            row.getCell(6).setCellValue(businessDataVO.getNewUsers());
            //填充第5行
            row = sheet.getRow(4);
            //填充有效订单数
            row.getCell(2).setCellValue(businessDataVO.getValidOrderCount());
            //填充平均客单价
            row.getCell(4).setCellValue(businessDataVO.getUnitPrice());

            //填充明细数据
            List<LocalDate> dateList = getDateList(beginDate, endDate);
            for (int i = 0; i < dateList.size(); i++) {
                LocalDate date = dateList.get(i);
                //获取日期开始结束具体时间
                beginTime = LocalDateTime.of(date, LocalTime.MIN);
                endTime = LocalDateTime.of(date, LocalTime.MAX);
                //查询指定时间区间的营业数据
                BusinessDataVO businessData = workspaceService.getBusinessData(beginTime, endTime);
                //填充某一行数据
                row = sheet.getRow(7 + i);
                //填充日期
                row.getCell(1).setCellValue(date.toString());
                //填充营业额
                row.getCell(2).setCellValue(businessData.getTurnover());
                //填充有效订单数
                row.getCell(3).setCellValue(businessData.getValidOrderCount());
                //填充订单完成率
                row.getCell(4).setCellValue(businessData.getOrderCompletionRate());
                //填充平均客单价
                row.getCell(5).setCellValue(businessData.getUnitPrice());
                //填充新增用户数
                row.getCell(6).setCellValue(businessData.getNewUsers());
            }
            //通过输出流将excel文件输出到浏览器
            ServletOutputStream outputStream = response.getOutputStream();
            excel.write(outputStream);
            outputStream.flush();
            //关闭资源
            outputStream.close();
            excel.close();

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }
```

> :bell:个人不太倾向写死数据,因此采用先获取日期list然后动态进行遍历,不过因为excel导出这种功能比较单独,应该不存在什么复用场景,所以里面各个数据填充的位置就暂时写死了,至于抽取也比较简单,只需要根据不同的模板文件设置不同的常量类就好了,可以约定常量类各个字段的名称,到时候通过反射方式动态获取需要填充的数据的位置,不过这次就懒得弄啦

#### 功能测试

一切顺利~

![image-20240106203755198](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106203755198.png)

![image-20240106203747428](C:\Users\86130\AppData\Roaming\Typora\typora-user-images\image-20240106203747428.png)

> 提交一下代码~
