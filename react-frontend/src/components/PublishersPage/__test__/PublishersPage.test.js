import React from "react";
import { render, screen } from "@testing-library/react";

import PublishersPage from "../PublishersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders publishers page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PublishersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("publishers-datatable")).toBeInTheDocument();
    expect(screen.getByRole("publishers-add-button")).toBeInTheDocument();
});
