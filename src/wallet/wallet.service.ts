import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletService {
  @InjectRepository(Wallet)
  private readonly repository: Repository<Wallet>;

  public createWallet(body: CreateWalletDto): Promise<Wallet> {
    const wallet: Wallet = new Wallet();

    return this.repository.save(wallet);
  }
}
