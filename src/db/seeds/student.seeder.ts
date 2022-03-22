import { Student } from './../../entities/student.entity';
import { getRepository } from 'typeorm';
import { Seeder } from 'typeorm-seeding';
import { v4 as uuid } from 'uuid';
export class StudentSeeder implements Seeder {
  public async run() {
    const student = [
      {
        slug: uuid(),
        studentName: 'raj',
        DOB: '19-05-1995',
      },
      {
        slug: uuid(),
        studentName: 'basanta',
        DOB: '01-06-2000',
      },
      {
        slug: uuid(),
        studentName: 'deepan',
        DOB: '20-06-2000',
      },
      {
        slug: uuid(),
        studentName: 'soundar',
        DOB: '21-08-1995',
      },
    ];
    await getRepository(Student).save(student);
  }
}
