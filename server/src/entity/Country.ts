import { Field, InputType, ObjectType } from "type-graphql";
import { Entity, Column, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity()
export default class Country {
  @Field()
  @PrimaryColumn()
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  emoji: string;
}

@InputType()
export class CountryInput {
  @Field()
  @PrimaryColumn()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;
}
