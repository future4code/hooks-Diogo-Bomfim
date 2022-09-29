import { Request, Response } from "express";
import { PurchaseDatabase } from "../database/PurchaseDatabase";
import { Product } from "../models/Product";
import { Purchase, PurchaseDB } from "../models/Purchase";
import { ProductDatabase } from "../database/ProductDatabase";
import { UserDatabase } from "../database/UserDatabase";

export const createPurchase = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const userId = req.body.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity;

    if (!userId || !productId || !quantity) {
      throw new Error("Body inválido.");
    }

    const userDatabase = new UserDatabase();
    const findUser = await userDatabase.findUser(userId);

    if (findUser.length === 0) {
      errorCode = 404;
      throw new Error("Usuário não encontrado.");
    }

    const productDatabase = new ProductDatabase();
    const findProduct = await productDatabase.findProduct(productId);

    if (findProduct.length === 0) {
      errorCode = 404;
      throw new Error("Produto não encontrado.");
    }

    // const product: Product = {
    //     id: findProduct[0].id,
    //     name: findProduct[0].name,
    //     price: findProduct[0].price
    // }

    const product = new Product(
      findProduct[0].id,
      findProduct[0].name,
      findProduct[0].price
    );

    // const newPurchase: Purchase = {
    //     id: Date.now().toString(),
    //     userId,
    //     productId,
    //     quantity,
    //     totalPrice: product.getPrice() * quantity
    // }

    const purchase = new Purchase(
      Date.now().toString(),
      userId,
      productId,
      quantity,
      product.getPrice() * quantity
    );

    const compra: PurchaseDB = {
      id: purchase.getId(),
      user_id: purchase.getUserId(),
      product_id: purchase.getProductId(),
      quantity: purchase.getQuantity(),
      total_price: purchase.getTotalPrice(),
    };

    const purchaseDatabase = new PurchaseDatabase();
    await purchaseDatabase.createPurchase(compra);

    res.status(201).send({ message: "Compra registrada", purchase: purchase });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
