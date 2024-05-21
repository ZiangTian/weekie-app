package com.weekie.service;

import com.weekie.entity.User;
import com.weekie.vo.UserVO;

public interface UserService {
    public UserVO login(String username, String password) throws Exception;

   public UserVO read();

    public void change(User user);
}
