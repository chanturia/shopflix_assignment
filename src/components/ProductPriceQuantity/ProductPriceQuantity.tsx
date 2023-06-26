import ProductPrice from "@/components/ProductPriceQuantity/ProductPrice";
import ProductQuantity from "@/components/ProductPriceQuantity/ProductQuantity";

interface ProductPriceQuantityT {
}

export const ProductPriceQuantity = ({}: ProductPriceQuantityT) => {
    return (
        <div className="self-stretch justify-between items-center flex">
            <ProductPrice price={596.29}/>
            <ProductQuantity currentQuantity={1}/>
        </div>
    )
}

export default ProductPriceQuantity