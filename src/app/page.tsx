import StartBackground from '@/app/common/hocs/stars-bg';
import Footer from './footer';
import PointsBar from './home/PointsBar';
import ScoreBar from './home/ScoreBar';
import ClickPad from './home/ClickPad';

export default function Home() {
    return (
        <StartBackground>
            <div>
                <PointsBar />
                <ScoreBar />
                <ClickPad />
                <Footer />
            </div>
        </StartBackground>
    );
}
