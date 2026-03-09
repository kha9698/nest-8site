import { CreateProfileDto } from './dto/create-profile.dto/create-profile.dto';
export declare class ProfilesService {
    private users;
    create(dto: CreateProfileDto): {
        F_Name: string;
        L_Name: string;
        role: import("./enums/roles/roles").UserRole;
        id: string;
    };
    findAll(): any[];
    findOne(id: string): any;
}
