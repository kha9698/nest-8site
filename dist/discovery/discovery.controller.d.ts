import { DiscoveryService } from './discovery.service';
export declare class DiscoveryController {
    private readonly discoveryService;
    authService: any;
    constructor(discoveryService: DiscoveryService);
    getDiscovery(req: any): {
        id: number;
        title: string;
        creator: string;
    }[] | {
        message: string;
    };
}
