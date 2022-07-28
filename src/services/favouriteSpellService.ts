import { SpellState } from "../types/SpellState";
import { SpellResponse } from "../types/SpellResponse";
import { paginate } from "./paginate";
const PAGE_SIZE = 20;

// Vinayak: This function fetches the list of all the favourite spells in the format supported by pagination.
// The input required are the list spells and page number
export function getPaginatedFavouriteSpells(
    spells: SpellState[],
    page: number
): Promise<SpellResponse> {
    return new Promise((resolve, reject) => {
        var response = {
            totalPages: Math.ceil(spells.length / PAGE_SIZE),
            results: paginate(spells, PAGE_SIZE, page),
        };
        resolve(response);
        // Vinayak: When the promise fails status the rejection will be handled.
        var rejection = {
            totalPages: 1,
            results: paginate(spells, PAGE_SIZE, 1),
        };
        reject(rejection);
    });
}
