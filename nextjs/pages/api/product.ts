import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../business/product";
import productRepo from "../../firestore/productRepo";

type ErrorMessage = { error: string };

export default async function product(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | ErrorMessage>
) {
  if (req.method === "GET") {
    const products = await productRepo.getAll();
    res.status(200).json(products);
  } else if (req.method === "POST") {
    const newProduct: Product = {};
    await productRepo.add(newProduct);
    res.status(200).json({});
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
