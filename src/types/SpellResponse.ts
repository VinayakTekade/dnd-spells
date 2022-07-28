import { SpellState } from "./SpellState";

export type SpellResponse = {
    count?: number;
    results: SpellState[];
    totalPages: number;
};
