import { EnvModule } from '@/infra/env/env.module'
import { EnvService } from '@/infra/env/env.service'
import { Module } from '@nestjs/common'

@Module({
  imports: [EnvModule],
  providers: [EnvService],
})
export class CacheModule {}
