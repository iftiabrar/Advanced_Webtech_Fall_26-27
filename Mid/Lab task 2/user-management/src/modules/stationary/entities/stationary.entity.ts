import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "stationaries" })
export class Stationary {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  brand!: string;

  @Column()
  unit_number!: number;

  @Column("double precision")
  price!: number;
}
