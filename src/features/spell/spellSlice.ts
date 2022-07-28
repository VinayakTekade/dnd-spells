import { createSlice } from "@reduxjs/toolkit";
import { SpellState } from "../../types/SpellState";

export const initialState = {
    value: [],
    status: "idle",
};

type SliceState = {
    value: SpellState[];
    status: string;
};

type SliceAction = {
    payload: SpellState;
    type: string;
};

// Vinayak: contains logic for reducers in
// Adds / Removes spells in favourite spell list
export const favouriteSpellSlice = createSlice({
    name: "favouriteSpell",
    initialState,
    reducers: {
        addToFavourite: (state: SliceState, action: SliceAction) => {
            state.value.push(action.payload);
        },
        removeFromfavourite: (state, action) => {
            let index = state.value.findIndex(
                (item: { index: number }) => item.index === action.payload
            );
            state.value.splice(index, 1);
        },
    },
});

export const { addToFavourite, removeFromfavourite } =
    favouriteSpellSlice.actions;

export const selectFavourites = (state: { favouriteSpell: { value: any } }) => {
    return state.favouriteSpell.value;
};

export default favouriteSpellSlice.reducer;
