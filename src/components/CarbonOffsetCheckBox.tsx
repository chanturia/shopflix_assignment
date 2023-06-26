import {useState} from "react";
import InfoCircleIcon from "@/SVG/InfoCircleIcon";
import LeafIcon from "@/SVG/LeafIcon";
import CheckIcon from "@/SVG/CheckIcon";

export const CarbonOffsetCheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div
            className={`w-full px-2.5 py-[11.50px] bg-neutral-50 gradient-green ${isChecked && "gradient-green-active"} rounded-lg border border border border border-zinc-300 justify-between items-center gap-2 inline-flex`}>
            <div className="justify-start items-center gap-0.5 flex">
                <div className="justify-start items-center gap-1 flex">
                    <div className="flex justify-center align-middle relative">
                        <LeafIcon className="w-[18px] h-[18px]"/>
                    </div>
                    <span
                        className="text-neutral-700 text-[14px] font-bold leading-none">Αντιστάθμισετιςεκπομπές CO₂</span>
                </div>
                <div className="flex justify-center align-middle relative">
                    <InfoCircleIcon className={"w-[18px] h-[18px]"}/>
                </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
                <span
                    className="text-center text-lime-900 text-[14px] font-bold leading-none ">+ €2,30</span>
                <label htmlFor="checkbox"
                       className={`cursor-pointer w-5 h-5 p-2.5 rounded border border border border ${isChecked ? 'bg-lime-700' : 'border-stone-300'}  flex-col justify-center items-center gap-2.5 inline-flex`}>
                    <div className="flex justify-center align-middle relative">
                        {isChecked && <CheckIcon className="w-5 h-5"/>}
                        <input type="checkbox" id="checkbox" name="checkbox" className="w-0 h-0" checked={isChecked}
                               onChange={() => {
                                   setIsChecked((prevVal => !prevVal))
                               }}/>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default CarbonOffsetCheckBox