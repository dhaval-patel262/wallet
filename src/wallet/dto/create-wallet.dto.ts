import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateWalletDto {
  public isDeleted: boolean;

  public balance: number;
}
