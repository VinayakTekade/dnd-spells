import { PaginationB } from "../Pagination";

import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

const pageChangeHandler = (page = 1) => {
    return;
};

it("Renders Pagination", async () => {
    render(
        <PaginationB
            totalPages={10}
            page={1}
            onPageChange={pageChangeHandler}
        />
    );

    const component = await screen.findByTestId("pagination");
    expect(component).toBeInTheDocument();
});
