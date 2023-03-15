"use strict";
/*

string
다른 언어에서와 마찬가지로이 텍스트 형식을 참조하기 위해 'string' 형식을 사용한다.
JavaScript 와 마찬가지로, TypeScript는 문자열 데이터를 둘러싸기 위해
큰 따옴표(""), 작은 따옴표('')를 사용한다.

*/
let myName = "Mark";
myName = 'Kenchi';
let 이름 = '박호련';
console.log(이름);
/*

Template String
행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
이 문자열은 backtick(= backquote) 기호에 둘러쌓여 있다.
포함된 표현식은 `${expr}` 와 같은 형태로 사용한다.

*/
let fullName = 'Mark Lee';
let age = 31;
let sentence = `Hello, My name is ${fullName}.

I'll be ${age + 1} years old next month.`;
console.log('hello');
console.log(sentence);
