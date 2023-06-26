import ProductPrice from "@/components/ProductPriceQuantity/ProductPrice";
import ProductQuantity from "@/components/ProductPriceQuantity/ProductQuantity";

export const ProductPriceQuantity = ({}: ProductPriceQuantityT) => {
    return (
        <div className="w-full justify-between items-center flex">
            <ProductPrice price={596.29}/>
            <ProductQuantity currentQuantity={1}/>
        </div>
    )
}

export default ProductPriceQuantity