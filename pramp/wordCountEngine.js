function wordCountEngine(document) {
  let hsh = {},
      words = [],
      splitted = document.split(" "),
      largestCount = 0,
      alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  // STEP 1
  // iterating though the splitted
  // takes every element, removes all extra symbols and store the 'cleanWord' in hsh as the key, with frequence count as value >>> {"practice": 3}
  for (let i = 0; i < splitted.length; i++) {
    let word = splitted[i].toLowerCase(),
        cleanWord = "",
        count = 0;
    //check on symbols
    for (let j = 0; j < word.length; j++) {
      if (alphabet.includes(word[j])) cleanWord += word[j];
    }
    
    if (cleanWord.length < 1) {
      continue;
    } else {
        //check in cleanWord already in hsh
        if (cleanWord in hsh) {
          count = hsh[cleanWord];
          count++;
          hsh[cleanWord] = count;
        } else {
          //if not, store it
          hsh[cleanWord] = 1; 
          words.push(cleanWord);
        }
    }
    //updates the largestCount
    if (count > largestCount) largestCount = count;
  }
  
  // STEP 2
  
  // words = [ 'practice', 'makes', 'perfect', 'youll', 'get', 'by', 'just' ]
  
  // hsh = { 
  //practice: 3, 
  //makes: 1,
  //perfect: 2,
  //youll: 1,
  //get: 1,
  //by: 1,
  //just: 4 }
  
  // create new array - size of the largestCount
  // iterate over the words array(because they appered in that order), group the words by number of occurrences and store all in the new arr(which just created)
  // again, each word will be stored at the index equal to num of occurrences and in case of multiple words with the same occurrences those words will be stored in order of aaperance; 
  let counterList = new Array(largestCount + 1).fill(null);
  
  for (let m = 0; m < words.length; m++) {
    let counter = hsh[words[m]],
        wordCounterList = counterList[counter];
    if (wordCounterList === null) {
      wordCounterList = [];
    }
      wordCounterList.push(words[m]);
      counterList[counter] = wordCounterList;
  }
  
  // STEP 3
  // flatten array backwards and disregard if null
  let result = [];
  // counterList = [ null, [ 'makes', 'youll', 'get', 'by' ], [ 'perfect' ], [ 'practice' ], [ 'just' ] ]
  
  for (let n = counterList.length - 1; n >= 0 ; n--) {
    let ele = counterList[n];
    if (ele !== null) {
      for (let b = 0; b < ele.length; b++) {
        result.push([ele[b], hsh[ele[b]].toString()])
      }
    }
  }
   
  return result;
}

// helper functions(pramp didn't have Object.entries or Object.keys)
function ObjectEntries(obj) {
  return Object.keys(obj).map(key => [key, obj[key].toString()]);
}
function ObjectKeys(obj) {
  return Object.keys(obj).map(key => key);
}