package com.weekie.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleDTO {
    private String title;
    private String startTime;
    private String endTime;
    private String dedaline;
    private boolean importance;
    private boolean urgency;
    private String tag;
    private String desc;
    private String taskID;
}
