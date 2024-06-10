package com.weekie.mapper;

import com.weekie.entity.Schedule;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface ScheduleMapper {


    @Select("select * from Weekie.schedule where id=#{id}")
    Schedule getById(int id);

    @Select("select * from Weekie.schedule where user_id=#{currendtId}")
    List<Schedule> selectByUid(int currentId);
//    private String dedaline;
//    private boolean importance;
//    private boolean urgency;
//    private String tag;
//    private String desc;
//    private String taskID;
    @Update("update Weekie.schedule set title=#{title},startTime=#{startTime},endTime=#{endTime},deadline=#{deadline},importance=#{importance},urgency=#{urgency},tag=#{tag},`desc`=#{desc} where taskID=#{taskID}")
    void update(Schedule schedule);

    @Delete("DELETE from Weekie.schedule where taskID=#{id}")
    void deleteByUUid(String id);

    Integer insert(Schedule schedule);

}
