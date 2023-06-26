import {FC} from "react";

export const LocationPinIcon: FC<SvgIconPropsT> = (props) => {
    return (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5562F3" {...props}>
            <g id="location-pin">
                <g id="Icon">
                    <path
                        d="M8 9.10808C9.10457 9.10808 10 8.21265 10 7.10808C10 6.00351 9.10457 5.10808 8 5.10808C6.89543 5.10808 6 6.00351 6 7.10808C6 8.21265 6.89543 9.10808 8 9.10808Z"
                         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M8 15.1081C10.6667 12.4414 13.3333 10.0536 13.3333 7.10808C13.3333 4.16256 10.9455 1.77474 8 1.77474C5.05448 1.77474 2.66666 4.16256 2.66666 7.10808C2.66666 10.0536 5.33333 12.4414 8 15.1081Z"
                         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </g>
        </svg>

    )
}

export default LocationPinIcon