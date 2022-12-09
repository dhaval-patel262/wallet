import { Wallet } from 'src/wallet/entities/wallet.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Charge {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'bigint' })
  public amount: number;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  @ManyToOne((type) => Wallet, (wallet) => wallet.id)
  @JoinColumn()
  public wallet: Wallet;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
