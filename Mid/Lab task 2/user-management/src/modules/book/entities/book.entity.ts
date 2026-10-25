import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "books" })
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column()
  pages!: number;

  @Column("double precision")
  price!: number;
}
