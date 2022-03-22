import {
  Column,
  Entity,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { Marks } from './marks.entity';
import { master2 } from './master2';
import { StudentTeacher } from './student-teacher.entity';
@Entity({
  name: 'students',
})
export class Student extends master2 {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    nullable: false,
    name: 'student_name',
  })
  studentName: string;
  @Column()
  DOB: string;

  @OneToMany(() => StudentTeacher, (std_teach) => std_teach.student)
  std_teach: StudentTeacher[];
  @OneToOne(() => Marks, (marks) => marks.student)
  @JoinTable()
  mark: Marks;
}
