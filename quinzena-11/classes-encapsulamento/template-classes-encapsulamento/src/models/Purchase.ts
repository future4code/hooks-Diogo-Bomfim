// type para tipar no typescript com camelCase
// export type Purchase = { id: string, userId: string, productId: string, quantity: number, totalPrice: number }

export class Purchase  {
    constructor(
        public id: string,
        public userId: string,
        public productId: string,
        public quantity: number,
        public totalPrice: number
    ){
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
}

// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}