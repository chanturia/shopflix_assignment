import {FC} from "react";

interface CalendarIconProps {
    className?: string;
}

export const StarIcon: FC<CalendarIconProps> = (props) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" {...props}>
            <g id="star">
                <path id="Icon"
                      d="M11.2827 3.64668C11.5131 3.17974 11.6284 2.94627 11.7848 2.87167C11.9209 2.80677 12.0791 2.80677 12.2152 2.87167C12.3717 2.94627 12.4869 3.17974 12.7174 3.64668L14.9041 8.07664C14.9721 8.21449 15.0061 8.28342 15.0558 8.33693C15.0999 8.38432 15.1527 8.42271 15.2113 8.44998C15.2776 8.48078 15.3536 8.4919 15.5057 8.51413L20.397 9.22906C20.9121 9.30435 21.1696 9.34199 21.2888 9.4678C21.3925 9.57725 21.4412 9.72766 21.4215 9.87713C21.3988 10.0489 21.2124 10.2305 20.8395 10.5937L17.3014 14.0398C17.1912 14.1472 17.136 14.2009 17.1004 14.2648C17.0689 14.3214 17.0487 14.3836 17.0409 14.4479C17.0321 14.5205 17.0451 14.5964 17.0711 14.7481L17.906 19.6155C17.994 20.1288 18.038 20.3855 17.9553 20.5379C17.8833 20.6704 17.7554 20.7633 17.6071 20.7908C17.4366 20.8224 17.2061 20.7012 16.7451 20.4588L12.3724 18.1592C12.2361 18.0875 12.168 18.0517 12.0962 18.0376C12.0327 18.0252 11.9673 18.0252 11.9038 18.0376C11.832 18.0517 11.7639 18.0875 11.6277 18.1592L7.25492 20.4588C6.79392 20.7012 6.56341 20.8224 6.39297 20.7908C6.24468 20.7633 6.11672 20.6704 6.04474 20.5379C5.962 20.3855 6.00603 20.1288 6.09407 19.6155L6.92889 14.7481C6.95491 14.5964 6.96793 14.5205 6.95912 14.4479C6.95132 14.3836 6.93111 14.3214 6.89961 14.2648C6.86402 14.2009 6.80888 14.1472 6.69859 14.0398L3.16056 10.5937C2.78766 10.2305 2.60121 10.0489 2.57853 9.87713C2.55879 9.72766 2.60755 9.57725 2.71125 9.4678C2.83044 9.34199 3.08797 9.30435 3.60304 9.22906L8.49431 8.51413C8.64642 8.4919 8.72248 8.48078 8.78872 8.44998C8.84736 8.42271 8.90016 8.38432 8.94419 8.33693C8.99391 8.28342 9.02793 8.21449 9.09597 8.07664L11.2827 3.64668Z"
                       strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>


    )
}

export default StarIcon