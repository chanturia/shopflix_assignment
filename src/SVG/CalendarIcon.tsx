import {FC} from "react";

interface CalendarIconProps {
    className?: string;
}

export const CalendarIcon: FC<CalendarIconProps> = (props) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
             stroke="black" {...props}>
            <path
                d="M21 10.1934H3M16 2.19336V6.19336M8 2.19336V6.19336M7.8 22.1934H16.2C17.8802 22.1934 18.7202 22.1934 19.362 21.8664C19.9265 21.5788 20.3854 21.1198 20.673 20.5553C21 19.9136 21 19.0735 21 17.3934V8.99336C21 7.3132 21 6.47312 20.673 5.83139C20.3854 5.2669 19.9265 4.80796 19.362 4.52034C18.7202 4.19336 17.8802 4.19336 16.2 4.19336H7.8C6.11984 4.19336 5.27976 4.19336 4.63803 4.52034C4.07354 4.80796 3.6146 5.2669 3.32698 5.83139C3 6.47312 3 7.3132 3 8.99336V17.3934C3 19.0735 3 19.9136 3.32698 20.5553C3.6146 21.1198 4.07354 21.5788 4.63803 21.8664C5.27976 22.1934 6.11984 22.1934 7.8 22.1934Z"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default CalendarIcon