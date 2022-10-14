import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePost1665775143094 implements MigrationInterface {
    name = 'CreatePost1665775143094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizes" RENAME COLUMN "title" TO "a"`);
        await queryRunner.query(`ALTER TABLE "quizes" RENAME CONSTRAINT "UQ_6e4adbad92f6ec80a8e61bf51fc" TO "UQ_f74c4f165d0b25f380459567367"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizes" RENAME CONSTRAINT "UQ_f74c4f165d0b25f380459567367" TO "UQ_6e4adbad92f6ec80a8e61bf51fc"`);
        await queryRunner.query(`ALTER TABLE "quizes" RENAME COLUMN "a" TO "title"`);
    }

}
