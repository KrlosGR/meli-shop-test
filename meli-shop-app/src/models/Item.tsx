export interface Item {
    condition: string
    free_shipping: boolean
    id: string
    picture: string
    price: { currency: string, amount: number, decimals: number }
    title: string
    description: string
    sold_quantity: number
}

export type TUseItemFetch = [
    Item | undefined,
    boolean,
    boolean
]

export type TUseItemsFetch = [
    {
        state: Omit<Item, 'description' | 'sold_quantity'>[],
        loading: boolean,
        error: boolean
    },
    (T: string | null) => Promise<void>
]