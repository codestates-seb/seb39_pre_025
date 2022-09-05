package com.pre.service;

import com.pre.dto.BoardDto;
import com.pre.dto.BoardPatchDto;
import com.pre.dto.BoardResponseDto;
import com.pre.entity.BoardPost;
import com.pre.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;


    /**
     * ★ 게시글 저장 완료
     */
    @Transactional
    public BoardPost save(BoardDto boardDto){

        BoardPost boardPost =   BoardPost.builder()
            .title(boardDto.getTitle())
            .content(boardDto.getContent())
            .build();

        BoardPost boardPost1 = boardRepository.save(boardPost);
        return boardPost1;
    }


    /**
     * ★ 게시글 전체 보이기 완료
     */

    public Page<BoardPost> findBoards(Pageable pageable){
        return boardRepository.findAll(pageable);
    }


    /**
     * 검색기능이 포함된 게시글 전체 보이기
     */

    public Page<BoardPost> boardSearchList(String searchKeyword,Pageable pageable) {

        return boardRepository.findByTitleContaining(searchKeyword,pageable);
    }



    /**
     *  ★ 글 한개 찾는 메서드 완료
     */

    public BoardResponseDto findOneBoard(Long id){
        BoardPost boardPost   =  boardRepository.findById(id)
            .orElseThrow(()->new IllegalArgumentException("해당 글이 존재하지 않습니다"));

        return  BoardResponseDto.builder()
            .title(boardPost.getTitle())
            .content(boardPost.getContent())
            .build();
    }


    /**
     * ★ 게시글 삭제 완료
     */

    public void delete(Long id){
        BoardPost boardPost  =  boardRepository.findById(id)
            .orElseThrow(()-> new IllegalArgumentException("없는 글 입니다."));
        boardRepository.delete(boardPost);

    }


    /**
     * ★ 게시글 수정 완료
     */
    @Transactional
    public BoardResponseDto editBoard(Long Id, BoardPatchDto boardPatchDto){
        BoardPost boardPost = boardRepository.findById(Id)
            .orElseThrow(()-> new IllegalArgumentException("존재하지 않는 게시글 입니다."));
        boardPost.changeBoardPost(boardPatchDto.getTitle(), boardPatchDto.getContent());
        return  BoardResponseDto.builder()
            .title(boardPost.getTitle())
            .content(boardPost.getContent())
            .build();

    }


}
