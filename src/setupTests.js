// Overwrite console functions to not output anything to the log
// This pollutes the test output. Ain't nobody got time for that.
console.log = function() {}
console.warn = function() {}
console.error = function() {}
console.table = function() {}