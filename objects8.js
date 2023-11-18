function foo(bar) {
  console.log(bar());
}

function welcome() {
  return 'Welcome';
}

function pi() {
  return '3.1415';
}

function obj() {
  return [1, 2, 3];
}

foo(welcome);    // Should print 'Welcome'
foo(pi);    // Should print 3.1415
foo(obj);    // Should print [1, 2, 3]

// OR... 

function foo(bar) {
  console.log(bar());
}

foo(function() { return "Welcome" });
foo(function() { return 3.1415 });
foo(function() { return [1, 2, 3] });
