import { Header } from "../Header";
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

it("Renders Header", async () => {
    render(
        <Router>
            <Header />
        </Router>
    );

    const component = await screen.findByTestId("header");
    expect(component).toBeInTheDocument();
});
