import React from "react";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const CountryAutocomplete = ({ name, label, control, countries }) => {
  return (
    <Controller
      render={({ onChange, value }) => (
        <Autocomplete
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
          // eslint-disable-next-line eqeqeq
          getOptionSelected={(option, value) => option.code === value.code}
          renderInput={(params) => (
            <TextField {...params} required label={label} />
          )}
          onChange={(_, data) => {
            return onChange(data?.code);
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

CountryAutocomplete.propType = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  countries: PropTypes.array.isRequired,
};

export default CountryAutocomplete;
