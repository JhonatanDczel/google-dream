const text = 'A quick fox';

const regexLastWord = /\w+$/;
console.log(text.match(regexLastWord));

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));

const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));
