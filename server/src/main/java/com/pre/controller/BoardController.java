package com.pre.controller;

import com.pre.dto.BoardDto;
import com.pre.dto.BoardPatchDto;
import com.pre.dto.BoardResponseDto;
import com.pre.entity.BoardPost;
import com.pre.service.BoardService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;


    /**
     * ★ 게시글 저장 완료
     */
    @PostMapping("/questions")
    public ResponseEntity postBoard(@RequestBody @Valid BoardDto boardDto) {
        BoardPost boardPost = boardService.save(boardDto);
        return new ResponseEntity<>(boardPost, HttpStatus.CREATED);
    }


    /**
     * ★ 전체 게시글 보이기 완료
     */
    @GetMapping("/questions")
    public ResponseEntity listBoard(
        @PageableDefault(page = 0, size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable,
        String searchKeyword) {
        //모든 데이터를 가져왔지만 검색했을떄와 검색하지 않았을떄의 구별을 줘야한다.
        // searchKeyword가 들어왔을떄와 안들어왔을떄를 나눠서 구현해야한다.

        if (searchKeyword == null) {
            Page<BoardPost> boardPostList = boardService.findBoards(pageable);
            return new ResponseEntity<>(boardPostList, HttpStatus.OK);
        } else {
            Page<BoardPost> boardPostList = boardService.boardSearchList(searchKeyword, pageable);

            pageable.previousOrFirst().getPageNumber();
            pageable.next().getPageNumber();

            return new ResponseEntity<>(boardPostList, HttpStatus.OK);
        }
    }

    /**
     * ★ 단건 게시물 보이기 완료
     */
    @GetMapping("/questions/{boardId}")
    public ResponseEntity oneBoard(@PathVariable Long boardId) {
        BoardResponseDto boardResponseDto = boardService.findOneBoard(boardId);
        return new ResponseEntity<>(boardResponseDto, HttpStatus.OK);
    }


    /**
     * ★ 게시글 삭제 완료
     */
    @DeleteMapping("/questions/{boardId}")
    public String deleteBoard(@PathVariable Long boardId) {
        boardService.delete(boardId);
        return "삭제 되었습니다.";
    }


    /**
     * ★ 게시글 수정 완료
     */
    @PatchMapping("/questions/{boardId}")
    public ResponseEntity editBoard(@PathVariable Long boardId,
        @RequestBody BoardPatchDto boardPatchDto) {
        BoardResponseDto boardResponseDto = boardService.editBoard(boardId, boardPatchDto);
        return new ResponseEntity<>(boardResponseDto, HttpStatus.ACCEPTED);

    }
}