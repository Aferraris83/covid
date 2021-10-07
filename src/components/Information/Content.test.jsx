import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"

import Content from './Content'
import { mockHistory, mockVaccines, mockCase } from "./utils";

describe('render <Content />', ()=> {

  it('render cases', () => {
    render(
      <Content 
        confirmed={mockCase.confirmed} 
        recovered={mockCase.recovered}
        perInhabitant={mockCase.perInhabitant}
        dates={mockHistory.dates}
      />
    );
    const confirmed = screen.queryByRole('confirmed');
    const recovered = screen.queryByRole('recovered');
    const perInhabitant = screen.queryByRole('perInhabitant');
    const date = screen.queryByRole('date');

    expect(confirmed).toHaveTextContent(mockCase.confirmed);
    expect(recovered).toHaveTextContent(mockCase.recovered);
    expect(perInhabitant).toHaveTextContent(mockCase.perInhabitant);
    expect(date).toHaveTextContent('115323');
  });

  it('not rendered vaccines', () => {
    render(<Content />)

    const administered = screen.queryByRole('administered');
    const people_vaccinated = screen.queryByRole('people_vaccinated');
    const people_partially_vaccinated = screen.queryByRole('people_partially_vaccinated');
    const perPeopleVaccine = screen.queryByRole('perPeopleVaccine');

    expect(administered).not.toBeInTheDocument();
    expect(people_vaccinated).not.toBeInTheDocument();
    expect(people_partially_vaccinated).not.toBeInTheDocument();
    expect(perPeopleVaccine).not.toBeInTheDocument();
  })

  it('render vaccines', () => {
    render(<Content vaccines={mockVaccines}/>)

    const administered = screen.queryByRole('administered');
    const people_vaccinated = screen.queryByRole('people_vaccinated');
    const people_partially_vaccinated = screen.queryByRole('people_partially_vaccinated');
    const perPeopleVaccine = screen.queryByRole('perPeopleVaccine');

    expect(administered).toHaveTextContent(mockVaccines.administered);
    expect(people_vaccinated).toHaveTextContent(mockVaccines.people_vaccinated);
    expect(people_partially_vaccinated).toHaveTextContent(mockVaccines.people_partially_vaccinated);
    expect(perPeopleVaccine).toHaveTextContent(mockVaccines.perPeopleVaccine);
  })
})
