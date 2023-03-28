import { Module } from '@nestjs/common';
import { TagController } from './tag.cpmtroller';
import { TagService } from './tag.service';

@Module({
  controllers: [TagController],
  providers: [TagService]
})
export class TagModule { }
