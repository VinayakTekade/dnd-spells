import { Navigation } from "../Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

it("Renders Navigation", async () => {
    render(
        <Router>
            <Navigation />
        </Router>
    );

    const component = await screen.findByTestId("navigation");
    expect(component).toBeInTheDocument();
});
