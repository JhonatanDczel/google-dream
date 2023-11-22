const text = 'A quick fox';

const regexLastWord = /\w+$/;
console.log(text.match(regexLastWord));

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));
