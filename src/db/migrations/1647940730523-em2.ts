import {MigrationInterface, QueryRunner} from "typeorm";

export class em21647940730523 implements MigrationInterface {
    name = 'em21647940730523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "states" ("slug" character varying NOT NULL, "is_active" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "state_name" character varying NOT NULL, "country_id" integer, CONSTRAINT "UQ_ed5d099d54bc956668818235823" UNIQUE ("slug"), CONSTRAINT "PK_09ab30ca0975c02656483265f4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "countries" ("slug" character varying NOT NULL, "is_active" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "country_name" character varying NOT NULL, CONSTRAINT "UQ_7b46da5e1b89d03da927ee59e0a" UNIQUE ("slug"), CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teachers" ("slug" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "teacher_name" character varying NOT NULL, CONSTRAINT "UQ_e2541d9d116dd015c27a2765870" UNIQUE ("slug"), CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Student_Teacher_mapping" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "student_id" integer, "teacher_id" integer, CONSTRAINT "PK_865db1c03cc524f951cfb352de4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "students" ("slug" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "student_name" character varying NOT NULL, "DOB" character varying NOT NULL, CONSTRAINT "UQ_714c54a719be0ef67f442ed1d80" UNIQUE ("slug"), CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "marks" ("id" SERIAL NOT NULL, "maths" integer NOT NULL, "science" integer NOT NULL, "english" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_051deeb008f7449216d568872c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "states" ADD CONSTRAINT "FK_f3bbd0bc19bb6d8a887add08461" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Student_Teacher_mapping" ADD CONSTRAINT "FK_3864b23b1fee9e74601e130d500" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Student_Teacher_mapping" ADD CONSTRAINT "FK_ec45e7ffd60272ebfa1b2606e1d" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Student_Teacher_mapping" DROP CONSTRAINT "FK_ec45e7ffd60272ebfa1b2606e1d"`);
        await queryRunner.query(`ALTER TABLE "Student_Teacher_mapping" DROP CONSTRAINT "FK_3864b23b1fee9e74601e130d500"`);
        await queryRunner.query(`ALTER TABLE "states" DROP CONSTRAINT "FK_f3bbd0bc19bb6d8a887add08461"`);
        await queryRunner.query(`DROP TABLE "marks"`);
        await queryRunner.query(`DROP TABLE "students"`);
        await queryRunner.query(`DROP TABLE "Student_Teacher_mapping"`);
        await queryRunner.query(`DROP TABLE "teachers"`);
        await queryRunner.query(`DROP TABLE "countries"`);
        await queryRunner.query(`DROP TABLE "states"`);
    }

}
