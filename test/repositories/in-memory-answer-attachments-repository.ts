import { AnswerAttachmentsRepository } from '@/domain/forum/application/repositories/answer-attachments-repository'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'

export class InMemoryAnswerAttachmentRepository
  implements AnswerAttachmentsRepository
{
  public items: AnswerAttachment[] = []

  async findManyByAnswerId(answerId: string) {
    const answersAttachments = this.items.filter(
      (item) => item.answerId.toString() === answerId,
    )
    return answersAttachments
  }

  async deleteManyByAnswerId(answerId: string) {
    const answersAttachments = this.items.filter(
      (item) => item.answerId.toString() !== answerId,
    )
    this.items = answersAttachments
  }
}
