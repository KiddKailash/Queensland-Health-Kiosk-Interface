import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

/**
 * UserSelect component renders a dropdown (Select) field.
 *
 * @param {string} name - The name of the select field.
 * @param {string} text - The label for the select field.
 * @param {array} options - Array of option objects with value and label.
 * @param {function} onChange - Callback for change event.
 * @param {string|number} value - Current value of the select input.
 * @param {boolean} disabled - Whether the select input should be disabled.
 *
 * @return {JSX.Element} - Rendered Select component.
 */
const UserSelect = ({ name, text, options, onChange, value, disabled }) => {
  const labelId = `${name}-select-label`;
  const id = `${name}-select`;

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onChange(name, selectedValue);
  };

  return (
    <FormControl fullWidth sx={{ minWidth: 120, mt: 1, mb: 0.5 }} disabled={disabled}>
      <InputLabel id={labelId}>{text}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={text}
        onChange={handleSelectChange}
        disabled={disabled} // Apply disabled state here
      >
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

UserSelect.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  disabled: PropTypes.bool, // Accept a disabled prop
};

UserSelect.defaultProps = {
  disabled: false, // Default disabled to false
};

export default UserSelect;
