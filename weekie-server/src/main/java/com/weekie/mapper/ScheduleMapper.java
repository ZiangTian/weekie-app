package com.weekie.mapper;

import com.weekie.entity.Schedule;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface ScheduleMapper {
    @Select("select * from Weekie.schedule where user_id=#{currendtId}")
    List<Schedule> selectByUid(int currentId);
    @Update("update Weekie.schedule set title=#{title},start=#{start},end=#{end} where id=#{id}")
    void update(Schedule schedule);

    @Delete("DELETE from Weekie.schedule where id=#{id}")
    void deleteBySid(Integer id);

    Integer insert(Schedule schedule);
}
