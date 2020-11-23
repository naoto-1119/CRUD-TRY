import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

/**
 * User entity has been defined
 * You shouldn't need to alter any code here
 */
@Entity({name: "family" /* Relation name in database */})
class Family {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    length: 100,
  })
  public familyName: string;

}

export default Family;
