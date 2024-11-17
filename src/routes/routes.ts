import express from "express";
import { cryptoPriceRoute } from "./cryptoPriceRoute";

export const routes = express.Router();

routes.use(cryptoPriceRoute);