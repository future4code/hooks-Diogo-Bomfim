import { PurchaseDB } from "../models/Purchase";
import BaseDatabase from "./BaseDatabase";
import { TABLE_PRODUCTS, TABLE_USERS } from "../database/tableNames";

export class PurchaseDatabase extends BaseDatabase {
  public static TABLE_PURCHASES = "Labe_Purchases";
  
  public async getUserPurchases(id: string) {
    const result = await BaseDatabase.connection.raw(`
    SELECT
    ${TABLE_USERS}.email,
    ${TABLE_PRODUCTS}.name AS product_name,
    ${TABLE_PRODUCTS}.price AS product_price,
    ${PurchaseDatabase.TABLE_PURCHASES}.quantity AS product_quantity,
    ${PurchaseDatabase.TABLE_PURCHASES}.total_price
    FROM ${PurchaseDatabase.TABLE_PURCHASES}
    JOIN ${TABLE_USERS}
    ON ${PurchaseDatabase.TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
    JOIN ${TABLE_PRODUCTS}
    ON ${PurchaseDatabase.TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
    WHERE ${PurchaseDatabase.TABLE_PURCHASES}.user_id = ${id};
    `);

    return result;
  }

  public async createPurchase(purchase: PurchaseDB) {
    await BaseDatabase.connection(PurchaseDatabase.TABLE_PURCHASES).insert({
        id: purchase.id,
        user_id: purchase.user_id,
        product_id: purchase.product_id,
        quantity: purchase.quantity,
        total_price: purchase.total_price
    })
  }
}
