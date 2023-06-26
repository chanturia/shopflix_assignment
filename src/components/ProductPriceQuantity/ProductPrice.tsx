import {useState} from "react";

interface ProductPriceT {
    price: number | string;
}

export const ProductPrice = ({price}: ProductPriceT) => {
    const [productPrice, setProductPrice] = useState(splitNumber(typeof price === "string" ? parseFloat(price) : price));

    function splitNumber(number: number) {
        const [integerPart, fractionalPart] = number.toString().split('.')
        return [integerPart, fractionalPart]
    }

    return (
        <div className="gap-0.5 flex items-start justify-start text-zinc-800">
            <div className="text-2xl leading-none font-bold">€{productPrice[0]}</div>
            <div className="text-base leading-none font-medium">{productPrice[1]}</div>
        </div>
    )
}

export default ProductPrice