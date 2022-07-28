import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { SpellListItem } from "../SpellListItem";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders spell list item", () => {
    const spell = {
        index: "acid-arrow",
        name: "Acid Arrow",
    };
    render(
        <Provider store={store}>
            <Router>
                <SpellListItem
                    key={spell.index}
                    spell={spell}
                    isFavourite={false}
                />
            </Router>
        </Provider>
    );

    expect(screen.getByText(/Acid Arrow/i)).toBeInTheDocument();
});

it("maches snapshot", () => {
    const spell = {
        index: "acid-arrow",
        name: "Acid Arrow",
    };

    const tree = renderer
        .create(
            <Provider store={store}>
                <Router>
                    <SpellListItem
                        key={spell.index}
                        spell={spell}
                        isFavourite={false}
                    />
                </Router>
            </Provider>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
