import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { GetWalletDto } from 'src/wallet/dto/get-wallet.dto';

export class CreateChargeDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public amount: number;

  @IsNotEmpty()
  public wallet: GetWalletDto;
}
