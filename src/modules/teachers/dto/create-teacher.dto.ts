import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTeacherDto {
  @IsNotEmpty()
  @IsNumber()
  teacherName: string;
  students: string[];
}
