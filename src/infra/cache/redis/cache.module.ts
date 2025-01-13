import { EnvModule } from '@/infra/env/env.module'
import { Module } from '@nestjs/common'
import { CacheRepository } from '../cache-repository'
import { RedisCacheRepository } from './redis-cache-repository'
import { RedisService } from './redis-service'

@Module({
  imports: [EnvModule],
  providers: [
    RedisService,
    {
      provide: CacheRepository,
      useClass: RedisCacheRepository,
    },
  ],
  exports: [CacheRepository],
})
export class CacheModule {}
