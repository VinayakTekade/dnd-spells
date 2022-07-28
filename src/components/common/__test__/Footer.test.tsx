import { Footer } from "../Footer";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

it("Renders Footer", async () => {
    render(<Footer />);

    const component = await screen.findByTestId("footer");
    expect(component).toBeInTheDocument();
});
