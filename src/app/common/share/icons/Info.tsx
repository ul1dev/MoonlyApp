export default function InfoIcon({
    width = 35,
    height = 35,
    strokeWidth = 3.5,
    color = '#A0A0A0',
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.5 37C29.165 37 37 29.165 37 19.5C37 9.83502 29.165 2 19.5 2C9.83502 2 2 9.83502 2 19.5C2 29.165 9.83502 37 19.5 37Z"
                stroke={color}
                strokeWidth={strokeWidth}
            />
            <path
                d="M18.6253 10.75H19.5003"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
            <path
                d="M15.9997 17.7499H19.4997V26.4999"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.9997 26.4999H22.9997"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
