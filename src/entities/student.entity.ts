import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
  @Column({
    name: 'mark_optained',
    nullable: false,
  })
  mark: number;
  @OneToMany(() => StudentTeacher, (std_teach) => std_teach.student)
  std_teach: StudentTeacher[];
}
