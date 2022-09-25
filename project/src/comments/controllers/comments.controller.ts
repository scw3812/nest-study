import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CommentsCreateDto } from '../dto/comments.dto';
import { CommentsService } from '../services/comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({ summary: '모든 고양이 프로필에 적힌 댓글 가져오기' })
  @Get()
  getAllComments() {
    return this.commentsService.getAllComments();
  }

  @ApiOperation({ summary: '모든 고양이 프로필에 적힌 댓글 가져오기' })
  @Post(':id')
  createComment(@Param('id') id: string, @Body() body: CommentsCreateDto) {
    return this.commentsService.createComment(id, body);
  }
}
