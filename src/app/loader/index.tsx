export default function FullPageLoader() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div>
                <svg
                    className="spinner"
                    viewBox="0 0 50 50"
                    width={80}
                    height={80}
                >
                    <circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        className="circular"
                        stroke="white"
                        strokeWidth={8}
                    />
                </svg>
            </div>
        </div>
    );
}
