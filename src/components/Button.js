import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, borderColor:'#CB4133' }}
      className='btn'
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: '#fffff',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button