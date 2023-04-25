package com.example.userservice.service;

import com.example.userservice.dto.UserDto;
import com.example.userservice.dto.ResponseUserDto;
import com.example.userservice.jpa.UserEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    ResponseUserDto createUser(UserDto userDto);

    ResponseUserDto getUserByUserId(String userId);

    List<UserEntity> getUserByAll();

    UserDto getUserDetailsByEmail(String email);
}