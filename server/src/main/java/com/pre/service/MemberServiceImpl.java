package com.pre.service;

import com.pre.dto.MemberRegisterDto;
import com.pre.model.Member;
import com.pre.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional
    @Override
    public Long register(MemberRegisterDto requestDto) throws Exception {

//        if (memberRepository.findByEmail(requestDto.getEmail()).isPresent()){
//            throw new Exception("이미 존재하는 이메일입니다.");
//        }

        if (!requestDto.getPassword().equals(requestDto.getPassword())){
            throw new Exception("비밀번호가 일치하지 않습니다.");
        }


        requestDto.setPassword(bCryptPasswordEncoder.encode(requestDto.getPassword()));
        requestDto.setRole("ROLE_USER");
        Member member =memberRepository.save(requestDto.toEntity());

        return member.getId();
    }
}