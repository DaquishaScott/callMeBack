const identity = function (value) {
return value;
};

const first = function (arr, name) {
  if (name === undefined){
    return arr [0];
  }else{
    return arr.slice(0, name);
  }
};
  
const last = function (arr, name) {
  if (name === undefined){
    return arr [arr.length - 1];
  }else{
    return arr.slice(Math.max(arr.length - name,0));
  }
};

const each = function (collection, iterator) {
  if(Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
      iterator(collection[i], i, collection);
    }
  }else if (typeof collection === 'object' && collection !== null){
    for (let key in collection) {
      if (collection.hasOwnProperty(key)){
        iterator(collection[key] , key, collection);
      }
    }
  }
  
};

const indexOf = function (arr, target) {
  for(let i = 0; i <arr.length; i++){
    if (arr[i] === target){
      return i;
    }
  }
  return -1;
};

const map = function (collection, iterator) {
  const result = [];
  each(collection, function(item, index, collection){
    result.push(iterator(item, index, collection));
  });
  return result;

}

const filter = (collection, test) => {
const result = [];
each(collection, (item, index, collection) =>{
  if(test(item, index, collection)) {
    result.push(item);
  }
});
return result;
}

const reject = (collection, test) => {
  const result = [];
  each(collection, (item, index, collection) =>{
    if (!test(item, index, collection))
    {
      result.push(item);
    }
  });
  return result;
};

const uniq = (array) =>{
  const result =[];
  const seen = {};
  each(array,(item) =>{
    if (!seen.hasOwnProperty(item)){
      seen[item] = true
      result.push(item)
    }
  });
  return result;
}

const reduce = (collection, callback, initialValue) =>{
  let accumulator = initialValue
  for(let key in collection){
    if(accumulator === undefined){
      accumulator = collection[key]
      continue
    }
    accumulator = callback(accumulator, collection[key])
  }
  return accumulator;
}

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};