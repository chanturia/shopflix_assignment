import StarIHalfIcon from "@/SVG/StarIHalfIcon";
import StarIcon from "@/SVG/StarIcon";

export const CarbonOffsetCheckBox = () => {
    return (
        <div className="justify-start items-center gap-0.5 flex">
            <div className="justify-start items-start flex">
                <div className="flex justify-center align-middle relative">
                    <StarIcon className="w-[15px] h-[15px] stroke-star-rating fill-star-rating"/>
                </div>
                <div className="flex justify-center align-middle relative">
                    <StarIcon className="w-[15px] h-[15px] stroke-star-rating fill-star-rating"/>
                </div>
                <div className="flex justify-center align-middle relative">
                    <StarIcon className="w-[15px] h-[15px] stroke-star-rating fill-star-rating"/>
                </div>
                <div className="flex justify-center align-middle relative">
                    <StarIcon className="w-[15px] h-[15px] stroke-star-rating fill-star-rating"/>
                </div>
                <div className="flex justify-center align-middle relative">
                    <StarIHalfIcon className="w-[15px] h-[15px] stroke-star-rating fill-star-rating"/>
                </div>
            </div>
            <span className="text-stone-400 text-[14px] font-bold leading-none">4.84</span>
            <span className="text-stone-400 text-[14px] font-normal leading-tight">(58)</span>
        </div>
    )
}

export default CarbonOffsetCheckBox