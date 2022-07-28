import reducer, {
    addToFavourite,
    initialState,
    removeFromfavourite,
} from "../spellSlice";
import { store } from "../../../store/store";
import { SpellState } from "../../../types/SpellState";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Return initial state to be undefined", () => {
    expect(
        reducer(undefined, {
            type: undefined,
        })
    ).toEqual(initialState);
});

describe("Test Favourites", () => {
    beforeAll(() => {});

    it("Should be able to create a new spell to favourites", async () => {
        // Saving previous state
        const spell: SpellState = {
            index: "acid-arrow",
            name: "Acid Arrow",
            url: "/spells/acid-arrow",
        };

        addToFavourite(spell);

        //   Dispatching the action

        const result = await store.dispatch(addToFavourite(spell));
        const user = result.payload;
        expect(user).toEqual(spell);

        const state = store.getState().favouriteSpell;
        expect(state.value).toEqual([spell]);
    });

    it("Should be able to remove a spell from favourites", async () => {
        // Saving previous state
        const spell: SpellState = {
            index: "acid-arrow",
            name: "Acid Arrow",
            url: "/spells/acid-arrow",
        };

        //   Dispatching the action

        removeFromfavourite(spell);
        await store.dispatch(removeFromfavourite(spell));

        const state = store.getState().favouriteSpell;
        expect(state.value).toEqual([]);
    });
});
