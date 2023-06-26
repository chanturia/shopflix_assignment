import {FC} from "react";

export const HeartIcon: FC<SvgIconPropsT> = (props) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}
             stroke="black">
            <path id="Icon" fillRule="evenodd" clipRule="evenodd"
                  d="M11.9932 5.32917C9.9938 2.99176 6.65975 2.363 4.15469 4.50337C1.64964 6.64374 1.29697 10.2223 3.2642 12.7538C4.89982 14.8585 9.84977 19.2975 11.4721 20.7342C11.6536 20.8949 11.7444 20.9753 11.8502 21.0069C11.9426 21.0344 12.0437 21.0344 12.1361 21.0069C12.2419 20.9753 12.3327 20.8949 12.5142 20.7342C14.1365 19.2975 19.0865 14.8585 20.7221 12.7538C22.6893 10.2223 22.3797 6.62123 19.8316 4.50337C17.2835 2.38552 13.9925 2.99176 11.9932 5.32917Z"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default HeartIcon