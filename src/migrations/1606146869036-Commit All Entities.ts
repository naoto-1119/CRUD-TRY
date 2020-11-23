import {MigrationInterface, QueryRunner} from "typeorm";

export class CommitAllEntities1606146869036 implements MigrationInterface {
    name = 'CommitAllEntities1606146869036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "family" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "familyName" character varying(100) NOT NULL, CONSTRAINT "PK_ba386a5a59c3de8593cda4e5626" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parents" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(100) NOT NULL, "lastName" character varying(100) NOT NULL, "age" integer NOT NULL, "dob" TIMESTAMP NOT NULL, "familyId" uuid, CONSTRAINT "PK_9a4dc67c7b8e6a9cb918938d353" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "child" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(100) NOT NULL, "lastName" character varying(100) NOT NULL, "age" integer NOT NULL, "dob" TIMESTAMP NOT NULL, "parentsId" uuid, "familyId" uuid, CONSTRAINT "PK_4609b9b323ca37c6bc435ec4b6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "parents" ADD CONSTRAINT "FK_f0e429716b168d5255f8aaa3745" FOREIGN KEY ("familyId") REFERENCES "family"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "child" ADD CONSTRAINT "FK_f273fa607ce933da7ba58116e66" FOREIGN KEY ("parentsId") REFERENCES "parents"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "child" ADD CONSTRAINT "FK_220db438ae35d31c6716de7feac" FOREIGN KEY ("familyId") REFERENCES "family"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "child" DROP CONSTRAINT "FK_220db438ae35d31c6716de7feac"`);
        await queryRunner.query(`ALTER TABLE "child" DROP CONSTRAINT "FK_f273fa607ce933da7ba58116e66"`);
        await queryRunner.query(`ALTER TABLE "parents" DROP CONSTRAINT "FK_f0e429716b168d5255f8aaa3745"`);
        await queryRunner.query(`DROP TABLE "child"`);
        await queryRunner.query(`DROP TABLE "parents"`);
        await queryRunner.query(`DROP TABLE "family"`);
    }

}
