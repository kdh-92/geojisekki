package com.side.tiggle.domain.comment.api;

import com.side.tiggle.domain.comment.CommentDto;
import com.side.tiggle.domain.comment.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 임시 CRUD (추가 작업 필요)
 */

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/comment")
public class CommentApiController {

    private final CommentService commentService;

    @PostMapping
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto commentDto) {
        return new ResponseEntity<>(commentService.createComment(commentDto), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CommentDto> getComment(@PathVariable("id") Long commentId) {
        return new ResponseEntity<>(commentService.getComment(commentId), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<CommentDto>> getAllComment() {
        return new ResponseEntity<>(commentService.getAllComment(), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CommentDto> updateComment(@PathVariable("id") Long commentId,
                                                  @RequestBody CommentDto commentDto) {
        return new ResponseEntity<>(commentService.updateComment(commentId, commentDto), HttpStatus.OK);
    }

    // delete

}
