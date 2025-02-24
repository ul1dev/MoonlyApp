export default function ProfileIcon({
    width = 44,
    height = 44,
    color = '#4E4E4E',
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M38.7952 35.9531C41.0385 33.2533 42.5986 30.0529 43.3436 26.6227C44.0886 23.1925 43.9965 19.6333 43.0751 16.2462C42.1537 12.859 40.4302 9.74365 38.0502 7.16348C35.6703 4.58331 32.7039 2.61426 29.4021 1.42288C26.1003 0.231495 22.5601 -0.147169 19.081 0.31891C15.6019 0.784989 12.2862 2.0821 9.41433 4.10053C6.5425 6.11897 4.19902 8.79935 2.5821 11.915C0.96518 15.0306 0.122387 18.4898 0.125006 22C0.12623 27.1034 1.92471 32.0434 5.20485 35.9531L5.1736 35.979C5.28297 36.1111 5.40797 36.2239 5.52079 36.3528C5.66141 36.5146 5.81204 36.6653 5.95829 36.8228C6.39579 37.2967 6.84485 37.7528 7.31766 38.1821C7.46063 38.312 7.60891 38.434 7.75516 38.5598C8.25516 38.9909 8.76829 39.3992 9.30204 39.7806C9.37094 39.8293 9.43204 39.8889 9.50141 39.9378V39.9179C13.161 42.4932 17.5266 43.8753 22.0014 43.8753C26.4762 43.8753 30.8419 42.4932 34.5014 39.9179V39.9375C34.5708 39.8886 34.6319 39.829 34.7008 39.7803C35.2339 39.3989 35.7477 38.9906 36.2477 38.5595C36.3939 38.4345 36.5422 38.3117 36.6852 38.1818C37.1578 37.7523 37.607 37.2962 38.0445 36.8225C38.1903 36.6653 38.3405 36.5143 38.482 36.3525C38.5944 36.2236 38.7198 36.1107 38.8292 35.9787L38.7952 35.9531ZM22 9.49996C23.3907 9.49996 24.7501 9.91234 25.9064 10.6849C27.0626 11.4575 27.9639 12.5557 28.496 13.8405C29.0282 15.1253 29.1675 16.539 28.8962 17.9029C28.6249 19.2669 27.9552 20.5197 26.9718 21.5031C25.9885 22.4864 24.7357 23.1561 23.3717 23.4274C22.0078 23.6987 20.5941 23.5594 19.3093 23.0272C18.0245 22.4951 16.9263 21.5938 16.1537 20.4376C15.3811 19.2813 14.9688 17.9219 14.9688 16.5312C14.9688 14.6664 15.7095 12.878 17.0282 11.5594C18.3468 10.2408 20.1352 9.49996 22 9.49996ZM9.5111 35.9531C9.53808 33.9015 10.3718 31.943 11.8318 30.5013C13.2918 29.0597 15.2607 28.2509 17.3125 28.25H26.6875C28.7393 28.251 30.7082 29.0598 32.1682 30.5014C33.6282 31.943 34.4619 33.9015 34.4889 35.9531C31.0621 39.041 26.6128 40.7499 22 40.7499C17.3872 40.7499 12.9379 39.041 9.5111 35.9531Z"
                fill={color}
            />
        </svg>
    );
}
