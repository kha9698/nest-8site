import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-cms.dto/create-cms.dto';

@Injectable()
export class CmsService {

  private contents: any[] = [];

  create(dto: CreateContentDto) {
    const content = {
      id: Date.now().toString(),
      ...dto,
    };

    this.contents.push(content);
    return content;
  }

  findAll() {
    return this.contents;
  }

  findOne(id: string) {
    return this.contents.find(c => c.id === id);
  }

  remove(id: string) {
    this.contents = this.contents.filter(c => c.id !== id);
    return { message: 'Deleted' };
  }
}