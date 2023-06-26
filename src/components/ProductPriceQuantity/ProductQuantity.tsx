import { useState } from "react";

export const ProductQuantity = ({ currentQuantity = 1 }: ProductQuantityT) => {
    const [quantity, setQuantity] = useState(currentQuantity);
    const increment = () => setQuantity((prevState) => prevState + 1);
    const decrement = () => setQuantity((prevState) => prevState > 0 ? prevState - 1 : 0);
    return (
        <div
            className="p-2 bg-gray-50 rounded-md border border border border justify-start items-center gap-3 flex select-none">
            <div
                onClick={() => decrement()}
                className="w-[26px] h-[26px] p-2.5 bg-white hover:bg-neutral-400 text-blue-800 hover:text-white rounded-md shadow flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer">
                <div
                    className="text-center text-[20px] font-bold leading-tight hover:neutral-400"
                >
                    <span>-</span>
                </div>
            </div>
            <div className="text-center text-zinc-800 text-[16px] font-bold leading-tight">{quantity}</div>
            <div
                className="w-[26px] h-[26px] p-2.5 bg-white hover:bg-neutral-400 text-blue-800 hover:text-white rounded-md shadow flex-col justify-center items-center gap-2.5 inline-flex cursor-pointer	">
                <div
                    className="text-center text-[20px] font-bold leading-tight"
                    onClick={() => increment()}>
                    <span>+</span>
                </div>
            </div>
        </div>

    )
}

export default ProductQuantity