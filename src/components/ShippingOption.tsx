import InfoCircleIcon from "@/SVG/InfoCircleIcon";
import LocationPinIcon from "@/SVG/LocationPinIcon";
import TruckIcon from "@/SVG/TruckIcon";
import CalendarIcon from "@/SVG/CalendarIcon";

export const ShippingOption = () => {
    return (
        <div
            className="w-full h-32 px-3.5 pt-[13px] pb-3.5 bg-gray-50 rounded-lg border border border border flex-col justify-start items-start gap-3 flex">
            <div className="w-full justify-between items-center gap-2.5 inline-flex">
                <div className="text-zinc-800 text-[14px] font-bold leading-none">Παράδοση</div>
                <div className="justify-start items-center gap-0.5 flex cursor-pointer">
                    <div className="flex justify-center align-middle relative">
                        <LocationPinIcon className={"w-[18px] h-[18px]"}/>
                    </div>
                    <div className="text-blue-800 text-[14px] font-bold leading-none">11527, Άγιος
                        Παντελεήμονας
                    </div>
                </div>
            </div>
            <div className="w-full h-[72px] flex-col justify-center items-start gap-1.5 flex">
                <div className="h-5 justify-start items-center gap-2 inline-flex">
                    <div className="flex gap-2.5 items-center justify-center w-4">
                        <div className="bg-availability-now-color c h-2.5 w-2.5 rounded-full"></div>
                    </div>
                    <div className="text-stone-500 text-[14px] font-normal leading-tight">Άμεση
                        διαθεσιμότητα
                    </div>
                </div>
                <div className="h-5 justify-start items-center gap-2 inline-flex">
                    <div className="flex justify-center align-middle relative">
                        <CalendarIcon className={"w-4 h-4"}/>
                    </div>
                    <div className="text-stone-500 text-[14px] font-normal leading-tight">Εκτιμώμενη
                        παράδοση: 23/04/2023
                    </div>
                    <div className="flex justify-center align-middle relative">
                        <InfoCircleIcon className={"w-[18px] h-[18px]"}/>
                    </div>
                </div>
                <div className="h-5 justify-start items-center gap-2 inline-flex">
                    <div className="flex justify-center align-middle relative">
                        <TruckIcon className={"w-4 h-4"}/>
                    </div>
                    <div className="text-stone-500 text-[14px] font-normal leading-tight">Κόστος
                        μεταφορικών: €0,99
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShippingOption