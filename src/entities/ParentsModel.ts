import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Family from "./FamilyModel";

/**
 * User entity has been defined
 * You shouldn't need to alter any code here
 */
@Entity({name: "parents" /* Relation name in database */})
class Parents {
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

  @ManyToOne(() => Family, family => family.id,  { onDelete: "CASCADE" })
  public family: Family;
}

export default Parents;
