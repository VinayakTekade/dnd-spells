import { SpellState } from "../../types/SpellState";
import { paginate } from "../paginate";

test("the data can be fetched successfully", () => {
    const spell: SpellState = {
        index: "acid-arrow",
        name: "Acid Arrow",
        url: "/spells/acid-arrow",
    };

    let spellArray: SpellState[] = [];

    spellArray.push(spell);

    expect(paginate(spellArray, 1, 1)).toStrictEqual(spellArray);
});
