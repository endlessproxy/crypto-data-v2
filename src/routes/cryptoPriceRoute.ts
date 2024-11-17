import express, { Response, Request } from "express";
import { getPriceData } from "../services/cryptoService";

export const cryptoPriceRoute = express.Router();

cryptoPriceRoute.get("/api/price/:cryptocurrency", async (req: Request, res: Response) => {
    const priceData = await getPriceData(req.params.cryptocurrency);
    res.json({ price: priceData });
});