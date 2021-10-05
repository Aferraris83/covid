import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"

import Content from './Content'

describe('render Content', ()=> {
  const mockCases = {
    confirmed: 50,
    recovered: 100,
    perInhabitant: 150,
    date: '5/10/2021'
  };

  const mockVaccines = {
    administered: 200,
    people_vaccinated: 300,
    people_partially_vaccinated: 400,
    perPeopleVaccine: 500
  }

  it('render cases', () => {
    render(<Content 
                              confirmed={mockCases.confirmed} 
                              recovered={mockCases.recovered}
                              perInhabitant={mockCases.perInhabitant}
                              date={mockCases.date}
                            />);

    const confirmed = screen.queryByRole('confirmed');
    const recovered = screen.queryByRole('recovered');
    const perInhabitant = screen.queryByRole('perInhabitant');
    const date = screen.queryByRole('date');

    expect(confirmed).toHaveTextContent(mockCases.confirmed);
    expect(recovered).toHaveTextContent(mockCases.recovered);
    expect(perInhabitant).toHaveTextContent(mockCases.perInhabitant);
    expect(date).toHaveTextContent(mockCases.date);
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
    const { debug } = render(<Content vaccines={mockVaccines}/>)
    debug()
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
