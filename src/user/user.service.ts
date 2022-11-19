import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectRepository(UserEntity)
  private readonly repository: Repository<UserEntity>;

  @InjectRepository(Wallet)
  private readonly walletRepository: Repository<Wallet>;

  public getUser(id: number): Promise<UserEntity> {
    return this.repository.findOne({
      where: { id: id },
      relations: ['wallet'],
    });
  }

  public async createUser(body: CreateUserDto): Promise<UserEntity> {
    const user: UserEntity = new UserEntity();

    user.name = body.name;
    user.email = body.email;

    const wallet: Wallet = new Wallet();
    const upatedWallet = Object.assign(wallet, body.wallet);
    const savedUser = await this.repository.save(user);
    upatedWallet.user = savedUser;

    await this.walletRepository.save(upatedWallet);

    return savedUser;
  }
}
