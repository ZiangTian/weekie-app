package com.weekie.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
//title: string
//startTime: string
//endTime: string
//deadline: string
//Importance: boolean
//Urgency: boolean
//tag: string （任务标签，即列表分类）
//desc: string （描述）
//taskID: string (任务创建时间)
public class Schedule {
    private Integer id;
    private Integer userId;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private String title;
    private String startTime;
    private String endTime;
    private String deadline;
    private boolean importance;
    private boolean urgency;
    private String tag;
    private String desc;
    private String taskID;

}
