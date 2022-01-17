import logo from './logo.svg';

import moment from 'moment';

function App() {
  
   // start_date = '01-10-2022';
// end_date = '01-31-2022';
// excluded = ["10-01-2022", "14-01-2022"];
// output: [{"startDate":"11-Jan-2022","endDate":"13-Jan-2022"},{"startDate":"15-Jan-2022","endDate":"31-Jan-2022"}]

// const start = moment('01-10-2022');
// const end = moment('01-31-2022');
const excludedDate = ["01-10-2022","01-14-2022", "01-15-2022","01-20-2022","01-30-2022"];

// const findDate = 

// var currentDate = moment('01-10-2022');
// var futureMonth = moment(currentDate).add(1, 'M');
// var futureMonthEnd = moment(futureMonth).endOf('month');

// let findDate;

// if(start.date() !=end.date() ) {
//     findDate = start.add(1, 'd');
// }
// console.log(findDate)

let getDaysBetweenDates = function(startDate, endDate) {
    let now = startDate.clone(), dates = [];

    while (now.isSameOrBefore(endDate)) {
        dates.push(now.format('MM-DD-YYYY'));
        now.add(1, 'days');
    }
    return dates;
};

let startDate = moment('01-10-2022');
let endDate = moment('01-31-2022');

let dateList = getDaysBetweenDates(startDate, endDate);
console.log(dateList);

const findNewArray = dateList.filter(val => !excludedDate.includes(val));
console.log(findNewArray)

// let main = []
// dateList.forEach(d => {
//     excludedDate.forEach(ex => {
        
//     })
// })


function pairwise(arr, func){
    // for(var i=0; i < arr.length - 1; i++){
    //     func(arr[i], arr[i + 1])
    // }

  
    arr.forEach((array,index) => {
      func(array,arr[index + 1])
    })
}
let f = []
pairwise(excludedDate, function(current, next){
    console.log(current, next)
    var diffDays = parseInt(new Date(next) - new Date(current)) 
    let calculateDay = Math.ceil(diffDays / (1000 * 60 * 60 * 24))
    console.log(calculateDay)
    // f.push(current,next)
    let s;
    let e;
    excludedDate.forEach(
      ex => {
        if(ex === current){
            s = moment(current, "MM-DD-YYYY").add(1, 'days');
            console.log(s)
        }
        if(ex === next){
          e = moment(next, "MM-DD-YYYY" ).subtract(1, 'days')
        }
      }
    )
    
   if(calculateDay > 2){
    f.push({'start' : s._d, 'end' : e._d})
   }
    
})
console.log(f)

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

const afterAllPair = f.concat(lastPair)
console.log(afterAllPair)

  return (
    <div className="App">
        <h1>Excluded Dates</h1>
    </div>
  );
}

export default App;
