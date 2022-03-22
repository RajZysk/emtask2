import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Student } from './student.entity';

@Entity(`marks`)
export class Marks {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  maths: number;
  @Column()
  science: number;
  @Column()
  english: number;
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    select: false,
  })
  createdAt: Date;
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    select: false,
  })
  updatedAt: Date;
  @OneToOne(() => Student, (student) => student.mark)
  student: Student;
}
