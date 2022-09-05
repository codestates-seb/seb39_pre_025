package com.pre.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class BoardResponseDto {

    private String title;

    private String content;

}
