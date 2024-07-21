export function throttle(period, fn) {
  let lastExecutionTime = 0;
  let timeoutId = null;

  return function (...args) {
    const now = Date.now();
    const remainingTime = period - (now - lastExecutionTime);

    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    if (remainingTime <= 0) {
      // Immediate execution
      lastExecutionTime = now;
      fn.apply(this, args);
    } else {
      // Delayed execution
      timeoutId = setTimeout(() => {
        lastExecutionTime = Date.now();
        timeoutId = null;
        fn.apply(this, args);
      }, remainingTime);
    }
  };
}
