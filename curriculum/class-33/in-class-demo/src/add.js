// closure
function memoize(fn) {
  let prevArgs = null;
  let prevResult = null;

  return function(...args) {
    // if args match prevArgs then return prevResult
    if(prevArgs && args.length === prevArgs.length && args.every((arg, i) => arg === prevArgs[i])) {
      return prevResult;
    }
    // otherwise
    // [1, 2] -> fn(1, 2)
    // invoke fn() store result in prevResult
    prevResult = fn(...args);
    // store args in prevArgs
    prevArgs = args;

    return prevResult;
  };
}

function add(a, b) {
  console.log('running add!!');
  return a + b;
}

const memoizedAdd = memoize(add);

// args [1, 2] / prevArgs null
memoizedAdd(1, 2);

// args [1, 2] prevArgs [1, 2]
memoizedAdd(1, 2);
memoizedAdd(1, 2);
memoizedAdd(1, 2);
memoizedAdd(1, 2);
memoizedAdd(1, 2);
memoizedAdd(1, 2);
memoizedAdd(1, 2);
memoizedAdd(1, 2);
memoizedAdd(1, 2);
memoizedAdd(1, 2);
memoizedAdd(5, 2);
memoizedAdd(1, 2);
memoizedAdd(1, 2);
memoizedAdd(1, 2);
