import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env'
import { AuthModule } from './auth/auth.module'
import { PrismaService } from './prisma/prisma.service'
import { FetchRecentQuestionsController } from './http/controllers/fetch-recent-questions.controller'
import { CreateQuestionController } from './http/controllers/create-question.controller'
import { AuthenticateController } from './http/controllers/authenticate.controller'
import { CreateAccountController } from './http/controllers/create-account.controller'
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
