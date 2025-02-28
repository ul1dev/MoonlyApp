export default function ErrorIcon({
    width = 24,
    height = 24,
    color = '#FFFFFF',
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2ZM0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10ZM5.793 5.793C5.98053 5.60553 6.23484 5.50021 6.5 5.50021C6.76516 5.50021 7.01947 5.60553 7.207 5.793L10 8.586L12.793 5.793C12.8852 5.69749 12.9956 5.62131 13.1176 5.5689C13.2396 5.51649 13.3708 5.4889 13.5036 5.48775C13.6364 5.4866 13.7681 5.5119 13.891 5.56218C14.0139 5.61246 14.1255 5.68671 14.2194 5.7806C14.3133 5.8745 14.3875 5.98615 14.4378 6.10905C14.4881 6.23194 14.5134 6.36362 14.5123 6.4964C14.5111 6.62918 14.4835 6.7604 14.4311 6.8824C14.3787 7.00441 14.3025 7.11475 14.207 7.207L11.414 10L14.207 12.793C14.3892 12.9816 14.49 13.2342 14.4877 13.4964C14.4854 13.7586 14.3802 14.0094 14.1948 14.1948C14.0094 14.3802 13.7586 14.4854 13.4964 14.4877C13.2342 14.49 12.9816 14.3892 12.793 14.207L10 11.414L7.207 14.207C7.0184 14.3892 6.7658 14.49 6.5036 14.4877C6.2414 14.4854 5.99059 14.3802 5.80518 14.1948C5.61977 14.0094 5.5146 13.7586 5.51233 13.4964C5.51005 13.2342 5.61084 12.9816 5.793 12.793L8.586 10L5.793 7.207C5.60553 7.01947 5.50021 6.76516 5.50021 6.5C5.50021 6.23484 5.60553 5.98053 5.793 5.793Z"
                fill={color}
            />
        </svg>
    );
}
