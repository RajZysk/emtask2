import { UpdateStudentDto } from './dto/update-student.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Student } from 'src/entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class StudentRepository {
  constructor(
    @InjectRepository(Student)
    private studentrepo: Repository<Student>,
  ) {}
  findAllStudents(search: any) {
    return search;
  }
  findStudent(slug: string) {
    return slug;
  }
  creatingStudent(res: CreateStudentDto) {
    return res;
  }
  updateStudent(slug: string, res: UpdateStudentDto) {
    return { slug, res };
  }
}
