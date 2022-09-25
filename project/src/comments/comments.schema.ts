import {
  Prop,
  Schema,
  SchemaFactory,
  type SchemaOptions,
} from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Document, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Comment extends Document {
  @ApiProperty({
    description: 'author id',
    required: true,
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    unique: false,
    ref: 'cats',
  })
  @IsString()
  @IsNotEmpty()
  author: Types.ObjectId;

  @ApiProperty({
    description: '댓글 콘텐츠',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  contents: string;

  @ApiProperty({
    example: '0',
    description: 'like count',
  })
  @Prop({
    default: 0,
  })
  @IsPositive()
  likeCount: number;

  @ApiProperty({
    description: '게시글 정보',
    required: true,
  })
  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: 'cats',
  })
  @IsPositive()
  info: Types.ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
