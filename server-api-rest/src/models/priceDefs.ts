import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Price {

    @Field(() => String)
    currency!: string;

    @Field()
    amount!: number;

    @Field()
    decimals!: number;
}