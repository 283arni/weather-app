const extend = (oldData, newDate) => {
  return Object.apply({}, oldData, newDate);
};

export default extend;
