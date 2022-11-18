import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;
  private readonly walletRepository: Repository<Wallet>;

  public getUser(id: number): Promise<User> {
    return this.repository.findOneBy({ id: id });
  }

  public async createUser(body: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.name = body.name;
    user.email = body.email;

    const wallet: Wallet = new Wallet();

    wallet.isDeleted = body.wallet.isDeleted;

    const savedWallet = await this.walletRepository.save(wallet);

    //    user.wallet();
    console.log(savedWallet);

    return this.repository.save(user);
  }
}
