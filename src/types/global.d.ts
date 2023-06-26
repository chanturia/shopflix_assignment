interface ProductPriceQuantityT {
}

declare interface ProductPriceT {
    price: number | string;
}

declare interface CardT extends React.PropsWithChildren<{ headingText?: string }> {}

declare interface ButtonComponentT extends React.PropsWithChildren<{ text: string }> {}

declare interface SvgIconPropsT {
    className?: string;
}

declare interface ProductQuantityT {
    currentQuantity: number;
}

declare interface CardHeadingT {
    text: string;
}