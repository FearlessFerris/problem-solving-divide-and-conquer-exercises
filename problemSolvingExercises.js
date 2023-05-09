// 1.) Count Zeros Exercise 


function countZeros( arr ) {

    let firstZero = findZero( arr )  
    if ( firstZero === -1 ) return 0; 
}

function findZero( arr, start = 0, end = arr.length - 1 ) {

    if ( end >= start ) {
        let middle = Math.floor(( end - start ) / 2 )

        if (( middle === 0 || arr[ middle -1 ] === 1) && arr[ middle ] === 0) {
            return middle;
        }
        else if ( arr[ middle ] === 1 ) {
            return findZero( arr, middle + 1, end )
        }
        return findZero( arr, start, middle - 1 )
    }
    return -1;
}





// 2.) Sorted Frequency Exercise 


function sortedFrequency( arr ) {

    let firstIdx = findFirst( arr, num );
    if ( firstIdx == -1 ) return firstIdx;
    let lastIdx = findLast( arr, num );
    return lastIdx - firstIdx + 1; 
}


function findFirst( arr, num, start = 0, end = arr.length - 1 ) {
    if ( end >= start ) {
        let middle = Math.floor(( start + high ) / 2 )
        if (( middle === 0 || num > arr[ middle - 1 ]) && arr[ middle ] === num ) {
            return middle;
        }
        else if ( num > arr[ middle ]) {
            return findFirst( arr, num, middle + 1, end )
        } 
        else {
            return findFirst( arr, num, start, middle - 1 )
        }
    }
    return -1
}


function findLast( arr, num, start = 0, end = arr.length -1 ) {
    if ( end >= start ) {
        let middle = Math.floor(( start + end ) / 2 )
        if (( middle === arr.length - 1 || num < arr[ middle + 1 ]) && arr[ middle ] === num ) {
            return middle;
        }
        else if ( num < arr[ middle ]) {
            return findLast( arr, num, start, middle - 1 )
        }
        else {
            return findLast( arr, num, middle + 1, end )
        }
    }
    return -1
}


// 3.) Find the rotated-index

function findRotatedIndex( array, num ) {
    var pivot = findPivot( array )
    if (pivot > 0 && num >= array[ 0 ] && num <= array[ pivot - 1]) {
        return binarySearch( array, num, 0, pivot - 1 );
      } else {
        return binarySearch( array, num, pivot, array.length - 1 );
      }
    }
    
    function binarySearch( array, num, start, end ) {
      if ( array.length === 0 ) return -1;
      if ( num < array[ start ] || num > array[ end ]) return -1;
    
      while ( start <= end ) {
        var mid = Math.floor((  start + end ) / 2);
        if (array[ mid ] === num ) {
          return mid;
        } else if ( num < array[ mid ]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
      return -1;
    }
    
    function findPivot( arr ) {
      if ( arr.length === 1 || arr[ 0 ] < arr[ arr.length - 1 ]) return 0;
      var start = 0
      var end = arr.length - 1;
      while ( start <= end ) {
        var mid = Math.floor(( start + end ) / 2);
        if (arr[ mid ] > arr[ mid + 1 ]) return mid + 1
        else if (arr[ start ] <= arr[ mid ]) {
          start = mid + 1
        } else {
          end = mid - 1
        }
      }
    }


// 4.) Find rotation count

function findRotationCount( arr, low = 0, high = arr.length - 1 ) {
    if ( high < low ) return 0;
    if ( high === low ) return low;
    let mid = Math.floor(( low + high ) / 2)
  
    // Check if element (mid+1) is minimum element.
    // Consider the cases like [3, 4, 5, 1, 2]
    if ( mid < high && arr[ mid + 1 ] < arr[ mid ])
      return mid + 1;
  
    // Check if mid itself is minimum element
    if ( mid > low && arr[ mid ] < arr[ mid - 1 ]) {
      return mid;
    }
  
    // Decide whether we need to go to left half or
    // right half
    if ( arr[ high ] > arr[ mid ]) {
      return findRotationCount( arr, low, mid - 1 );
    }
  
    return findRotationCount( arr, mid + 1, high );
  }
  
  module.exports = findRotationCount

  // 5.) FindFloor 

  function findFloor( arr, num, low = 0, high = arr.length - 1 ) {
    if ( low > high ) return -1;
    if ( num >= arr[ high ]) return arr[ high ];
  
    let mid = Math.floor(( low + high ) / 2)
  
    if ( arr[ mid ] === num ) return arr[ mid ];
  
    if ( mid > 0 && arr[ mid - 1 ] <= num && num < arr[ mid ]) {
      return arr[ mid - 1 ];
    }
  
    if ( num < arr[ mid ]) {
      return findFloor( arr, num, low, mid - 1 );
    }
  
    return findFloor( arr, num, mid + 1, high )
  }
  
  module.exports = findFloor