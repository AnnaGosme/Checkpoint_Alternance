import { Field, InputType, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@ObjectType()
export default class Country {
  @PrimaryColumn()
  @Field()
  @Column()
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
  @PrimaryColumn()
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;
}
