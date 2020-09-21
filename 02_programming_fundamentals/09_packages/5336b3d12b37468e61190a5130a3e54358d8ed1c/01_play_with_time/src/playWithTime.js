
import moment from "moment";
//moment().format();
export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };
const formatDate = (date) => {
  return moment(date).format("dddd Do MMMM YYYY");
};
const yearsSinceDate = (date) => {
  return moment(date).fromNow("YY");
};
const getDayFromDate = (date) => {
  return;
};
const daysSinceDate = (date) => {
  return moment().format("dddd");
};