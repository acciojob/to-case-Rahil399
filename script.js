function toCase(text) {
  // write your code here
	 return str ? str.toLowerCase() + '-' + str.toUpperCase();
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
