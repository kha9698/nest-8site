import { UsersService } from './users.service';
import { CreateProfileDto } from '../profiles/dto/create-profile.dto/create-profile.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(dto: CreateProfileDto): Promise<import("./user.entity").User>;
    findAll(): Promise<import("./user.entity").User[]>;
    findOne(id: string): Promise<import("./user.entity").User | null>;
}
