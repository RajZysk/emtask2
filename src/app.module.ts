import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatesModule } from './modules/states/states.module';
import { CountriesModule } from './modules/countries/countries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './modules/students/students.module';
import { TeachersModule } from './modules/teachers/teachers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    StatesModule,
    CountriesModule,
    StudentsModule,
    TeachersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
