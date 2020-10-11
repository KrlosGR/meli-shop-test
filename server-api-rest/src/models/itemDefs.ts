import { Field, ObjectType, ID, Directive } from 'type-graphql';
import { Price } from "./priceDefs";

@Directive(`@key(fields: "id")`)
@ObjectType()
export class Item {

    @Field(() => ID)
    id!: string;

    @Field()
    title!: string;

    @Field()
    price!: Price;

    @Field()
    picture!: string;

    @Field()
    condition!: string;

    @Field({ nullable: true })
    free_shipping?: boolean;

    @Field({ nullable: true })
    sold_quantity?: number;

    @Field({ nullable: true })
    description?: string;
}

// export async function resolveProductReference(
//     reference: Pick<Item, 'id'>,
// ): Promise<Item | undefined> {
//     return products.find(p => p.upc === reference.upc);
// }