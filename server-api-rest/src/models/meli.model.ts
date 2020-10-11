type Picture = {
    id: string,
    url: string,
    secure_url: string,
    size: string
}

type Category = {
    id: string,
    name: string,
    path_from_root: { id: string, name: string }[]
}

type Filters = {
    id: string,
    name: string,
    type: string,
    values: Category[]
}

export type SearchQry = {
    query: string,
    results: MELIItem[],
    filters?: Filters[]
}

export type MELIItemDescription = {
    text: string,
    plain_text: string,
    last_updated: string,
    date_created: string
}

export interface MELIItem {
    id: string,
    title: string,
    currency_id: string,
    price: number,
    pictures: Picture[],
    thumbnail?: string,
    condition: string,
    shipping: { free_shipping: boolean },
    sold_quantity: number,
    category_id?: string
}
