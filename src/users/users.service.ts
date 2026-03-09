import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateProfileDto } from '../profiles/dto/create-profile.dto/create-profile.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  create(dto: CreateProfileDto) {
  const user = this.userRepo.create({
    F_Name: dto.F_Name,
    L_Name: dto.L_Name,
    role: dto.role as any, 
  });

  return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }
}