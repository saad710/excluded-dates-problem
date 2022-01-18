import logo from './logo.svg';

import moment from 'moment';

function App() {

const startDate = moment('01-10-2022');
console.log(startDate)
const endDate = moment('01-31-2022');

  
  //excluded-days
const exclude = ['01-10-2022','01-14-2022','01-15-2022','01-17-2022','01-21-2022','01-20-2023'];

// excludedDate.forEach(ex => {
//   if(new Date(ex).getFullYear() !== new Date('01-10-2022').getFullYear()){
//     excludedDate.pop(ex)
//   }
// })
// console.log(excludedDate)

console.log(new Date('01-10-2022').getFullYear() === new Date('01-14-2022').getFullYear())



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

const dateList = getDaysBetweenDates(startDate, endDate);
// const uniqueYear = [...new Set(new Date(dateList).getFullYear())];
const uniqueYear = Array.from(new Set(dateList.map(x => new Date(x).getFullYear())));
console.log(uniqueYear)

let excludedDate = [];
uniqueYear?.forEach(uni => {
exclude?.forEach(ex => {
  if( new Date(ex).getFullYear() === uni){
    excludedDate.push(ex)
  }
})
})
console.log(excludedDate)

console.log(dateList);
console.log(startDate > endDate)



//unique-day-after-remove-exclude
const findNewArray = dateList.filter(val => !excludedDate.includes(val));
console.log(findNewArray)

//pair-date
function pairwise(arr, func){
   if(arr !== undefined || arr.length !== 0 ){
      arr?.forEach((array,index) => {
        func(array,arr[index + 1])
    })
   }
}
let findPair = []
pairwise(excludedDate, function(current, next){
    console.log(current, next)
    //date-diff-between-next-current
    const diffDays = parseInt(new Date(next) - new Date(current)) 
    const calculateDay = Math.ceil(diffDays / (1000 * 60 * 60 * 24))
    console.log(calculateDay)

    //date-add-subtract-for-pair
    let startObj;
    let endObj;
    excludedDate?.forEach(
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
    findPair.push({'start' : moment(startObj._d).format('LL'), 'end' : moment(endObj._d).format('LL')})
   }
    
})
console.log(findPair)

//require-last-element-date-for-last-pair
const lastElementDate = findNewArray[findNewArray.length-1]
console.log(lastElementDate)
const lastElementMoment = moment(lastElementDate,"MM-DD-YYYY")
console.log(lastElementMoment)
//excluded-date-sorted-for-get-exact-last-date
const sortExculded = excludedDate?.sort((current, next) => next > current ? -1 : 1)
console.log(sortExculded)
const lastExcludedElement = sortExculded[sortExculded.length-1]
console.log(lastExcludedElement)

const addDaysWithExclude = moment(lastExcludedElement, "MM-DD-YYYY" ).add(1, 'days')
console.log(addDaysWithExclude)

//last-pair-for-rest-of-date
let lastPair;
if(dateList[dateList.length-1] !== sortExculded[sortExculded.length-1] ){
  lastPair = [{'start ': moment(addDaysWithExclude._d).format('LL'),'end': moment(lastElementMoment._d).format('LL') }]
  console.log(lastPair)
}
else{
  lastPair = []
}

//firstpair
let firstpair;
// if(sortExculded[0] !== startDate)
console.log(sortExculded[0])
console.log(startDate)
console.log(sortExculded[0] === startDate._i)
if(sortExculded[0] !== startDate._i){
  const endItem = moment(sortExculded[0], "MM-DD-YYYY" ).subtract(1, 'days')
  console.log(endItem)
  firstpair =[{'start ': moment(startDate._i).format('LL'),'end': moment(endItem._d).format('LL') }]
}
else{
  firstpair = []
}
console.log(firstpair)


//concat-the-pair-and-got-final-output
let afterAllPair;
if (excludedDate === undefined || excludedDate.length === 0 || dateList.length === 0 ) {
  // afterAllPair = [{'start' : moment(startDate._i).format('LL'),end:moment(endDate._i).format('LL') }]
  if(endDate > startDate){
    afterAllPair = [{'start' : moment(startDate._i).format('LL'),end:moment(endDate._i).format('LL') }]
  }
  else{
    afterAllPair = [{'start' : moment(startDate._i).format('LL'),end:moment(startDate._i).format('LL') }]
  }
  
}
else{
  afterAllPair = findPair.concat(firstpair,lastPair)
}
console.log(afterAllPair)

  return (
    <div className="App">
        <h1>Excluded Dates</h1>
    </div>
  );
}

export default App;
