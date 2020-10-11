import { ObjectType, Field } from "type-graphql"

@ObjectType()
export class Author {

    @Field()
    name!: string;

    @Field()
    lastname!: string;
}