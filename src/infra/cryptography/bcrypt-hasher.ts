import { HasherComparer } from '@/domain/forum/application/cryptography/hash-comparer'
import { HasherGenerator } from '@/domain/forum/application/cryptography/hash-generator'
import { compare, hash } from 'bcryptjs'

export class BcryptHasher implements HasherGenerator, HasherComparer {
  async hash(plain: string): Promise<string> {
    return hash(plain, 8)
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    return compare(plain, hashed)
  }
}
