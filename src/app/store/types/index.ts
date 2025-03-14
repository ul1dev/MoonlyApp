export interface UserType {
    id: string;
    telegramId: string;
    firstName?: string;
    lastName?: string | null;
    userName?: string | null;
    totalTapsCount: string;
    pointsBalance: string;
    coinsBalance: string;
    boostsBalance: number;
    level: number;
    energy: number;
    maxEnergy: number;
    invitedUsersCount: number;
}

export interface UserStateType {
    data: UserType;
    loading: boolean;
    isLoaded: boolean;
    isNewLevel: boolean;
    afkPointsCount: number;
}

export interface TelegramStateType {
    isTmaMounted: boolean;
}
