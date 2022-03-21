import { UpdateStudentDto } from './dto/update-student.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentsService) {}
  @Get()
  findAllStudents(@Query() search: any) {
    return this.studentService.findAllStudents(search);
  }
  @Get('/:slug')
  findStudent(@Param('slug') slug: string) {
    return this.studentService.findStudent(slug);
  }
  @Post()
  creatingStudent(@Body() res: CreateStudentDto) {
    return this.studentService.creatingStudent(res);
  }
  @Patch('/:slug')
  updateStudent(@Param('slug') slug: string, @Body() res: UpdateStudentDto) {
    return this.studentService.updateStudent(slug, res);
  }
}
