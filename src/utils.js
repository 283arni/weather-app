const extend = (oldData, newData) => {
  return Object.assign({}, oldData, newData);
};

const formatTime = (date) => {
  return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};

export { extend, formatTime };
