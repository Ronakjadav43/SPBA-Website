import moment from "moment";

export const dateToTitleFormat = (date: string, format: string) => {
    return date ? moment(date).format(format) : "TBD";
  };
  