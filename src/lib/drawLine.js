// makeArraysOfEqualLength(arr1, arr2) takes in two arrays arr1 and arr2 and removes
//   elements at the end of the longest array to make them have the same size.
//   returns an object containing the two resized arrays in the same order as
//   they were inputed
const makeArraysOfEqualLength = (arr1, arr2) => {
  let minSizeArr = (arr1.length < arr2.length ? arr1 : arr2).slice();
  let maxSizeArr = (arr1.length < arr2.length ? arr2 : arr1).slice().slice(0, minSizeArr.length);

  // as minSizeArr does not get modified we can compare it with the
  // original arrays to implement the proper return order
  if (minSizeArr === arr1) {
    return [minSizeArr, maxSizeArr];
  } else {
    return [maxSizeArr, minSizeArr];
  }
}

// getCoordsElement(element) accepts and html element and returns an
//   object {x,y} that contains the x and y coordinates of the center
//   of element
const getCoordsElement = (element) => ({
  x: element.offsetLeft + element.offsetWidth / 2,
  y: element.offsetTop + element.offsetHeight / 2,
});

// getCoordsOfChildren(element) accepts an html element and returns and
//   array of the coordinates of all the element's direct children
export const getCoordsOfChildren = (element) => {
  let childrenArray = Array.from(element.current.children);
  return childrenArray.map(getCoordsElement);
};

// generateCoordinatesOfLines(arr1, arr2) takes in two arrays of objects arr1 and arr2
//   where arr1 and arr2 are arrays in the form [{x: , y: }, {...}, ...]
//   Outputs and array of objects in the form [{x1: 0, y1: 0, x2: 100, y2: 100}, {...}, ...]
//   where x1, y1 are the coordinates in arr1[0] and x2, y2 are the coordinates in arr2
//   [0] and so on.
// REQUIRES:
//   arr1 and arr2 to have the same length
const generateCoordinatesOfLines = (arr1, arr2) => {
  // if (arr1.length !== arr2.length) return undefined; // (TO-DO) return a proper error
  return arr1.map((item, i) => ({
    x1: item.x,
    y1: item.y,
    x2: arr2[i].x,
    y2: arr2[i].y
  }));
}

// generateLinesBetweenItems(arr1, arr2) takes in two arrays arr1, arr2 in the shape 
//   [{x: , y: }, {...}, ...] where each object i in arr1 represents the coordinates
//   of the start of the line i and each object i in arr2 represents the coordinates
//   of the end of the line i. In case that arr1 and arr2 are of different length,
//   n lines where n = min(arr1.length, arr2.length) will be generated.
export const generateLinesBetweenItems = (arr1, arr2) => {
  [arr1, arr2] = makeArraysOfEqualLength(arr1, arr2);
  return generateCoordinatesOfLines(arr1, arr2);
}