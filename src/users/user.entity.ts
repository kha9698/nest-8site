import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRole } from './user-role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  F_Name!: string;

  @Column()
  L_Name!: string;

@Column({
  type: 'text',
  default: UserRole.USER,
})
role!: UserRole;
}