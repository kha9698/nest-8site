import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CmsService } from './cms.service';
import { CreateContentDto } from './dto/create-cms.dto/create-cms.dto';

@Controller('cms')
export class CmsController {

  constructor(private readonly cmsService: CmsService) {}

  @Post()
  create(@Body() body: any) {

    if (body.role !== 'creator') {
      return { message: 'Access denied' };
    }

    return this.cmsService.create(body);
  }

  @Get()
  findAll() {
    return this.cmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cmsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() body: any) {

    if (body.role !== 'creator') {
      return { message: 'Access denied' };
    }

    return this.cmsService.remove(id);
  }
}