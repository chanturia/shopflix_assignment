import {FC} from "react";

interface CalendarIconProps {
    className?: string;
}

export const LeafIcon: FC<CalendarIconProps> = (props) => {
    return (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g id="leaf">
                <path id="Vector"
                      d="M15.7481 2.69141V4.19141C15.7481 11.412 11.7187 14.6914 6.74814 14.6914L5.3219 14.6913C5.48053 12.4321 6.18366 11.065 8.02003 9.44058C8.92303 8.64176 8.84698 8.18058 8.40178 8.44548C5.33908 10.2676 3.81796 12.7311 3.75049 16.6641L3.74814 16.9414H2.24814C2.24814 15.9194 2.33492 14.9912 2.50746 14.1426C2.33458 13.172 2.24814 11.8546 2.24814 10.1914C2.24814 6.04927 5.606 2.69141 9.7481 2.69141C11.2481 2.69141 12.7481 3.44141 15.7481 2.69141Z"
                      fill="#429135"/>
            </g>
        </svg>

    )
}

export default LeafIcon