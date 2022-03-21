import { TeacherRepository } from './teachers.repository';
import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(private teacherRepo: TeacherRepository) {}
  fetchAllTeachers(search: any) {
    return this.teacherRepo.fetchAllTeachers(search);
  }
  fetchTeacher(slug: string) {
    return this.teacherRepo.fetchTeacher(slug);
  }
  createTeacher(res: CreateTeacherDto) {
    return this.teacherRepo.createTeacher(res);
  }
  updateTeacher(slug: string, res: UpdateTeacherDto) {
    return this.teacherRepo.updateTeacher(slug, res);
  }
}
