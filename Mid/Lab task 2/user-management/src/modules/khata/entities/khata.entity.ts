import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "khatas" })
export class Khata {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  brand!: string;

  @Column()
  pages!: number;

  @Column()
  quantity!: number;

  @Column("double precision")
  price!: number;
}
