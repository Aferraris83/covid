export const actionTypes = {
  CONTINENT: 'CONTINENT',
};

export const actionsCreator = {
  continent: (continent) => ({
    type: actionTypes.CONTINENT,
    payload: continent
  })
};
