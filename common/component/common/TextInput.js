import React, {PropTypes} from 'react'

const TextInput = ({hidden, name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group'
  if (error && error.length) {
    wrapperClass += " " + 'has-error'
  }

  return (
    <div className={wrapperClass} data-tt={hidden} style={{display: (!hidden) ? 'block' : 'none'}}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

TextInput.propTypes = {
  hidden: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
}

export default TextInput
