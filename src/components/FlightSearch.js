import React from "react";
import { useForm } from "react-hook-form";
import "date-fns";
import { format } from "date-fns";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Button } from "@material-ui/core";

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
  const {
    control,
    handleSubmit,
    getValues,
    watch,
    reset,
    register,
  } = useForm();
  const fromDateVal = getValues("fromDate");
  const watchFrom = watch("fromDate", false);

  React.useEffect(() => {
    reset();
  }, [reset]);

  const onSubmit = (data) => {
    // const {
    //   from: { code: fromCode },
    //   to: { code: toCode },
    //   fromDate,
    // } = data;

    // console.log(`${fromCode}-${toCode} / ${formatDateAsYMD(fromDate)}`);
    console.log(data);
    // window.open(
    //   `https://www.swiss.com/us/en/Book/Outbound/${fromCode}-${toCode}/from-${formatDateAsYMD(
    //     fromDate
    //   )}/adults-1/children-0/infants-0/class-economy/al-LX/sidmbvl`,
    //   "_blank"
    // );
  };

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

              <DatePicker
                name="toDate"
                label="To Date"
                control={control}
                disabled={false}
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
            Get country code
          </Button>
        </ContentComponent>
      </form>
    </WrapperComponent>
  );
};

export default FlightSearch;
