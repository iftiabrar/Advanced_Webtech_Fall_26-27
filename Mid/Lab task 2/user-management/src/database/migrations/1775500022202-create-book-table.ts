import { MigrationInterface, QueryRunner, Table } from "typeorm";



export class CreateBookTable1775500022202 implements MigrationInterface{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"books",
                    columns:[

                        {
                            name:"id",
                            type:"uuid",
                            isPrimary: true,
                            generationStrategy:"uuid",
                            default:"uuid_generate_v4()",
                        },
                        {
                            name:"title",
                            type:"varchar",
                            isNullable:false,
                        },
                        {
                            name:"author",
                            type:"varchar",
                            isNullable:false,
                        },
                        {
                            name:"pages",
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
        await queryRunner.dropTable("books");
    }
}