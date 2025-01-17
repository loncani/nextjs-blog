import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  console.log(format(date, "LLLL d, yyyy"));
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
