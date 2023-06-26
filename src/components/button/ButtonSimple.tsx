import {ReactNode} from "react";

interface ButtonPrimaryT {
    children: ReactNode
    text: string
}

export const ButtonSimple = ({children, text}: ButtonPrimaryT) => {
    return (
        <div className="group cursor-pointer justify-start items-center gap-[5px] flex">
            {children &&
                <div className="flex justify-center align-middle relative fill-amber-700">
                    {children}
                </div>
            }
            <span className="text-stone-500 group-hover:text-blue-800 text-[14px] font-bold leading-none">{text}</span>
        </div>
    )
}

export default ButtonSimple