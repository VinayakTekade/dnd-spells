import { SpellResponse } from "../types/SpellResponse";
import { paginate } from "./paginate";
import { memoize } from "lodash";

const PAGE_SIZE = 20;
const apiUrl = process.env.REACT_APP_APIURL;

// Vinayak: This function fetches the list of all spells from the API in the format supported by pagination.
// The input required is page number
async function getPagedSpells(page: number): Promise<SpellResponse> {
    try {
        // Vinayak: The spells are fetched from APIs taken from environment variables.
        const response = await fetch(`${apiUrl}spells`);
        const result = await response.json();
        return {
            count: result.count,
            totalPages: Math.ceil(result.count / PAGE_SIZE),
            results: paginate(result.results, PAGE_SIZE, page),
        };
    } catch (error: any) {
        //Vinayak: Error handling can be implemented here. For now the errors are logged in console.
        console.log(error.message);
        throw error;
    }
}

// Vinayak: Caching happens via lodash memoize
export default memoize(getPagedSpells);
