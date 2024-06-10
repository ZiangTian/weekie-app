package com.weekie.mapper;

import com.weekie.entity.User;
import com.weekie.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UserMapper {
    @Select("select * from Weekie.user where username=#{username}")
    public User login(String username);

    @Select("select * from Weekie.user where id=#{id}")
    User read(int id);

    @Update("update Weekie.user set first_name=#{firstName},last_name=#{lastName},email=#{email}")
    void change(User user);
}
