import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import renderer from "react-test-renderer";

it("Matches App snapshot", () => {
    const tree = renderer
        .create(
            <Provider store={store}>
                <App />
            </Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
