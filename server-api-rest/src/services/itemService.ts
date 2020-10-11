import fetch from "node-fetch";
import { Producto, SearchRespose } from "../models/product.model";
import { MELIItem, MELIItemDescription, SearchQry } from '../models/meli.model'
import { Item } from "../models/itemDefs";

export interface ErrorGenerico {
   message: string,
   error: string,
   status: number,
   cause: []
}

class ItemService {

   private base_url: string = 'https://api.mercadolibre.com';
   private limit_items: number = 4;

   constructor() { }

   private async getCategory({ results }: SearchQry): Promise<string[]> {
      // const response = await fetch(`${this.base_url}/categories/${id}`);
      // return response.json();
      const categoriesID = (arr: MELIItem[]): string[] =>
         arr.map(item => item.category_id ?? '');

      const sortCategory = (arr: string[]): {} =>
         arr.reduce((result: any, category) => ({
            ...result,
            [category]: (result[category] || 0) + 1
         }), {})

      const catDuplicate = (obj: any): string[] =>
         Object.keys(obj)
            .filter((item) => obj[item] > 1)

      const ID = catDuplicate(sortCategory(categoriesID(results)));
      console.log(ID)
      const response = await fetch(`${this.base_url}/categories/${ID}`);
      return response.json();

      // return categoriesID(results);
   }

   private async getItems({ results }: SearchQry): Promise<Item[]> {
      // https://api.mercadolibre.com/categories/MLA13459
      const items: Item[] = results
         .map(item => ({
            id: item.id,
            title: item.title,
            price: {
               currency: item.currency_id,
               amount: item.price,
               decimals: 2,
            },
            picture: item.thumbnail ?? '',
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
         }));
      return items;
   }

   private async processJSON(...args: [MELIItem, MELIItemDescription?]): Promise<Producto> {
      const [apiOne, apiTwo] = args;
      const payload: Producto = {
         autor: {
            name: 'Carlos',
            lastname: 'Guillen'
         },
         item: {
            id: apiOne.id,
            title: apiOne.title,
            price: {
               currency: apiOne.currency_id,
               amount: apiOne.price,
               decimals: 2,
            },
            picture: apiOne.pictures.find(_ => _.url !== '')!.url,
            condition: apiOne.condition,
            free_shipping: apiOne.shipping.free_shipping,
            sold_quantity: apiOne.sold_quantity,
            description: apiTwo?.plain_text || ''
         }
      }
      return payload;
   }

   private async processQueryJSON(meliResp: SearchQry): Promise<SearchRespose> {
      const payload: SearchRespose = {
         autor: {
            name: 'Carlos',
            lastname: 'Guillen'
         },
         categories: await this.getCategory(meliResp),
         items: await this.getItems(meliResp)
      }
      return payload;
   }

   private async getMELItemById(id: string) {
      try {
         const response = (await fetch(`${this.base_url}/items/${id}`)).json();
         return response;
      } catch (error) {
         return error;
      }
   }

   private async getMELItemsByQuery(q: string) {
      try {
         const response = await fetch(`${this.base_url}/sites/MLA/search?q=${q}&limit=${this.limit_items}`);
         return response.json();
      } catch (error) {
         console.error(error);
         return error;
      }
   }

   private async getMELIDescriptionById(id: string) {
      try {
         const response = await fetch(`${this.base_url}/items/${id}/description`);
         return response.json();
      } catch (error) {
         return error;
      }
   }

   public async findItemById(id: string): Promise<Producto | ErrorGenerico> {
      try {
         const resItem: MELIItem | ErrorGenerico = await this.getMELItemById(id);
         if ('error' in resItem) return resItem;
         const resDescription: MELIItemDescription = await this.getMELIDescriptionById(id);
         return this.processJSON(resItem, resDescription);
      } catch (error) {
         console.error(error);
         return error;
      }
   }

   public async findItems(q: any): Promise<SearchRespose> {
      const resItem: SearchQry = await this.getMELItemsByQuery(q);
      return this.processQueryJSON(resItem);
   }
}

export default ItemService;