import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Teacher } from 'entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TeacherRepository {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepo: Repository<Teacher>,
  ) {}
  async fetchAllTeachers(search: any): Promise<any> {
    try {
      const { teacherName } = search;
      if (teacherName) {
        return this.teacherRepo
          .createQueryBuilder('teachers')
          .where('teachers.teacherName=:teacherName', { teacherName })
          .getMany();
      }
      return this.teacherRepo.createQueryBuilder('teachers').getMany();
    } catch (error) {}
  }
  async fetchTeacher(slug: string): Promise<any> {
    try {
      const teacher = await this.teacherRepo
        .createQueryBuilder()
        .where({ slug })
        .getOne();
      if (!teacher) {
        return { mes: 'teacher does not exists' };
      }
      return teacher;
    } catch (error) {
      return { mes: 'error in getting teacher by slug' };
    }
  }
  async createTeacher(res: CreateTeacherDto): Promise<any> {
    const { teacherName } = res;
    try {
      return this.teacherRepo
        .createQueryBuilder()
        .insert()
        .into(Teacher)
        .values({ teacherName, slug: uuid() })
        .execute();
    } catch (error) {
      console.log(error);
    }
  }
  async updateTeacher(slug: string, res: UpdateTeacherDto): Promise<any> {
    try {
      const { teacherName } = res;
      const student = await this.fetchTeacher(slug);
      if (student) {
        const result = await this.teacherRepo
          .createQueryBuilder()
          .where('slug = :slug', { slug })
          .update()
          .set({ teacherName })
          .execute();
        if (result.affected === 0) {
          return { mes: 'please enter a valid id' };
        } else return { mes: `${teacherName} updated successfully` };
      } else return { mes: 'student not found' };
    } catch (error) {
      return { mes: 'error in updating student' };
    }
  }
}
