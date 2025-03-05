function toCase(text) {
    return text ? text.toLowerCase() + '-' + text.toUpperCase() : '-';
}

// DO NOT change the code below
const text = prompt("Enter text:");
alert(toCase(text));
