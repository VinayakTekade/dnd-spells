import getSpellDetails from "../spellDetailService";
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

const result = {
    attack_type: "ranged",
};

test("the data can be fetched successfully", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(result));
    return await getSpellDetails("acid-arrow").then((data) => {
        expect(data).toStrictEqual(result);
    });
});
