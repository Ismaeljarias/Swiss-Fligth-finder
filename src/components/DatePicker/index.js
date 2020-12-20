import React from "react";
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

export default DatePicker;
