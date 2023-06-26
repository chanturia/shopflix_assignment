import {FC} from "react";

interface CalendarIconProps {
    className?: string;
}

export const TruckIcon: FC<CalendarIconProps> = (props) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
             stroke="black" {...props}>
            <path
                d="M14 7.19336H16.3373C16.5818 7.19336 16.7041 7.19336 16.8192 7.22099C16.9213 7.24549 17.0188 7.28589 17.1083 7.34072C17.2092 7.40256 17.2957 7.48904 17.4686 7.66199L21.5314 11.7247C21.7043 11.8977 21.7908 11.9842 21.8526 12.0851C21.9075 12.1745 21.9479 12.2721 21.9724 12.3741C22 12.4892 22 12.6115 22 12.8561V15.6934C22 16.1593 22 16.3923 21.9239 16.576C21.8224 16.8211 21.6277 17.0157 21.3827 17.1172C21.1989 17.1934 20.9659 17.1934 20.5 17.1934M15.5 17.1934H14M14 17.1934V7.39336C14 6.27325 14 5.7132 13.782 5.28538C13.5903 4.90905 13.2843 4.60309 12.908 4.41135C12.4802 4.19336 11.9201 4.19336 10.8 4.19336H5.2C4.0799 4.19336 3.51984 4.19336 3.09202 4.41135C2.71569 4.60309 2.40973 4.90905 2.21799 5.28538C2 5.7132 2 6.27325 2 7.39336V15.1934C2 16.2979 2.89543 17.1934 4 17.1934M14 17.1934H10M10 17.1934C10 18.8502 8.65685 20.1934 7 20.1934C5.34315 20.1934 4 18.8502 4 17.1934M10 17.1934C10 15.5365 8.65685 14.1934 7 14.1934C5.34315 14.1934 4 15.5365 4 17.1934M20.5 17.6934C20.5 19.0741 19.3807 20.1934 18 20.1934C16.6193 20.1934 15.5 19.0741 15.5 17.6934C15.5 16.3126 16.6193 15.1934 18 15.1934C19.3807 15.1934 20.5 16.3126 20.5 17.6934Z"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export default TruckIcon