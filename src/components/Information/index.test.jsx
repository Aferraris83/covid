
import "@testing-library/jest-dom";
import {QueryClient, QueryClientProvider } from "react-query"

import { screen, render } from "@testing-library/react";

import { useHistory } from "../../hooks/useHistory";
import { useVaccines } from "../../hooks/useVaccines";
import Information from ".";
import { mockHistory, mockVaccines } from "./utils";

jest.mock("../../hooks/useHistory");
jest.mock("../../hooks/useVaccines");

const queryClient = new QueryClient()

describe("<Information />", () => {
  it("render data", () => {
    useHistory.mockReturnValue({
      loading: false,
      data: {
        result: mockHistory
      }
    });
    useVaccines.mockReturnValue({
      loading: false,
      data: {
        result: mockVaccines
      }
    })
    render(
      <QueryClientProvider client={queryClient}>
        <Information country="Argentina" recovered={10} confirmed={20} population={30} />
      </QueryClientProvider>
    )

    const div = screen.queryByRole('information');
    expect(div).toBeInTheDocument()
  })
  
  it("render spinner", () => {
    useHistory.mockReturnValue({
      isLoading: true,
    });
    useVaccines.mockReturnValue({
      isLoading: true,
    })
    render(
      <QueryClientProvider client={queryClient}>
        <Information country="Argentina" recovered={10} confirmed={20} population={30} />
      </QueryClientProvider>
    )

    const div = screen.queryByRole('information');
    expect(div).not.toBeInTheDocument()
  })
})
