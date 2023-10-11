import React from "react";
import { render, screen } from "@testing-library/react";

import AuthorsPage from "../AuthorsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders authors page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AuthorsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("authors-datatable")).toBeInTheDocument();
    expect(screen.getByRole("authors-add-button")).toBeInTheDocument();
});
