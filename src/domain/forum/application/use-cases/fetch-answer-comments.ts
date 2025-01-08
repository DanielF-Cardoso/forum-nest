import { Either, right } from '@/core/either'
import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { AnswerCommentsRepository } from '../repositories/answers-comments-repository'
import { Injectable } from '@nestjs/common'

interface FetchAnswersCommentsUseCaseRequest {
  answerId: string
  page: number
}

type FetchAnswersCommentsUseCaseResponse = Either<
  null,
  { answerComments: AnswerComment[] }
>

@Injectable()
export class FetchAnswersCommentsUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    answerId,
    page,
  }: FetchAnswersCommentsUseCaseRequest): Promise<FetchAnswersCommentsUseCaseResponse> {
    const answerComments =
      await this.answerCommentsRepository.findManyByAnswerId(answerId, {
        page,
      })

    return right({
      answerComments,
    })
  }
}
