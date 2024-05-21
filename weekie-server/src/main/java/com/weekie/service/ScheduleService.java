package com.weekie.service;

import com.weekie.entity.Schedule;
import com.weekie.vo.ScheduleVO;

import java.util.List;

public interface ScheduleService {
    List<ScheduleVO> searchSchedule();

    void updateSchedule(Schedule schedule);

    void deleteSchedule(Integer id);

    Integer addSchedule(Schedule schedule);
}
