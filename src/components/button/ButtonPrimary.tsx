
export const ButtonPrimary = ({children, text}: ButtonComponentT) => {
    return (
        <div
            className="cursor-pointer grow shrink basis-0 h-[43px] pl-5 pr-[30px] pt-2.5 pb-[9px] bg-blue-800 hover:bg-blue-950 rounded-lg justify-center items-center gap-3 flex">
            {children &&
                <div className="flex justify-center align-middle relative">
                    {children}
                </div>
            }
            <span className="text-white text-[16px] font-bold leading-tight">{text}</span>
        </div>
    )
}

export default ButtonPrimary