import StartBackground from '@/app/common/hocs/stars-bg';
import Footer from '../footer';
import UserInfo from './UserInfo';
import UserBalance from './Balance';
import UserShare from './UserShare';

export default function Home() {
    return (
        <StartBackground>
            <div>
                <UserInfo />
                <UserBalance />
                <UserShare />
                <Footer />
            </div>
        </StartBackground>
    );
}
