var curry = function(fn) {
   return function curried(...args) {
      if(args.length >= fn.length) {
         return fn(...args);
      }

      return (...nextArgs) => curried(...args, ...nextArgs);
   };
};
