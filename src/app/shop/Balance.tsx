import ShopBalanceCoins from './BalanceCoins';

export default function ShopBalance() {
    return (
        <div className="flex items-center max-[680px]:gap-3 gap-6 max-[380px]:text-base max-[440px]:text-[18px] max-[680px]:text-[20px] text-[22px] mt-1">
            <ShopBalanceCoins />
        </div>
    );
}
