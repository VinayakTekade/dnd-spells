import { SpellState } from "../../types/SpellState";
import { getPaginatedFavouriteSpells } from "../favouriteSpellService";

test("the data can be fetched successfully", () => {
    const spell: SpellState = {
        index: "acid-arrow",
        name: "Acid Arrow",
        url: "/spells/acid-arrow",
    };

    let spellArray: SpellState[] = [];

    spellArray.push(spell);

    expect(getPaginatedFavouriteSpells(spellArray, 0)).toStrictEqual(
        new Promise((resolve) => {
            return;
        })
    );
});
