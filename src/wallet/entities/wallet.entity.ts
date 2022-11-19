import { UserEntity } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'bigint', nullable: true })
  balance: number;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  @OneToOne((type) => UserEntity, (user) => user.wallet)
  user: UserEntity;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
