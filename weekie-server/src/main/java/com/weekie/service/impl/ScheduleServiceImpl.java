package com.weekie.service.impl;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.weekie.config.AI;
import com.weekie.context.BaseContext;
import com.weekie.dto.ScheduleDTO;
import com.weekie.entity.Schedule;
import com.weekie.mapper.ScheduleMapper;
import com.weekie.service.ScheduleService;
import com.weekie.vo.ScheduleVO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

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
public ScheduleVO getById(int id) {
    ScheduleVO scheduleVO=new ScheduleVO();
    Schedule schedule= scheduleMapper.getById(id);
    BeanUtils.copyProperties(schedule,scheduleVO);
    return scheduleVO;
    }

    @Override
    public void updateSchedule(Schedule schedule) {
        schedule.setUpdateTime(LocalDateTime.now());
        scheduleMapper.update(schedule);
    }

    @Override
    public void deleteSchedule(String uuid) {
        scheduleMapper.deleteByUUid(uuid);
    }

    @Override
    public String addSchedule(ScheduleDTO scheduleDTO) {
        Schedule schedule=new Schedule();
        BeanUtils.copyProperties(scheduleDTO,schedule);
        schedule.setCreateTime(LocalDateTime.now());
        schedule.setUpdateTime(LocalDateTime.now());
        schedule.setUserId(Math.toIntExact(BaseContext.getCurrentId()));
        UUID uuid=UUID.randomUUID();
        schedule.setTaskID(uuid.toString());
        if(schedule.getDeadline()==null)
        schedule.setDeadline(schedule.getStartTime());
        scheduleMapper.insert(schedule);
        return schedule.getTaskID();
    }

    @Override
    public ScheduleVO AICreateTask(String taskDesci) throws IOException {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        ScheduleVO scheduleVO=AI.test(taskDesci);
        String start=scheduleVO.getStartTime();
        String end=scheduleVO.getEndTime();
        LocalDateTime startTime=LocalDateTime.parse(start,formatter);
        LocalDateTime endTime=LocalDateTime.parse(end,formatter);
        if(startTime.isAfter(endTime)){
            endTime=startTime.plusHours(1);
            scheduleVO.setEndTime(endTime.toString());
        }
        ScheduleDTO scheduleDTO=new ScheduleDTO();
        BeanUtils.copyProperties(scheduleVO,scheduleDTO);
        String taskId=addSchedule(scheduleDTO);
        scheduleVO.setTaskID(taskId);
        return scheduleVO;
    }
}
