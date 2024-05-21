package com.weekie.controller;

import com.weekie.entity.Schedule;
import com.weekie.entity.User;
import com.weekie.result.Result;
import com.weekie.service.ScheduleService;
import com.weekie.service.UserService;
import com.weekie.vo.ScheduleVO;
import com.weekie.vo.UserVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@Slf4j
public class ScheduleController {
    @Autowired
    ScheduleService scheduleService;
    @GetMapping("/api/schedule")
    public  Result<List<ScheduleVO>>searchSchedule() throws Exception {
        return Result.success(scheduleService.searchSchedule());
    }

    @PutMapping("/api/schedule")
    public  Result<String>updateSchedule(@RequestBody(required = false) Schedule schedule) throws Exception {
        scheduleService.updateSchedule(schedule);
        return Result.success();
    }
    @DeleteMapping("/api/schedule")
    public  Result<String>deleteSchedule(@RequestParam Integer id) throws Exception {
        scheduleService.deleteSchedule(id);
        return Result.success();
    }
    @PostMapping("/api/schedule")
    public  Result<Integer>deleteSchedule(@RequestBody Schedule schedule) throws Exception {
        return Result.success(scheduleService.addSchedule(schedule));
    }
}
