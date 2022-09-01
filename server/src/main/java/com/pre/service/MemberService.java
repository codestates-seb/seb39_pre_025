package com.pre.service;

import com.pre.dto.MemberRegisterDto;

public interface MemberService {

    // 회원가입
    public Long register(MemberRegisterDto requestDto) throws Exception;
}