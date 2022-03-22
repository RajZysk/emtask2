import { UpdateStudentDto } from './dto/update-student.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Student } from 'entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectRepository(Student)
    private studentrepo: Repository<Student>,
  ) {}
  async findAllStudents(search: any): Promise<any> {
    try {
      const { studentName } = search;
      if (studentName) {
        return this.studentrepo
          .createQueryBuilder('students')
          .where('students.studentName=:studentName', { studentName })
          .getMany();
      }
      return this.studentrepo.createQueryBuilder('students').getMany();
    } catch (error) {}
  }

  async findStudent(slug: string): Promise<any> {
    try {
      const student = await this.studentrepo
        .createQueryBuilder()
        .where({ slug })
        .getOne();
      if (!student) {
        return { mes: 'student does not exists' };
      }
      return student;
    } catch (error) {
      return { mes: 'error in getting student by slug' };
    }
  }

  async creatingStudent(res: CreateStudentDto): Promise<any> {
    const { studentName } = res;
    try {
      return await this.studentrepo
        .createQueryBuilder()
        .insert()
        .into(Student)
        .values({ studentName, slug: uuid() })
        .execute();
    } catch (error) {
      console.log(error);
    }
  }
  async updateStudent(slug: string, res: UpdateStudentDto): Promise<any> {
    try {
      const { studentName, DOB } = res;
      const student = await this.findStudent(slug);
      if (student) {
        const result = await this.studentrepo
          .createQueryBuilder()
          .where('slug = :slug', { slug })
          .update()
          .set({ studentName, DOB })
          .execute();
        if (result.affected === 0) {
          return { mes: 'please enter a valid id' };
        } else return { mes: `${studentName} updated successfully` };
      } else return { mes: 'student not found' };
    } catch (error) {
      return { mes: 'error in updating student' };
    }
  }
}
