import { Module } from '@nestjs/common';
import { ChargeService } from './charge.service';
import { ChargeController } from './charge.controller';
import { Charge } from './entities/charge.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from 'src/wallet/entities/wallet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Charge]),
    TypeOrmModule.forFeature([Wallet]),
  ],
  controllers: [ChargeController],
  providers: [ChargeService],
})
export class ChargeModule {}
