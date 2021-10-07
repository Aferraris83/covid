export const countryCases = [
  {
    id: 'confirmed',
    label: 'confirmados:',
  },
  {
    id: 'recovered',
    label: 'recuperados:',
  },
  {
    id: 'perInhabitant',
    label: 'casos cada 100.000 habitantes:',
  },
];

export const vaccinesData = [
  {
    id: 'administered',
    label: 'cantidad de vacunas disponibles:',
  },
  {
    id: 'people_vaccinated',
    label: 'total de personas vacunadas:',
  },
  {
    id: 'people_partially_vaccinated',
    label: 'cantidad de vacunas disponibles:',
  },
  {
    id: 'perPeopleVaccine',
    label: 'cantidad de vacunas disponibles:',
  },
];

export const mockVaccines = {
  abbreviation: "AR",
  administered: 53190856,
  capital_city: "Buenos Aires",
  continent: "South America",
  country: "Argentina",
  elevation_in_meters: 595,
  iso: 32,
  life_expectancy: "75.1",
  location: "South America",
  people_partially_vaccinated: 29919702,
  people_vaccinated: 23026410,
  perPeopleVaccine: 52,
  population: 44271041,
  sq_km_area: 2780400,
  updated: "2021/10/06 00:00:00+00",
};

export const mockHistory = {
  abbreviation: "AR",
  capital_city: "Buenos Aires",
  continent: "South America",
  country: "Argentina",
  dates: 
    {
      "2021-10-05": 115323, 
      "2021-10-04": 115283, 
      "2021-10-03": 115245, 
      "2021-10-02": 115239, 
      "2021-10-01": 115225,
    },
  elevation_in_meters: 595,
  iso: 32,
  life_expectancy: "75.1",
  location: "South America",
  population: 44271041,
  sq_km_area: 2780400,
};

export const mockCase = {
  confirmed: 155380,
  perInhabitant: 437,
  recovered: 0,
}
