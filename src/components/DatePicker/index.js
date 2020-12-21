import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

import { KeyboardDatePicker } from "@material-ui/pickers";

const DatePicker = ({
  name,
  label,
  control,
  minDate,
  defaultValue,
  disabled,
}) => {
  return (
    <Controller
      render={({ onChange, value }) => (
        <KeyboardDatePicker
          variant="inline"
          disablePast
          format="dd/MM/yyyy"
          value={value}
          onChange={(value) => onChange(value)}
          label={label}
          disabled={disabled}
          minDate={minDate || false}
        />
      )}
      name={name}
      control={control}
      defaultValue={defaultValue || null}
    />
  );
};

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  minDate: PropTypes.object,
  defaultValue: PropTypes.any.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default DatePicker;
