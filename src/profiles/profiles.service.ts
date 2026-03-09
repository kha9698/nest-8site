import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto/create-profile.dto';

@Injectable()
export class ProfilesService {

  private users: any[] = [];

  create(dto: CreateProfileDto) {
    const user = { id: Date.now().toString(), ...dto };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find(u => u.id === id);
  }
}