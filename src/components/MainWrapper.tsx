import {ReactNode} from "react";

interface MainWrapperT {
    children: ReactNode
}

export const MainWrapper = ({children}: MainWrapperT) => {
    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className="w-[460px] h-[596px] flex-col justify-start items-center gap-5 inline-flex">
                {children}
            </div>
        </div>
    )
}

export default MainWrapper