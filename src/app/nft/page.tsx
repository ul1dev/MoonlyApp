import StartBackground from '@/app/common/hocs/stars-bg';
import Footer from '../footer';

export default function Nft() {
    return (
        <StartBackground>
            <div className="h-full">
                <div className="flex flex-col gap-3 justify-center h-full w-full text-center -mt-40 max-[380px]:px-6 max-[440px]:px-8 max-[580px]:px-10 px-20">
                    <h3 className="text-white max-[440px]:text-2xl text-3xl">
                        Soon...
                    </h3>
                    <p className="max-[440px]:text-base text-lg text-gray-400">
                        This section will be a game resulting in your own unique
                        nft, which you can then sell on our domestic or foreign
                        markets, or build up your collection.
                    </p>
                </div>

                <Footer />
            </div>
        </StartBackground>
    );
}
