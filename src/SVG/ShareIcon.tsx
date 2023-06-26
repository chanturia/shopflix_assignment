import {FC} from "react";

interface CalendarIconProps {
    className?: string;
}

export const ShareIcon: FC<CalendarIconProps> = (props) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" {...props}>
            <g id="share">
                <path id="Icon"
                      d="M8.59 13.7034L15.42 17.6834M15.41 6.70336L8.59 10.6834M21 5.19336C21 6.85021 19.6569 8.19336 18 8.19336C16.3431 8.19336 15 6.85021 15 5.19336C15 3.53651 16.3431 2.19336 18 2.19336C19.6569 2.19336 21 3.53651 21 5.19336ZM9 12.1934C9 13.8502 7.65685 15.1934 6 15.1934C4.34315 15.1934 3 13.8502 3 12.1934C3 10.5365 4.34315 9.19336 6 9.19336C7.65685 9.19336 9 10.5365 9 12.1934ZM21 19.1934C21 20.8502 19.6569 22.1934 18 22.1934C16.3431 22.1934 15 20.8502 15 19.1934C15 17.5365 16.3431 16.1934 18 16.1934C19.6569 16.1934 21 17.5365 21 19.1934Z"
                       strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>

    )
}

export default ShareIcon