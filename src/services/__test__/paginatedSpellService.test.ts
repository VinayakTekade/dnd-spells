import getPagedSpells from "../paginatedSpellService";
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();
const response = {
    count: 319,
    results: [],
    totalPages: 16,
};

test("the data can be fetched successfully", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(response));
    return await getPagedSpells(5).then((data) => {
        expect(data).toStrictEqual(response);
    });
});
