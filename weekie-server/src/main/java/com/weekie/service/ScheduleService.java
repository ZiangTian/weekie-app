package com.weekie.service;

import com.weekie.dto.ScheduleDTO;
import com.weekie.entity.Schedule;
import com.weekie.vo.ScheduleVO;

import java.io.IOException;
import java.util.List;

public interface ScheduleService {
    List<ScheduleVO> searchSchedule();

     ScheduleVO getById(int id);


    void updateSchedule(Schedule schedule);

    void deleteSchedule(String uuid);

    String addSchedule(ScheduleDTO scheduleDTO);

    ScheduleVO AICreateTask(String taskDesci) throws IOException;
}
