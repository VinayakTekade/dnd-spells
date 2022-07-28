import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { AllSpells } from "../AllSpells";

afterEach(cleanup);

it("renders loading spell page", async () => {
    render(
        <Provider store={store}>
            <AllSpells />
        </Provider>
    );

    const loading = await screen.findByTestId("loading");
    expect(loading).toBeInTheDocument();
});
