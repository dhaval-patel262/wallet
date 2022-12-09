import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { Repository } from 'typeorm';
import { CreateChargeDto } from './dto/create-charge.dto';
import { UpdateChargeDto } from './dto/update-charge.dto';
import { Charge } from './entities/charge.entity';

@Injectable()
export class ChargeService {
  @InjectRepository(Wallet)
  private readonly walletRepository: Repository<Wallet>;

  @InjectRepository(Charge)
  private readonly chargeRepository: Repository<Charge>;

  async create(body: CreateChargeDto) {
    const charge: Charge = new Charge();

    charge.name = body.name;
    charge.amount = body.amount;

    const wallet = await this.walletRepository.findOne({
      where: { id: body.wallet.id },
    });
    charge.wallet = wallet;

    await this.chargeRepository.save(charge);
    wallet.balance = wallet.balance - body.amount;
    await this.walletRepository.update(wallet.id, wallet);
    return charge;
  }

  findAllByUserId(id: number) {
    return this.chargeRepository.find({
      where: { wallet: { id: id } },
    });
  }

  findOne(id: number) {
    return this.chargeRepository.findOne({
      where: { id: id },
      relations: ['wallet'],
    });
  }

  update(id: number, updateChargeDto: UpdateChargeDto) {
    return `This action updates a #${id} charge`;
  }

  remove(id: number) {
    return `This action removes a #${id} charge`;
  }
}
