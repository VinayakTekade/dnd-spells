import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { SpellInfo } from "../SpellInfo";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

it("renders loading spell detail page", async () => {
    render(
        <Provider store={store}>
            <Router>
                <SpellInfo />
            </Router>
        </Provider>
    );

    const loading = await screen.findByTestId("loading");
    expect(loading).toBeInTheDocument();
});

it("should render spell not found data", async () => {
    render(
        <Provider store={store}>
            <Router>
                <SpellInfo />
            </Router>
        </Provider>
    );

    const spellDetail = await screen.findByTestId("spell-detail-not-found");

    expect(spellDetail).toBeInTheDocument();
});
