import { ErrorGenerico } from './../services/itemService';
import { Request, Response } from "express";
import { Producto, SearchRespose } from "../models/product.model";
import ItemService from "../services/itemService";

const itemService: ItemService = new ItemService;


export const cbProducts = async (req: Request, res: Response) => {
    if (!req.query.q) {
        res.status(404).send('Error de pagina');
        return;
    }
    const payload: SearchRespose = await itemService.findItems(req.query.q);
    return res.send(payload);
}

export const cbItemsID = async (req: Request, res: Response): Promise<Response> => {
    const payload: Producto | ErrorGenerico = await itemService.findItemById(req.params.id);
    return res.send(payload);
}