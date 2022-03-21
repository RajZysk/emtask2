import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from 'src/entities/teacher.entity';
import { TeachersController } from './teachers.controller';
import { TeacherRepository } from './teachers.repository';
import { TeachersService } from './teachers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  controllers: [TeachersController],
  providers: [TeachersService, TeacherRepository],
})
export class TeachersModule {}
