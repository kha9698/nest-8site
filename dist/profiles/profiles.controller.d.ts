import { CreateProfileDto } from './dto/create-profile.dto/create-profile.dto';
import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    create(dto: CreateProfileDto): {
        F_Name: string;
        L_Name: string;
        role: import("./enums/roles/roles").UserRole;
        id: string;
    };
    findAll(): any[];
    findOne(id: string): any;
}
