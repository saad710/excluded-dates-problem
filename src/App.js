import logo from './logo.svg';

import moment from 'moment';

function App() {
  
  //excluded-days
const excludedDate = ["01-10-2022","01-14-2022", "01-15-2022","01-17-2022","01-20-2022","01-30-2022"];

//get-all-date-function-from-startdate-enddate
let getDaysBetweenDates = function(startDate, endDate) {
    let now = startDate.clone(), dates = [];

    while (now.isSameOrBefore(endDate)) {
        dates.push(now.format('MM-DD-YYYY'));
        now.add(1, 'days');
    }
    return dates;
};

//start_end
const startDate = moment('01-10-2022');
const endDate = moment('01-31-2022');
const dateList = getDaysBetweenDates(startDate, endDate);
console.log(dateList);

//unique-day-after-remove-exclude
const findNewArray = dateList.filter(val => !excludedDate.includes(val));
console.log(findNewArray)

//pair-date
function pairwise(arr, func){
    // for(var i=0; i < arr.length - 1; i++){
    //     func(arr[i], arr[i + 1])
    // }
    arr.forEach((array,index) => {
      func(array,arr[index + 1])
    })
}
let findPair = []
pairwise(excludedDate, function(current, next){
    console.log(current, next)
    const diffDays = parseInt(new Date(next) - new Date(current)) 
    const calculateDay = Math.ceil(diffDays / (1000 * 60 * 60 * 24))
    console.log(calculateDay)
    // findPair.push(current,next)
    let startObj;
    let endObj;
    excludedDate.forEach(
      ex => {
        if(ex === current){
            startObj = moment(current, "MM-DD-YYYY").add(1, 'days');
            console.log(startObj)
        }
        if(ex === next){
          endObj = moment(next, "MM-DD-YYYY" ).subtract(1, 'days')
        }
      }
    )
   if(calculateDay > 1){
    findPair.push({'start' : startObj._d, 'end' : endObj._d})
   }
    
})
console.log(findPair)

const lastElementDate = findNewArray[findNewArray.length-1]
console.log(lastElementDate)
const lastElementMoment = moment(lastElementDate,"MM-DD-YYYY")
console.log(lastElementMoment)
const sortExculded = excludedDate.sort((a, b) => b > a ? -1 : 1)
console.log(sortExculded)
const lastExcludedElement = sortExculded[sortExculded.length-1]
console.log(lastExcludedElement)

const addDaysWithExclude = moment(lastExcludedElement, "MM-DD-YYYY" ).add(1, 'days')
console.log(addDaysWithExclude)

const lastPair = [{'start ': addDaysWithExclude._d,'end':lastElementMoment._d }]
console.log(lastPair)

const afterAllPair = findPair.concat(lastPair)
console.log(afterAllPair)

  return (
    <div className="App">
        <h1>Excluded Dates</h1>
    </div>
  );
}

export default App;
