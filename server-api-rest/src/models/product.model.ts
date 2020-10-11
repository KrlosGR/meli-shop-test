import { ObjectType, Field } from "type-graphql"
import { Author } from "./authorDefs";
import { Item } from "./itemDefs";

@ObjectType()
export class Producto {

    @Field(() => Author)
    autor!: Author;

    @Field(() => Item)
    item!: Item;
}

@ObjectType()
export class SearchRespose {

    @Field(() => Author)
    autor!: Author;

    // @Field(() => [String], { nullable: true })
    categories!: string[];

    @Field(() => [Item])
    items!: Item[];
}
