import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateWalletDto {
  public balance: number;
}
