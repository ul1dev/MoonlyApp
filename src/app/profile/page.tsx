import Footer from '../footer';
import UserInfo from './UserInfo';
import UserBalance from './Balance';
import UserShare from './UserShare';
import TgStarSystem from '../common/share/icons/TgStarSystem';
import TranslateBtn from './Translate';

export default function Profile() {
    return (
        <div className="pb-24">
            <TranslateBtn />
            <UserInfo />
            <UserBalance />
            <UserShare />
            <Footer />
            <TgStarSystem />
        </div>
    );
}
