import { CmsService } from './cms.service';
export declare class CmsController {
    private readonly cmsService;
    constructor(cmsService: CmsService);
    create(body: any): {
        title: string;
        description: string;
        type: string;
        category: string;
        language: string;
        duration: number;
        id: string;
    } | {
        message: string;
    };
    findAll(): any[];
    findOne(id: string): any;
    remove(id: string, body: any): {
        message: string;
    };
}
