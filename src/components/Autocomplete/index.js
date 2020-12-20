import React from "react";
import { Controller } from "react-hook-form";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const CountryAutocomplete = ({ name, label, control, countries }) => {
  return (
    <Controller
      render={(props) => (
        <Autocomplete
          {...props}
          className="countryBox"
          fullWidth
          autoHighlight
          options={countries}
          getOptionLabel={(value) => {
            return `${value?.name} ${value.code}`;
          }}
          renderOption={(value) => {
            return (
              <span>
                {value?.name} <b>{value.code}</b>
              </span>
            );
          }}
          getOptionSelected={(option, value) => option === value}
          renderInput={(params) => (
            <TextField {...params} required label={label} />
          )}
          onChange={(_, data) => {
            return props.onChange(data);
          }}
        />
      )}
      required={false}
      control={control}
      name={name}
      defaultValue={null}
    />
  );
};

export default CountryAutocomplete;
