// callback hell is a situation where a function is called inside another function and so on, and so forth.

function doA(callback) {
  console.log("doA");
  callback();
}
function doB(callback) {
  console.log("doB");
  callback();
}
function doC(callback) {
  console.log("doC");
  callback();
}
function doD(callback) {
  console.log("doD");
  callback();
}

doA(() => {
  doB(() => {
    doC(() => {
      doD(() => {
        console.log("doD completed");
      });
      console.log("doC completed");
    });
    console.log("doB completed");
  });
  console.log("doA completed");
});
