import { SpellInfoDetail } from "../SpellInfoDetail";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

it("renders spell details", async () => {
    render(<SpellInfoDetail heading="Level" detail="2" />);

    const component = await screen.findByTestId("spellInfoDetail");
    expect(component).toBeInTheDocument();
});
