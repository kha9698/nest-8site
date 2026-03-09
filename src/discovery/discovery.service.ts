import { Injectable } from "@nestjs/common";

@Injectable()
export class DiscoveryService {
  findAll() {
    return [
      { id: 1, title: 'Post 1', creator: 'user1' },
      { id: 2, title: 'Post 2', creator: 'user2' },
    ];
  }
}