"use client"
import MainWrapper from "@/components/MainWrapper";
import Card from "@/components/card/Card";
import ProductPriceQuantity from "@/components/ProductPriceQuantity/ProductPriceQuantity";
import PaymentOptions from "@/components/PaymentOptions";
import ShippingOption from "@/components/ShippingOption";
import CarbonOffsetCheckBox from "@/components/CarbonOffsetCheckBox";
import ShoppingCartIcon from "@/SVG/ShoppingCartIcon";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import ButtonSimple from "@/components/button/ButtonSimple";
import HeartIcon from "@/SVG/HeartIcon";
import LibreIcon from "@/SVG/LibreIcon";
import ShareIcon from "@/SVG/ShareIcon";
import Rating from "@/components/Rating";

export default function Home() {
    return (
        <MainWrapper>
            <Card headingText={'Το SHOPFLIX προτείνει'}>
                <ProductPriceQuantity/>
                <PaymentOptions/>
                <ShippingOption/>
                <CarbonOffsetCheckBox/>
                <div className="w-[416px] justify-start items-start inline-flex">
                    <ButtonPrimary text="Προσθήκη στο καλάθι">
                        <ShoppingCartIcon className="w-6 h-6"/>
                    </ButtonPrimary>
                </div>
                <div
                    className="w-full px-3 py-2.5 bg-gray-50 rounded-lg border border border border justify-between items-start gap-2 inline-flex">
                    <div className="justify-start items-center gap-1 flex">
                        <span className="text-stone-500 text-[14px] font-normal leading-tight">Αγορά από</span>
                        <span
                            className="cursor-pointer text-blue-800 text-[14px] font-bold leading-none">OneThing</span>
                    </div>
                    <Rating/>
                </div>
                <div className="cursor-pointer text-blue-800 hover:text-blue-950 text-[14px] font-bold leading-none">Δες
                    άλλα 2 καταστήματα
                </div>
            </Card>
            <div className="justify-start items-end gap-[26px] inline-flex">
                <ButtonSimple text="Αγαπημένα">
                    <HeartIcon className="w-6 h-6 group-hover:stroke-blue-800 group-hover:fill-blue-800"/>
                </ButtonSimple>
                <ButtonSimple text="Σύγκρινέ το">
                    <LibreIcon className="w-6 h-6 group-hover:stroke-blue-800"/>
                </ButtonSimple>
                <ButtonSimple text="Μοιράσου το">
                    <ShareIcon className="w-6 h-6 group-hover:stroke-blue-800"/>
                </ButtonSimple>
            </div>
        </MainWrapper>
    )
}
