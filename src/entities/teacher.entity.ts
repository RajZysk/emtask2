import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { master2 } from './master2';
import { StudentTeacher } from './student-teacher.entity';
@Entity({
  name: 'teachers',
})
export class Teacher extends master2 {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'teacher_name',
  })
  teacherName: string;
  @OneToMany(() => StudentTeacher, (std_teach) => std_teach.teacher)
  std_teach: StudentTeacher[];
}
