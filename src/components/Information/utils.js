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
  {
    id: 'date',
    label: 'fecha primer fallecido:',
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

export const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value)
