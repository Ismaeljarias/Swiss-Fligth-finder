import React from "react";
import { useForm } from "react-hook-form";
import "date-fns";
import { format } from "date-fns";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Button, Switch } from "@material-ui/core";

import { WrapperComponent, ContentComponent } from "./lib";

import CountryAutocomplete from "./Autocomplete/index";
import DatePicker from "./DatePicker/index";
import Passengers from "./Passengers";

const countries = [
  { name: "paris", code: "PAR" },
  { name: "madrid", code: "MAD" },
  { name: "miami", code: "MIA" },
  { name: "milan", code: "LIN" },
];

export function formatDateAsYMD(date) {
  return format(date, "yyyy-MM-dd");
}

export const FlightSearch = () => {
  const { control, handleSubmit, getValues, watch, reset, register } =
    useForm();
  const fromDateVal = getValues("fromDate");
  const watchFrom = watch("fromDate", false);
  const watchFlightType = watch("flightType", false);

  React.useEffect(() => {
    reset();
  }, [reset]);

  const onSubmit = (data) => {
    const {
      from,
      to,
      fromDate,
      toDate,
      adults,
      children,
      infants,
      flightType,
    } = data;

    // Since this can be reach with a simple JS functionality I decide to keep it simple
    // and use a native function instead of React router or reach for the redirection

    window.open(
      `https://www.swiss.com/us/en/Book/Outbound/${from}-${to}/from-${formatDateAsYMD(
        fromDate
      )}/${
        flightType ? "to-" + formatDateAsYMD(toDate) + "/" : ""
      }adults-${adults}/children-${children}/infants-${infants}/class-economy/al-LX/sidmbvl`,
      "_blank"
    );
  };

  // For this homework I used Material ui so it is easy to build the components and customize it

  return (
    <WrapperComponent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContentComponent>
          <div className="container">
            <CountryAutocomplete
              name="from"
              label="From"
              control={control}
              countries={countries}
            />

            <CountryAutocomplete
              name="to"
              label="To"
              control={control}
              countries={countries}
            />
          </div>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="container">
              <DatePicker
                name="fromDate"
                label="From Date"
                control={control}
                disabled={false}
                defaultValue={new Date()}
                minDate={new Date()}
              />

              <Switch
                className="switch"
                name="flightType"
                inputRef={register}
                color="primary"
              />

              <DatePicker
                name="toDate"
                label="To Date"
                control={control}
                disabled={!watchFlightType}
                defaultValue={watchFrom}
                minDate={fromDateVal}
              />
            </div>
          </MuiPickersUtilsProvider>

          <Passengers register={register} />

          <div className="break"></div>
          <Button
            className="paddingclass"
            variant="contained"
            color="primary"
            type="submit">
            Search
          </Button>
        </ContentComponent>
      </form>
    </WrapperComponent>
  );
};

export default FlightSearch;
