import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './entities/user.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([Wallet]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
