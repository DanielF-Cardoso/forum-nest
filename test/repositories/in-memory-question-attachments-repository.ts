import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'

export class InMemoryQuestionAttachmentRepository
  implements QuestionAttachmentsRepository
{
  public items: QuestionAttachment[] = []

  async findManyByQuestionId(questionId: string) {
    const questionsAttachments = this.items.filter(
      (item) => item.questionId.toString() === questionId,
    )
    return questionsAttachments
  }

  async deleteManyByQuestionId(questionId: string) {
    const questionsAttachments = this.items.filter(
      (item) => item.questionId.toString() !== questionId,
    )
    this.items = questionsAttachments
  }

  async createMany(attachments: QuestionAttachment[]): Promise<void> {
    this.items.push(...attachments)
  }

  async deleteMany(attachments: QuestionAttachment[]): Promise<void> {
    const questionsAttachments = this.items.filter((item) => {
      return !attachments.some((attachment) => attachment.equals(item))
    })

    this.items = questionsAttachments
  }
}
