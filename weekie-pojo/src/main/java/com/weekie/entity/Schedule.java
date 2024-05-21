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
public class Schedule {
    private Integer id;
    private Integer userId;
    private String title;
    private String start;
    private String end;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
