const isIdValid = (id) => {
  return !isNaN(id) && id !== null;
};

module.exports = isIdValid;
