import PropTypes from 'prop-types';

const dayType = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  tempMax: PropTypes.number.isRequired,
  tempMin: PropTypes.number.isRequired
};

export default dayType;
