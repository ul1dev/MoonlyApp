import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ClicksState {
    count: number;
    pendingCount: number;
}

const initialState: ClicksState = {
    count: 0,
    pendingCount: 0,
};

const clicksSlice = createSlice({
    name: 'clicks',
    initialState,
    reducers: {
        increment(state) {
            state.count += 1;
        },
        markAsSending(state, action: PayloadAction<number>) {
            state.pendingCount = action.payload;
            state.count -= action.payload;
        },
        sendingFailed(state) {
            state.count += state.pendingCount;
            state.pendingCount = 0;
        },
    },
});

export const { increment, markAsSending, sendingFailed } = clicksSlice.actions;
export const selectClicksCount = (state: { clicks: ClicksState }) =>
    state.clicks.count + state.clicks.pendingCount;
export default clicksSlice.reducer;
