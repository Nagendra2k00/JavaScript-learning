// Callback function is a function that is passed as an argument to another function and is executed after the main function has completed.

function payment(amt, callback) {
  console.log("amount received", amt);
  callback();
}

function notification() {
  console.log("notification sent");
}

payment(10000, notification);

