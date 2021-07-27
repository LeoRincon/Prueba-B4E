export const validateNumberPositive = (param) => {
  if (Math.sign(param) === 1) {
    percentage.classList.add('positive');
  } else {
    percentage.classList.add('negative');
  }
  return param;
};
