package com.pre.repository;

import com.pre.entity.BoardPost;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<BoardPost,Long> {

    Page<BoardPost> findByTitleContaining(String searchKeyword, Pageable pageable);
}
