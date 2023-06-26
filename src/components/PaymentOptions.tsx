import Image from 'next/image'
import InfoCircleIcon from "@/SVG/InfoCircleIcon";


export const PaymentOptions = () => {
    return (
        <div className="w-full flex-col justify-start items-start gap-2 flex">
            <div
                className="w-full p-2 odd:bg-payment-option-list-odd even:bg-payment-option-list-even rounded-lg justify-between items-center gap-1 inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                    <div
                        className="flex items-center justify-center rounded w-[46px] h-[22px] relative bg-white">
                        <Image alt="card Icons" src="/masterVisa.svg" fill={true} className={"p-0.5"}></Image>
                    </div>
                    <div className="text-center text-slate-700 text-[13px]"><span
                        className="font-normal leading-tight">από </span><span
                        className="font-bold leading-tight">€12,42</span><span
                        className="font-normal leading-tight"> / μήνα σε </span><span
                        className="font-bold leading-tight">12 άτοκες δόσεις</span>
                    </div>
                </div>
                <div className="flex justify-center align-middle relative opacity-40">
                    <InfoCircleIcon className={"w-[18px] h-[18px]"}/>
                </div>
            </div>
            <div
                className="w-full p-2 odd:bg-payment-option-list-odd even:bg-payment-option-list-even rounded-lg justify-between items-center gap-1 inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                    <div
                        className="flex items-center justify-center rounded w-[46px] h-[22px] relative bg-white">
                        <Image alt="card Icons" src="/pay4.svg" fill={true} className={"p-0.5"}></Image>
                    </div>
                    <div className="text-center text-slate-700 text-[13px]"><span
                        className="font-normal leading-tight">από </span><span
                        className="font-bold leading-tight">€4</span><span
                        className="font-normal leading-tight"> / μήνα σε </span><span
                        className="font-bold leading-tight">4 πληρωμές</span>
                    </div>
                </div>
                <div className="flex justify-center align-middle relative opacity-40">
                    <InfoCircleIcon className={"w-[18px] h-[18px]"}/>
                </div>
            </div>
        </div>
    )
}

export default PaymentOptions