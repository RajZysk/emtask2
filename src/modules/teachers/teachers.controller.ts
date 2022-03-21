import { CreateTeacherDto } from './dto/create-teacher.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

import { TeachersService } from './teachers.service';
@ApiTags('teachers')
@Controller('teachers')
export class TeachersController {
  constructor(private teacherService: TeachersService) {}
  @Get()
  fetchAllTeachers(@Query() search: any) {
    return this.teacherService.fetchAllTeachers(search);
  }
  @Get('/:slug')
  fetchTeacher(@Param('slug') slug: string) {
    return this.teacherService.fetchTeacher(slug);
  }
  @Post()
  createTeacher(@Body() res: CreateTeacherDto) {
    return this.teacherService.createTeacher(res);
  }
  @Patch('/:slug')
  updateTeacher(@Param('slug') slug: string, @Body() res: UpdateTeacherDto) {
    return this.teacherService.updateTeacher(slug, res);
  }
}
