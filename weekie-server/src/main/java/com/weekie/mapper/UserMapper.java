package com.weekie.mapper;

import com.weekie.entity.User;
import com.weekie.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {
    @Select("select * from Weekie.user where username=#{username}")
    public User login(String username);

    @Select("select * from Weekie.user where id=#{id}")
    User read(int id);

    void change(User user);
}
