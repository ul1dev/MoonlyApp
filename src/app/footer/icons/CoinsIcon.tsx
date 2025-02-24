export default function CoinsIcon({
    width = 50,
    height = 50,
    color = '#313131',
    strokeColor = '#4E4E4E',
    strokeWidth = 5,
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="31.5"
                cy="17.5"
                r="15"
                fill={color}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
            />
            <circle
                cx="17.5"
                cy="32.5"
                r="15"
                fill={color}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
            />
        </svg>
    );
}
