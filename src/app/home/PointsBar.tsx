export default function PointsBar() {
    return (
        <div className="flex justify-center max-[340px]:gap-1 max-[400px]:gap-4 max-[440px]:gap-6 max-[540px]:gap-8 max-[680px]:gap-12 gap-16 max-[500px]:py-8 py-12">
            <div className="flex items-center justify-center relative max-[440px]:min-w-24 max-[440px]:min-h-16 max-[500px]:min-w-28 max-[500px]:min-h-20 max-[680px]:min-w-32 max-[680px]:min-h-[85px] min-w-40 min-h-24">
                <div className=" bg-[#4e4e4e]/25 rounded-2xl max-[400px]:border max-[400px]:border-[#777777] max-[400px]:shadow-none max-[440px]:shadow-[0px_0px_20px_0px_rgba(119,119,119,1.00)] shadow-[0px_0px_30px_0px_rgba(119,119,119,1.00)] max-[400px]:blur-[1px] blur-[2px] absolute top-0 left-0 w-full h-full"></div>
                <div className="max-[680px]:px-6 max-[680px]:py-3 px-12 py-5 text-center relative z-[100] mb-1">
                    <div className="text-white max-[680px]:text-2xl text-4xl font-black">
                        10
                    </div>
                    <div className="text-[#b1b1b1] max-[440px]:text-xs max-[680px]:text-sm text-base font-semibold">
                        Boosts
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center relative max-[440px]:min-w-24 max-[440px]:min-h-16 max-[500px]:min-w-28 max-[500px]:min-h-20 max-[680px]:min-w-32 max-[680px]:min-h-[85px] min-w-40 min-h-24">
                <div className=" bg-[#4e4e4e]/25 rounded-2xl max-[400px]:border max-[400px]:border-[#7E69AB] max-[400px]:shadow-none max-[440px]:shadow-[0px_0px_20px_0px_rgba(126,105,171,1.00)] shadow-[0px_0px_30px_0px_rgba(126,105,171,1.00)] max-[400px]:blur-[1px] blur-[2px] absolute top-0 left-0 w-full h-full"></div>
                <div className="max-[680px]:px-6 max-[680px]:py-3 px-12 py-5 text-center relative z-[100] mb-1">
                    <div className="text-white max-[680px]:text-2xl text-4xl font-black">
                        112
                    </div>
                    <div className="text-[#b1b1b1] max-[440px]:text-xs max-[680px]:text-sm text-base font-semibold">
                        Level
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center relative max-[440px]:min-w-24 max-[440px]:min-h-16 max-[500px]:min-w-28 max-[500px]:min-h-20 max-[680px]:min-w-32 max-[680px]:min-h-[85px] min-w-40 min-h-24">
                <div className=" bg-[#4e4e4e]/25 rounded-2xl max-[400px]:border max-[400px]:border-[#777777] max-[400px]:shadow-none max-[440px]:shadow-[0px_0px_20px_0px_rgba(119,119,119,1.00)] shadow-[0px_0px_30px_0px_rgba(119,119,119,1.00)] max-[400px]:blur-[1px] blur-[2px] absolute top-0 left-0 w-full h-full"></div>
                <div className="max-[680px]:px-6 max-[680px]:py-3 px-12 py-5 text-center relative z-[100] mb-1">
                    <div className="text-white max-[680px]:text-2xl text-4xl font-black">
                        13k
                    </div>
                    <div className="text-[#b1b1b1] max-[440px]:text-xs max-[680px]:text-sm text-base font-semibold">
                        Points
                    </div>
                </div>
            </div>
        </div>
    );
}
