import { Injectable } from '@nestjs/common';
import { CommentsCreateDto } from '../dto/comments.dto';

@Injectable()
export class CommentsService {
  async getAllComments() {}

  async createComment(id: string, comments: CommentsCreateDto) {}
}
