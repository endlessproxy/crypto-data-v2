import axios from "axios";
import * as cheerio from 'cheerio';

const config = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    },
};

export async function getPriceData (cryptoName: string): Promise<number> {
    let price = await axios.get(`https://coinmarketcap.com/currencies/${cryptoName}/`, config)
    .then(({ data }) => {
        const $ = cheerio.load(data);

        const priceElement = $("span[data-test='text-cdp-price-display']")
            .text()
            .replace("$", "")
            .replace(",", "")
            .trim();

        console.log(Number(priceElement));
        
        return Number(priceElement);
    });

    return price;
}