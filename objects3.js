//  Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

myObj.qux = 3

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// qux

for (let key in myObj) {
  console.log(key);
}

// qux
// foo
// bar

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}

// qux