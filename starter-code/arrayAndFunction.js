//Find maximum of two numbers.

function maxOfTwoNumbers(num1,num2){
  return num1 > num2 ? num1 : num2;
}
maxOfTwoNumbers(10,11);

//Find the longest word
let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(array){
  let longestWord = "";
  array.forEach((eachWord)=>{
    if (eachWord.length > longestWord.length){
      longestWord = eachWord;
    }
  })
  return longestWord
}
findLongestWord(words)

//Find sum of array of numbers 
function sumArray(array){
  let sum = 0;
  array.forEach((eachNumber)=>{
    sum+=eachNumber;
  })
  return sum
}
let arr = [1,2,3,4,5]
sumArray(arr)


//Find average of elements in array
function averageNumbers(array){
  let sum = 0;
  
  array.forEach((eachNumber)=>{
    sum+=eachNumber
  })
  return sum/array.length 
}
let arr = [1,2,3]
averageNumbers(arr)

function averageWordLength(array){

  let arrayOfNumbers = [];
  array.forEach((eachWord)=>{
    arrayOfNumbers.push(eachWord.length)
  })
  let sum = 0;
  arrayOfNumbers.forEach((eachNumber)=>{
    sum += eachNumber;
  })
  return sum/arrayOfNumbers.length
}

let words = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
];

// averageWordLength(words);
function uniquifyArray(array)
{
let newArray = [];
array.forEach((eachWord)=>{
      if(newArray.indexOf(eachWord) === -1)
      {
        newArray.push(eachWord)
       };
    
})
return newArray;
}

uniquifyArray(words)

function doesWordExist(array,word){
for ( let i = 0; i < array.length;i++){
  if ( word === array[i]){
    return true
  }
}
return false
}

let words = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

 doesWordExist(words,"machine")

function howManyTimes(array,word){
  let newArray =  array.sort();
  let wordCount = 0;
  for ( let i = 0; i<=newArray.length;i++){
    if(newArray[i]===newArray[i+1]){
      wordCount++
    }
  }
  return wordCount;
}

let words = [

    'small',
    'correspond',
    'linen',
    'motif',
    'hole',
    'small',
    'small',
    'small',
    'fuel',
    'small'
];

howManyTimes(words,"small")


