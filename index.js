function processAges(ages) {
  //!your solution should be inside the function.
  //1-Use a for loop to iterate over the ages array and double each age. Store the doubled ages in a new array called doubledAges and Print the doubledAges array to the console.

  let ages=[25, 18, 12, 16, 40];

let doubledAges =[];

for(var double of ages){
  doubledAges.push (double*2);
}
console.log("doubledAges:", doubledAges );

  //2-Use the forEach method to loop through the ages array and print each age to the console.
  ages.forEach (function(ages ){
    console.log('age :',ages);
    
    })

  //3-Use the filter method to create a new array called adults that contains only ages greater than or equal to 18.
  let  adults = ages.filter( function (older){
    return older>=18;
    
  })
  console.log(' adults :',adults );
  
  //4-Use the map method to create a new array called ageStrings that contains string representations of each age in the ages array.
  let ageStrings = ages.map(function(ageString)  {
    return ageString.toString();
 });
 console.log( ageStrings);
 
 
  //5-please make sure to name your arrays(variables) accordingly to the names in the return statement.

  return { doubledAges, adults, ageStrings };
}

module.exports = processAges;
