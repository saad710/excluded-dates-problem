import React from 'react';
import moment from 'moment';

const AnotherSolution = () => {
let startDate = "10-01-2022";
let endDate = "31-01-2023";
let resultRange = [];
let excluded = [
    '10-01-2022','12-01-2022','14-01-202','15-01-2022','17-01-2024','21-01-2022','20-01-2023','31-01-2023'
];
let tempDate = moment(startDate, "DD-MM-YYYY");
let tempStartDate = startDate;
while (tempDate < moment(endDate, "DD-MM-YYYY")) {
  const nextDate = moment(tempDate.format("DD-MM-YYYY"), "DD-MM-YYYY")
    .add(1, "days")
    .format("DD-MM-YYYY");
  if (
    excluded.includes(nextDate) ||
    excluded.includes(tempDate.format("DD-MM-YYYY"))
  ) {
    if (!excluded.includes(tempStartDate)) {
      resultRange.push({
        startDate: tempStartDate,
        endDate: tempDate.format("DD-MM-YYYY")
      });
    }
    tempStartDate = nextDate;
  }
  tempDate = tempDate.add(1, "days");
}
if (!excluded.includes(tempDate.format("DD-MM-YYYY"))) {
  resultRange.push({
    startDate: tempStartDate,
    endDate: tempDate.format("DD-MM-YYYY")
  });
}
console.log(resultRange)
console.log(JSON.stringify(resultRange));

return (
    <div>
        <h1>Another Solution for excluded</h1>
    </div>
);
};

export default AnotherSolution;