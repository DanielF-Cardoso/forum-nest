import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { QuestionBestAnswerChosenEvent } from '@/domain/forum/enterprise/events/question-best-answer-chosen-event'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'
import { AnswerRepository } from '../repositories/answers-repository'
export class OnQuestionBestAnswerChosen implements EventHandler {
  constructor(
    private answersRepository: AnswerRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendQuestionBestAnswerNotification.bind(this),
      QuestionBestAnswerChosenEvent.name,
    )
  }

  private async sendQuestionBestAnswerNotification({
    question,
    bestAnswerId,
  }: QuestionBestAnswerChosenEvent) {
    const answer = await this.answersRepository.findByID(
      bestAnswerId.toString(),
    )
    if (answer) {
      await this.sendNotification.execute({
        recipientId: answer.authorId.toString(),
        title: `Your answer was chosen!`,
        content: `The answer you submitted in "${question.title
          .substring(0, 20)
          .concat('...')}" was chosen by the author!`,
      })
    }
  }
}
