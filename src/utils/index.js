import dayjs from "dayjs";

export const formatDateTime = (value, format = "MMM D, YYYY") => {
  return dayjs(value).format(format);
};

