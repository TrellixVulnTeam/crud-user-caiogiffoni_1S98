import { MigrationInterface, QueryRunner } from "typeorm";

export class alterColumnsDate1656952673988 implements MigrationInterface {
    name = 'alterColumnsDate1656952673988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_entrega_s5" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users_entrega_s5" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users_entrega_s5" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users_entrega_s5" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_entrega_s5" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "users_entrega_s5" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "users_entrega_s5" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users_entrega_s5" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
