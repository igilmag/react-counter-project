import PropTypes from 'prop-types'
function Button ({ handleClick = () => {}, children }) {
  return (
    <button
          onClick={handleClick}
          className='px-2 py-1 uppercase border border-black rounded hover:border-white hover:text-white'
        >{children}</button>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired
}

export default Button
