function hasTargetSum(array, target) {
  // Write your algorithm here

  // for (let i = 0; i <= array.length; i++) {
  //   for (let j = i + 1; j <= array.length; j++) {
  //     if ((array[i] + array[j]) === target) {
  //       return true;
  //     }
  //   }
  // }
  // return false;


  let oppositesArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (oppositesArray.includes(array[i])) {
      return true;
    }
    else {
      oppositesArray.push(target - array[i])
    }
  };
  return false;

  // for (let j = 0; j <= oppositesArray.length; j++) {
  //   if (oppositesArray[j] === (target / 2)) {
  //     oppositesArray.splice(j, 1);
  //   }
  //   else if (array.includes(oppositesArray[j])) {
  //     return true
  //   }
  // }
  // return false;


  // const newSet = new Set();
  // for (let i = 0; i < array.length; i++) {
  //   if (newSet.has(array[i])) {
  //     return true;
  //   }
  //   newSet.add(target - array[i]);
  // }
  // return false;




}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
