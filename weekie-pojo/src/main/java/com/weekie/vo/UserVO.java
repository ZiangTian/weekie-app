package com.weekie.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserVO {
    private int id;
    private String userName;
    private String password;
    private String lastName;
    private String firstName;
    private String email;
    private String jwt;
}
