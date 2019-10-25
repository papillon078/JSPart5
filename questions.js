var languagesArrayCreation = function () {

  return languages = ['Html','CSS','Java','PHP'];
}

var numbersArrayCreation = function () {
  let numbers=[];
for(i=0;i<6;i++){numbers[i]=i;};
    return numbers;
}

var ElementReplacement = function (languages) {
languages.splice(2,1,'Javascript');
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
languages.push('Ruby','Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
numbers.unshift(-2,-1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop();
    return languages;
}

var stringToArray = function (socialMediaInString) {

  return socialMedia=socialMediaInString.split(',');
}

var arrayToString = function (languages) {

  return languagesInString = languages.join(',');
}

var arraySort = function (socialMedia) {

  return socialMedia.sort();
}

var arrayInvert = function (languages){


  return languages.reverse();
}
