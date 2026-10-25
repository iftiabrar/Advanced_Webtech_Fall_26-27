import { MigrationInterface, QueryRunner, Table } from "typeorm";



export class CreateKhataTable1775500022204 implements MigrationInterface{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"khatas",
                    columns:[

                        {
                            name:"id",
                            type:"uuid",
                            isPrimary: true,
                            generationStrategy:"uuid",
                            default:"uuid_generate_v4()",
                        },
                        {
                            name:"brand",
                            type:"varchar",
                            isNullable:false,
                        },
                        {
                            name:"pages",
                            type:"integer",
                            isNullable:false,
                        },
                        {
                            name:"quantity",
                            type:"integer",
                            isNullable:false,
                        },
                        {
                            name:"price",
                            type:"double precision",
                            isNullable:false,
                        },
                        {
                            name:"created_at",
                            type:"timestamp",
                            default:"CURRENT_TIMESTAMP(6)"
                        },
                        {
                            name:"updated_at",
                            type:"timestamp",
                            default:"CURRENT_TIMESTAMP(6)"
                        },

                    ],
                } ),
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("khatas");
    }
}