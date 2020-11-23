import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Family from "./FamilyModel";
import Parents from "./ParentsModel";

@Entity({name: "child" /* Relation name in database */})
class Child {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    length: 100,
  })
  public firstName: string;

  @Column({
    length: 100,
  })
  public lastName: string;

  @Column()
  public age: number;

  @Column()
  public dob: Date;

  @ManyToOne(() => Parents, parent => parent.id,  { onDelete: "CASCADE" })
  public parents: Parents;

  @ManyToOne(() => Family, family => family.id,  { onDelete: "CASCADE" })
  public family: Family;
}

export default Child;
