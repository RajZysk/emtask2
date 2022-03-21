import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentRepository as StudentRepository } from './students.repository';
import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(private studentRepo: StudentRepository) {}
  findAllStudents(search: any) {
    return this.studentRepo.findAllStudents(search);
  }
  findStudent(slug: string) {
    return this.studentRepo.findStudent(slug);
  }
  creatingStudent(res: CreateStudentDto) {
    return this.studentRepo.creatingStudent(res);
  }
  updateStudent(slug: string, res: UpdateStudentDto) {
    return this.studentRepo.updateStudent(slug, res);
  }
}
