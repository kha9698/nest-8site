import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateProfileDto } from '../profiles/dto/create-profile.dto/create-profile.dto';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    create(dto: CreateProfileDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
}
