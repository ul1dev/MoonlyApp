import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserStateType, UserType } from '../types';

const userAdapter = createEntityAdapter();

const initialState: UserStateType = {
    data: {
        id: '',
        telegramId: '',
        firstName: 'Loading...',
        lastName: null,
        userName: 'Loading...',
        totalTapsCount: '0',
        pointsBalance: '0',
        coinsBalance: '0',
        boostsBalance: 0,
        level: 1,
        invitedUsersCount: 0,
    },
    loading: true,
    isLoaded: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserType>) => {
            state.data = action.payload;
            state.isLoaded = true;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setBoostsBalance: (state, action: PayloadAction<number>) => {
            state.data.boostsBalance = action.payload;
        },
        setCoinsBalance: (state, action: PayloadAction<string>) => {
            state.data.coinsBalance = action.payload;
        },
        setPointsBalance: (state, action: PayloadAction<string>) => {
            state.data.pointsBalance = action.payload;
        },
    },
});

export const {
    setUserData,
    setLoading,
    setBoostsBalance,
    setCoinsBalance,
    setPointsBalance,
} = userSlice.actions;

export const { selectAll } = userAdapter.getSelectors(
    (state: any) => state.user
);

export default userSlice.reducer;
