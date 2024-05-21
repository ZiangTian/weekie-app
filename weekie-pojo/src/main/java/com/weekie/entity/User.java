package com.weekie.entity;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class User {
    private int id;
    private String userName;
    private String password;
    private String lastName;
    private String firstName;
    private String email;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
