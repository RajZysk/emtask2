import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Teacher } from 'src/entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class TeacherRepository {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepo: Repository<Teacher>,
  ) {}
  fetchAllTeachers(search: any) {
    return search;
  }
  fetchTeacher(slug: string) {
    return slug;
  }
  createTeacher(res: CreateTeacherDto) {
    return res;
  }
  updateTeacher(slug: string, res: UpdateTeacherDto) {
    return { slug, res };
  }
}
