import { Either, right } from '@/core/either'
import { AnswerCommentsRepository } from '../repositories/answers-comments-repository'
import { Injectable } from '@nestjs/common'
import { CommentWithAuthor } from '../../enterprise/entities/value-objects/comment-with-author'

interface FetchAnswersCommentsUseCaseRequest {
  answerId: string
  page: number
}

type FetchAnswersCommentsUseCaseResponse = Either<
  null,
  { comments: CommentWithAuthor[] }
>

@Injectable()
export class FetchAnswersCommentsUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    answerId,
    page,
  }: FetchAnswersCommentsUseCaseRequest): Promise<FetchAnswersCommentsUseCaseResponse> {
    const comments =
      await this.answerCommentsRepository.findManyByAnswerIdWithAuthor(
        answerId,
        {
          page,
        },
      )

    return right({
      comments,
    })
  }
}
