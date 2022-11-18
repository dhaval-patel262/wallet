import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateWalletDto } from 'src/wallet/dto/create-wallet.dto';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsEmail()
  public email: string;

  public wallet: CreateWalletDto;
}
