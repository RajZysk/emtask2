import { Marks } from 'entities/marks.entity';
import { getRepository } from 'typeorm';
import { Seeder } from 'typeorm-seeding';
export class StudentSeeder implements Seeder {
  public async run() {
    const student = [
      {
        english: 40,
        maths: 50,
        science: 69,
      },
      {
        english: 40,
        maths: 50,
        science: 69,
      },
      {
        english: 40,
        maths: 50,
        science: 69,
      },
      {
        english: 40,
        maths: 50,
        science: 69,
      },
    ];
    await getRepository(Marks).save(student);
  }
}
