import { CreateContentDto } from './dto/create-cms.dto/create-cms.dto';
export declare class CmsService {
    private contents;
    create(dto: CreateContentDto): {
        title: string;
        description: string;
        type: string;
        category: string;
        language: string;
        duration: number;
        id: string;
    };
    findAll(): any[];
    findOne(id: string): any;
    remove(id: string): {
        message: string;
    };
}
