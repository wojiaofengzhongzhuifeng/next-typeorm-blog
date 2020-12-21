import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

console.log(Entity);

@Entity()
export class Photo {

  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    length: 100
  })
  name: string | undefined;

  @Column("text")
  description: string | undefined;

  @Column()
  filename: string | undefined;

  @Column("double")
  views: number | undefined;

  @Column()
  isPublished: boolean | undefined;
}