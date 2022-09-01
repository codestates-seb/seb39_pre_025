package com.pre.controller;


import com.pre.dto.MemberRegisterDto;
import com.pre.model.Member;
import com.pre.repository.MemberRepository;
import com.pre.service.MemberService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class RestApiController {

    // 추가

    private final MemberService memberService;




    @PostMapping("/users/register")
    @ResponseStatus(HttpStatus.OK)
    public Long join(@Valid @RequestBody MemberRegisterDto request) throws Exception{
            return memberService.register(request);

    }

    // 추가
    @GetMapping("/api/v1/user")
    public String user() {
        return "user";
    }
    // 추가
    @GetMapping("/api/v1/admin")
    public String admin() {
        return "admin";
    }
}