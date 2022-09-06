package com.pre.model;

import com.pre.entity.BoardPost;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.password.PasswordEncoder;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class MemberBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="MEMBER_ID")
    private Long id;

    @Column(nullable = false,length = 30)
    private String username;

    @Column(nullable = false,length = 200)
    private String password;

    @Column(nullable = false,unique = true)
    private String email;

    private String role;   // 권한 -> USER, ADMIN

    @OneToMany(mappedBy = "writer")
    @Builder.Default
    private List<BoardPost> postList = new ArrayList<>();



    /**
     *  회원 정보 수정
     */

    public void updatePassword(PasswordEncoder passwordEncoder, String password){
        this.password = passwordEncoder.encode(password);
    }

    public void updateName(String username){
        this.username = username;
    }

}
