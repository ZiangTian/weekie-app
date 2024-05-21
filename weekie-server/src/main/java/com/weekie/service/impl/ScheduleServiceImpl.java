package com.weekie.service.impl;

import com.weekie.context.BaseContext;
import com.weekie.entity.Schedule;
import com.weekie.mapper.ScheduleMapper;
import com.weekie.service.ScheduleService;
import com.weekie.vo.ScheduleVO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ScheduleServiceImpl implements ScheduleService {
    @Autowired
    ScheduleMapper scheduleMapper;
    @Override
    public List<ScheduleVO> searchSchedule() {
        List<ScheduleVO>scheduleVOList=new ArrayList<>();
        List<Schedule>scheduleList=scheduleMapper.selectByUid(Math.toIntExact(BaseContext.getCurrentId()));
        for(Schedule schedule:scheduleList){
            ScheduleVO scheduleVO=new ScheduleVO();
            BeanUtils.copyProperties(schedule,scheduleVO);
            scheduleVOList.add(scheduleVO);
        }
        return scheduleVOList;
    }

    @Override
    public void updateSchedule(Schedule schedule) {
        schedule.setUpdateTime(LocalDateTime.now());
        scheduleMapper.update(schedule);
    }

    @Override
    public void deleteSchedule(Integer id) {
        scheduleMapper.deleteBySid(id);
    }

    @Override
    public Integer addSchedule(Schedule schedule) {
        schedule.setCreateTime(LocalDateTime.now());
        schedule.setUserId(Math.toIntExact(BaseContext.getCurrentId()));
        scheduleMapper.insert(schedule);
        return schedule.getId();
    }
}
