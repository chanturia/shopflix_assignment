interface CardHeadingT {
    text: string;
}

export const CardHeading = ({text}: CardHeadingT) => {
    return (
        <div
            className="absolute bg-white inline-flex left-[21px] px-1.5 top-[-5px] z-10 font-bold leading-none text-sm text-stone-400">
            <span>{text}</span>
        </div>
    )
}

export default CardHeading