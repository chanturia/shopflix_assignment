import {ReactNode} from "react";
import CardHeading from "@/components/card/CardHeading";

interface CardT {
    children: ReactNode;
    headingText?: string;
}

export const Card = ({children, headingText}: CardT) => {
    return (
        <div className="relative">
            {headingText && <CardHeading text={'Το SHOPFLIX προτείνει'}/>}
            <div
                className="border border-zinc-300 flex-col gap-[18px] inline-flex items-center p-[22px] rounded-xl shadow">
                {children}
            </div>
        </div>
    )
}

export default Card

