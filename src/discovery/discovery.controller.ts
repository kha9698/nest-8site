import { Controller, Get, Req, UseGuards, Post } from '@nestjs/common';
import { DiscoveryService } from './discovery.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('discovery')
export class DiscoveryController {
  authService: any;
  constructor(private readonly discoveryService: DiscoveryService) {}

@UseGuards(AuthGuard('jwt'))
@Get()
getDiscovery(@Req() req) {
  const user = req.user;

  if (user.role !== 'viewer' && user.role !== 'creator') {
    return { message: 'Access denied' };
  }

  return this.discoveryService.findAll();
}

}
