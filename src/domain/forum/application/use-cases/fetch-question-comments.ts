import { Either, right } from '@/core/either'
import { QuestionComment } from '../../enterprise/entities/question-comment'
import { QuestionCommentsRepository } from '../repositories/question-comments-repository'
import { Injectable } from '@nestjs/common'

interface FetchQuestionsCommentsUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionsCommentsUseCaseResponse = Either<
  null,
  {
    questionComments: QuestionComment[]
  }
>

@Injectable()
export class FetchQuestionsCommentsUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionsCommentsUseCaseRequest): Promise<FetchQuestionsCommentsUseCaseResponse> {
    const questionComments =
      await this.questionCommentsRepository.findManyByQuestionId(questionId, {
        page,
      })

    return right({
      questionComments,
    })
  }
}
