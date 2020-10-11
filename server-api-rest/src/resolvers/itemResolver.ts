import { ErrorGenerico } from './../services/itemService';
import { Query, Resolver, Arg } from "type-graphql";
import { Producto } from "../models/product.model";

import ItemService from "../services/itemService";


@Resolver(Producto)
export class ItemsResolver {
    // private itemsCollection: Producto;

    constructor(private itemService: ItemService = new ItemService) { }

    @Query(() => Producto)
    async item(@Arg('id') id: string): Promise<Producto | ErrorGenerico> {
        const payload = await this.itemService.findItemById(id);
        if ('error' in payload) return payload;
        return payload;
    }
}