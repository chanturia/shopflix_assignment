import { useState } from "react";
import splitNumber from "@/helpers/splitNumber";

export const ProductPrice = ({ price }: ProductPriceT) => {
    const [productPrice, setProductPrice] = useState(splitNumber(typeof price === "string" ? parseFloat(price) : price));

    return (
        <div className="gap-0.5 flex items-start justify-start text-zinc-800">
            <div className="text-2xl leading-none font-bold">€{productPrice[0]}</div>
            <div className="text-base leading-none font-medium">{productPrice[1]}</div>
        </div>
    )
}

export default ProductPrice