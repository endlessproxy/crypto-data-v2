import express, { Application } from "express";
import cors from "cors";
import { routes } from "./routes/routes";

const app: Application = express();
const port = 8023;

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
    console.clear();
    console.log(
        `\n🚀✨ Server running at: 🌐 \x1b[35mhttp://localhost:${port}\x1b[0m 🚀\n`
    );

    console.log(
        `📦 \x1b[32mEndpoint:\x1b[0m /api/price/\x1b[33mcryptocurrency\x1b[0m 💸 \n`
    )
});