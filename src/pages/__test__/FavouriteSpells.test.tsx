import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { FavouriteSpells } from "../FavouriteSpells";

afterEach(cleanup);

it("renders spell not found page", async () => {
    render(
        <Provider store={store}>
            <FavouriteSpells />
        </Provider>
    );

    const element = await screen.findByTestId("spell-not-found");

    expect(element).toBeInTheDocument();
});
