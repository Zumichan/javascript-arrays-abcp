function addElementToBeginningOfArray(array, element){
  var newArray = [element,...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  array.unshift(element);
  return array;
}

function (array, element){
  array.unshift(element);
  return array;
}