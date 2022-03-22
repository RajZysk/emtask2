import { Teacher } from 'entities/teacher.entity';
import { getRepository } from 'typeorm';
import { Seeder } from 'typeorm-seeding';
import { v4 as uuid } from 'uuid';
export default class TeacherSeader implements Seeder {
  public async run() {
    const teachers = [
      {
        teacherName: 'preethi',
        slug: uuid(),
      },
      {
        teacherName: 'mohana',
        slug: uuid(),
      },
      {
        teacherName: 'kaviya',
        slug: uuid(),
      },
      {
        teacherName: 'sangeeth',
        slug: uuid(),
      },
    ];
    await getRepository(Teacher).save(teachers);
  }
}
