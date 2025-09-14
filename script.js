const questions = [
    {
        ques: "Which HTML tag is used to insert a line break?",
        opt1: "<br>",
        opt2: "<break>",
        opt3: "<lb>",
        opt4: "<hr>",
        ans: "<br>"
    },
    {
        ques: "How do you declare a variable in JavaScript?",
        opt1: "variable x;",
        opt2: "let x;",
        opt3: "dim x;",
        opt4: "var = x;",
        ans: "let x;"
    },
    {
        ques: "Which symbol is used for comments in JavaScript?",
        opt1: "//",
        opt2: "/* */",
        opt3: "#",
        opt4: "<!-- -->",
        ans: "//"
    },
    {
        ques: "What is the correct way to write a function in JavaScript?",
        opt1: "function myFunc() {}",
        opt2: "def myFunc() {}",
        opt3: "func myFunc() {}",
        opt4: "function: myFunc() {}",
        ans: "function myFunc() {}"
    },
    {
        ques: "How do you write an alert in JavaScript?",
        opt1: "msg('Hello');",
        opt2: "alert('Hello');",
        opt3: "message('Hello');",
        opt4: "popup('Hello');",
        ans: "alert('Hello');"
    },
    {
        ques: "Which of the following is a correct way to create an array?",
        opt1: "let arr = '1,2,3';",
        opt2: "let arr = [1, 2, 3];",
        opt3: "let arr = (1, 2, 3);",
        opt4: "let arr = {1, 2, 3};",
        ans: "let arr = [1, 2, 3];"
    },
    {
        ques: "How do you access the first element in an array named 'fruits'?",
        opt1: "fruits(0);",
        opt2: "fruits[1];",
        opt3: "fruits[0];",
        opt4: "fruits.first();",
        ans: "fruits[0];"
    },
    {
        ques: "What is the correct way to add an element to the end of an array?",
        opt1: "arr.push(5);",
        opt2: "arr.add(5);",
        opt3: "arr.insert(5);",
        opt4: "arr.append(5);",
        ans: "arr.push(5);"
    },
    {
        ques: "What is the output of `typeof 'Hello'`?",
        opt1: "number",
        opt2: "string",
        opt3: "boolean",
        opt4: "object",
        ans: "string"
    },
    {
        ques: "Which method can be used to remove the last element of an array?",
        opt1: "pop()",
        opt2: "push()",
        opt3: "shift()",
        opt4: "unshift()",
        ans: "pop()"
    },
    {
        ques: "What is NaN in JavaScript?",
        opt1: "A number object",
        opt2: "Not a Number",
        opt3: "New Array Name",
        opt4: "Null value",
        ans: "Not a Number"
    },
    {
        ques: "Which of the following is used to compare both value and type?",
        opt1: "==",
        opt2: "=",
        opt3: "===",
        opt4: "!==",
        ans: "==="
    },
    {
        ques: "What is the correct way to write a string?",
        opt1: "let str = Hello;",
        opt2: "let str = 'Hello';",
        opt3: "let str = `Hello;",
        opt4: "let str = Hello;",
        ans: "let str = 'Hello';"
    },
    {
        ques: "What is the purpose of the 'return' statement in a function?",
        opt1: "To stop the function",
        opt2: "To output a value",
        opt3: "To define a new function",
        opt4: "To restart the function",
        ans: "To output a value"
    },
    {
        ques: "What is the result of `3 + '4'`?",
        opt1: "7",
        opt2: "34",
        opt3: "Error",
        opt4: "undefined",
        ans: "34"
    },
    {
        ques: "How do you find the length of a string?",
        opt1: "str.length",
        opt2: "str.size()",
        opt3: "length(str)",
        opt4: "str.count",
        ans: "str.length"
    },
    {
        ques: "Which keyword is used to define a constant?",
        opt1: "var",
        opt2: "let",
        opt3: "const",
        opt4: "constant",
        ans: "const"
    },
    {
        ques: "How do you create an object in JavaScript?",
        opt1: "let obj = {}",
        opt2: "let obj = []",
        opt3: "let obj = ()",
        opt4: "let obj = <>",
        ans: "let obj = {}"
    },
    {
        ques: "How do you access a property 'name' of an object 'person'?",
        opt1: "person.name",
        opt2: "person('name')",
        opt3: "person->name",
        opt4: "person[name]",
        ans: "person.name"
    },
    {
        ques: "What does 'undefined' mean in JavaScript?",
        opt1: "A variable declared but not initialized",
        opt2: "A function not returning a value",
        opt3: "A syntax error",
        opt4: "A null object",
        ans: "A variable declared but not initialized"
    },
    {
        ques: "What is the correct way to write an 'if' statement?",
        opt1: "if x > 5 then",
        opt2: "if (x > 5) {}",
        opt3: "if x > 5 {}",
        opt4: "if x > 5:",
        ans: "if (x > 5) {}"
    },
    {
        ques: "Which event occurs when the user clicks on an HTML element?",
        opt1: "onmouseover",
        opt2: "onchange",
        opt3: "onclick",
        opt4: "onload",
        ans: "onclick"
    },
    {
        ques: "Which of these is a looping structure in JavaScript?",
        opt1: "for",
        opt2: "repeat",
        opt3: "loop",
        opt4: "foreach",
        ans: "for"
    },
    {
        ques: "What does DOM stand for?",
        opt1: "Document Object Model",
        opt2: "Data Object Model",
        opt3: "Document Oriented Method",
        opt4: "Domain Object Management",
        ans: "Document Object Model"
    },
    {
        ques: "What is the purpose of 'break' in a loop?",
        opt1: "Skips the current iteration",
        opt2: "Stops the loop from running",
        opt3: "Restarts the loop",
        opt4: "Does nothing",
        ans: "Stops the loop from running"
    },
    {
        ques: "What is the purpose of 'continue' in a loop?",
        opt1: "Exits the loop completely",
        opt2: "Skips the current iteration and continues with the next one",
        opt3: "Restarts the loop from the beginning",
        opt4: "Ends the function",
        ans: "Skips the current iteration and continues with the next one"
    },
    {
        ques: "How do you define an empty array?",
        opt1: "let arr = ();",
        opt2: "let arr = {};",
        opt3: "let arr = [];",
        opt4: "let arr = <>;",
        ans: "let arr = [];"
    },
    {
        ques: "What is a template literal?",
        opt1: "A string with embedded expressions using backticks",
        opt2: "A comment block",
        opt3: "A loop statement",
        opt4: "A function declaration",
        ans: "A string with embedded expressions using backticks"
    },
    {
        ques: "Which method converts a JSON string into an object?",
        opt1: "JSON.stringify()",
        opt2: "JSON.parse()",
        opt3: "JSON.convert()",
        opt4: "JSON.objectify()",
        ans: "JSON.parse()"
    },
    {
        ques: "What is the use of 'this' keyword?",
        opt1: "Refers to the current object",
        opt2: "Refers to the global object always",
        opt3: "Refers to the parent object only",
        opt4: "Is used to declare variables",
        ans: "Refers to the current object"
    },
    {
        ques: "What does 'async' keyword mean?",
        opt1: "Function runs synchronously",
        opt2: "Function always throws an error",
        opt3: "Function returns a promise and runs asynchronously",
        opt4: "Function waits for user input",
        ans: "Function returns a promise and runs asynchronously"
    },
    {
        ques: "How do you prevent a form from submitting in JavaScript?",
        opt1: "event.preventDefault()",
        opt2: "event.stop()",
        opt3: "form.reset()",
        opt4: "form.submit()",
        ans: "event.preventDefault()"
    },
    {
        ques: "Which operator is used for exponentiation?",
        opt1: "**",
        opt2: "^",
        opt3: "exp()",
        opt4: "%",
        ans: "**"
    },
    {
        ques: "What will be the output of `Boolean(0)`?",
        opt1: "true",
        opt2: "false",
        opt3: "undefined",
        opt4: "null",
        ans: "false"
    },
    {
        ques: "How do you round a number to the nearest integer?",
        opt1: "Math.floor()",
        opt2: "Math.ceil()",
        opt3: "Math.round()",
        opt4: "Math.random()",
        ans: "Math.round()"
    },
    {
        ques: "How do you generate a random number between 0 and 1?",
        opt1: "Math.random()",
        opt2: "Math.gen()",
        opt3: "random()",
        opt4: "Math.number()",
        ans: "Math.random()"
    },
    {
        ques: "What is the correct way to write a promise?",
        opt1: "new Promise((resolve, reject) => {})",
        opt2: "promise(resolve, reject) => {}",
        opt3: "Promise(resolve, reject) => {}",
        opt4: "new Promise = (resolve, reject) => {}",
        ans: "new Promise((resolve, reject) => {})"
    },
    {
        ques: "Which method is used to find an element by its ID?",
        opt1: "document.getElementById()",
        opt2: "document.querySelector()",
        opt3: "document.findById()",
        opt4: "document.getElementsByClassName()",
        ans: "document.getElementById()"
    },
    {
        ques: "How do you write a strict equality check?",
        opt1: "==",
        opt2: "===",
        opt3: "=",
        opt4: "!==",
        ans: "==="
    },
    {
        ques: "How do you write a ternary operator?",
        opt1: "condition ? value1 : value2",
        opt2: "if condition then value1 else value2",
        opt3: "condition ? value1, value2",
        opt4: "condition : value1 ? value2",
        ans: "condition ? value1 : value2"
    },
    {
        ques: "What will `typeof null` return?",
        opt1: "object",
        opt2: "null",
        opt3: "undefined",
        opt4: "error",
        ans: "object"
    },
    {
        ques: "What does 'event bubbling' refer to?",
        opt1: "Events propagate from the outermost element to the innermost",
        opt2: "Events propagate from the innermost element to the outermost",
        opt3: "Events are blocked from propagating",
        opt4: "Events run only once",
        ans: "Events propagate from the innermost element to the outermost"
    },
       {
        ques: "Which operator is used to assign a value to a variable?",
        opt1: "==",
        opt2: "=",
        opt3: "===",
        opt4: "+",
        ans: "="
    },
    {
        ques: "What will `5 + '5'` return?",
        opt1: "10",
        opt2: "55",
        opt3: "NaN",
        opt4: "undefined",
        ans: "55"
    },
    {
        ques: "Which operator is used to check strict equality (value and type)?",
        opt1: "==",
        opt2: "=",
        opt3: "===",
        opt4: "!==",
        ans: "==="
    },
    {
        ques: "What is the result of `10 % 3`?",
        opt1: "1",
        opt2: "3",
        opt3: "0",
        opt4: "3.33",
        ans: "1"
    },
    {
        ques: "Which operator is used for exponentiation in JavaScript?",
        opt1: "^",
        opt2: "**",
        opt3: "exp()",
        opt4: "%",
        ans: "**"
    },
    {
        ques: "What will `true && false` return?",
        opt1: "true",
        opt2: "false",
        opt3: "undefined",
        opt4: "null",
        ans: "false"
    },
    {
        ques: "Which operator is used to compare values without type conversion?",
        opt1: "===",
        opt2: "==",
        opt3: "=",
        opt4: "!=",
        ans: "==="
    },
    {
        ques: "What is the result of `!true`?",
        opt1: "true",
        opt2: "false",
        opt3: "undefined",
        opt4: "null",
        ans: "false"
    },
    {
        ques: "Which operator is used to combine multiple conditions?",
        opt1: "&&",
        opt2: "||",
        opt3: "!",
        opt4: "%",
        ans: "&&"
    },
    {
        ques: "What is the result of `2 * 3 + 4`?",
        opt1: "14",
        opt2: "10",
        opt3: "12",
        opt4: "None of these",
        ans: "10"
    },

    
    {
        ques: "Which loop is used when the number of iterations is known?",
        opt1: "for loop",
        opt2: "while loop",
        opt3: "do-while loop",
        opt4: "none of these",
        ans: "for loop"
    },
    {
        ques: "What is the correct syntax for a 'for' loop?",
        opt1: "for i = 0; i < 5; i++ {}",
        opt2: "for (i = 0; i < 5; i++) {}",
        opt3: "for i < 5; i++ {}",
        opt4: "for (i < 5; i++) {}",
        ans: "for (i = 0; i < 5; i++) {}"
    },
    {
        ques: "Which loop will execute at least once even if the condition is false?",
        opt1: "for loop",
        opt2: "while loop",
        opt3: "do-while loop",
        opt4: "none of these",
        ans: "do-while loop"
    },
    {
        ques: "What keyword is used to exit a loop prematurely?",
        opt1: "continue",
        opt2: "break",
        opt3: "exit",
        opt4: "return",
        ans: "break"
    },
    {
        ques: "What keyword is used to skip the current iteration of a loop?",
        opt1: "break",
        opt2: "skip",
        opt3: "continue",
        opt4: "pass",
        ans: "continue"
    },
    {
        ques: "How do you create an infinite loop using 'while'?",
        opt1: "while (true) {}",
        opt2: "while (1 < 0) {}",
        opt3: "while (false) {}",
        opt4: "while (i = 5) {}",
        ans: "while (true) {}"
    },
    {
        ques: "What will this loop print? `for(let i = 0; i < 3; i++) { console.log(i); }`",
        opt1: "0 1 2 3",
        opt2: "1 2 3",
        opt3: "0 1 2",
        opt4: "3 times '0'",
        ans: "0 1 2"
    },
    {
        ques: "Which loop is preferred when you want to iterate through array elements?",
        opt1: "for loop",
        opt2: "while loop",
        opt3: "do-while loop",
        opt4: "switch loop",
        ans: "for loop"
    },
    {
        ques: "What happens if the loop condition is never false?",
        opt1: "It runs infinitely",
        opt2: "It runs once",
        opt3: "It gives an error",
        opt4: "It skips the loop",
        ans: "It runs infinitely"
    },
    {
        ques: "Which of the following is a valid loop?",
        opt1: "for(i=0; i<5; i++) {}",
        opt2: "for i=0; i<5; i++ {}",
        opt3: "loop(i=0; i<5; i++) {}",
        opt4: "while i<5: {}",
        ans: "for(i=0; i<5; i++) {}"
    },
        {
        ques: "Which method is used to find the length of a string?",
        opt1: "str.length()",
        opt2: "str.size",
        opt3: "str.length",
        opt4: "str.count",
        ans: "str.length"
    },
    {
        ques: "What will `console.log('Hello' + ' World')` output?",
        opt1: "HelloWorld",
        opt2: "Hello World",
        opt3: "Hello+World",
        opt4: "Error",
        ans: "Hello World"
    },
    {
        ques: "How do you convert a string to uppercase in JavaScript?",
        opt1: "str.toUpperCase()",
        opt2: "str.upper()",
        opt3: "str.toUpper()",
        opt4: "str.uppercase()",
        ans: "str.toUpperCase()"
    },
    {
        ques: "What will `'JavaScript'.charAt(4)` return?",
        opt1: "S",
        opt2: "c",
        opt3: "r",
        opt4: "i",
        ans: "S"
    },
    {
        ques: "How do you extract a part of a string?",
        opt1: "str.cut(0, 4)",
        opt2: "str.substring(0, 4)",
        opt3: "str.split(0, 4)",
        opt4: "str.extract(0, 4)",
        ans: "str.substring(0, 4)"
    },
    {
        ques: "Which method splits a string into an array?",
        opt1: "str.divide()",
        opt2: "str.split()",
        opt3: "str.break()",
        opt4: "str.array()",
        ans: "str.split()"
    },
    {
        ques: "What is the result of `'5' + 5`?",
        opt1: "10",
        opt2: "55",
        opt3: "NaN",
        opt4: "undefined",
        ans: "55"
    },
    {
        ques: "Which method is used to replace part of a string?",
        opt1: "str.replace()",
        opt2: "str.switch()",
        opt3: "str.change()",
        opt4: "str.update()",
        ans: "str.replace()"
    },
    {
        ques: "How do you check if a string contains a certain substring?",
        opt1: "str.has('text')",
        opt2: "str.contains('text')",
        opt3: "str.includes('text')",
        opt4: "str.find('text')",
        ans: "str.includes('text')"
    },
    {
        ques: "What will `'  Hello  '.trim()` return?",
        opt1: "'Hello'",
        opt2: "'  Hello  '",
        opt3: "'Hello  '",
        opt4: "'  Hello'",
        ans: "'Hello'"
    },
//javascripte method questions

    {
        ques: "Which method is used to convert a string to uppercase?",
        opt1: "toUpperCase()",
        opt2: "upperCase()",
        opt3: "uppercase()",
        opt4: "makeUpper()",
        ans: "toUpperCase()"
    },
    {
        ques: "Which method is used to convert a string to lowercase?",
        opt1: "lowerCase()",
        opt2: "toLowerCase()",
        opt3: "makeLower()",
        opt4: "convertLower()",
        ans: "toLowerCase()"
    },
    {
        ques: "Which method is used to find the length of a string?",
        opt1: "length()",
        opt2: "size()",
        opt3: "str.length",
        opt4: "str.size",
        ans: "str.length"
    },
    {
        ques: "Which method joins all elements of an array into a string?",
        opt1: "join()",
        opt2: "concat()",
        opt3: "merge()",
        opt4: "combine()",
        ans: "join()"
    },
    {
        ques: "Which method adds one or more elements to the end of an array?",
        opt1: "push()",
        opt2: "pop()",
        opt3: "shift()",
        opt4: "unshift()",
        ans: "push()"
    },
    {
        ques: "Which method removes the last element from an array?",
        opt1: "pop()",
        opt2: "shift()",
        opt3: "splice()",
        opt4: "delete()",
        ans: "pop()"
    },
    {
        ques: "Which method removes the first element from an array?",
        opt1: "pop()",
        opt2: "shift()",
        opt3: "removeFirst()",
        opt4: "cut()",
        ans: "shift()"
    },
    {
        ques: "Which method adds one or more elements to the beginning of an array?",
        opt1: "push()",
        opt2: "unshift()",
        opt3: "append()",
        opt4: "start()",
        ans: "unshift()"
    },
    {
        ques: "Which method is used to sort the elements of an array?",
        opt1: "order()",
        opt2: "arrange()",
        opt3: "sort()",
        opt4: "sequence()",
        ans: "sort()"
    },
    {
        ques: "Which method is used to reverse the elements of an array?",
        opt1: "invert()",
        opt2: "reverse()",
        opt3: "flip()",
        opt4: "turn()",
        ans: "reverse()"
    },
    {
        ques: "Which method extracts a section of an array without modifying it?",
        opt1: "splice()",
        opt2: "slice()",
        opt3: "cut()",
        opt4: "extract()",
        ans: "slice()"
    },
    {
        ques: "Which method changes the contents of an array by removing or replacing elements?",
        opt1: "slice()",
        opt2: "splice()",
        opt3: "cut()",
        opt4: "replace()",
        ans: "splice()"
    },
    {
        ques: "Which method is used to find the index of an element in an array?",
        opt1: "find()",
        opt2: "indexOf()",
        opt3: "search()",
        opt4: "getIndex()",
        ans: "indexOf()"
    },
    {
        ques: "Which method executes a function for each array element?",
        opt1: "map()",
        opt2: "forEach()",
        opt3: "filter()",
        opt4: "reduce()",
        ans: "forEach()"
    },
    {
        ques: "Which method creates a new array with elements that pass a test?",
        opt1: "filter()",
        opt2: "map()",
        opt3: "reduce()",
        opt4: "some()",
        ans: "filter()"
    },
    {
        ques: "Which method transforms each element in an array and returns a new array?",
        opt1: "forEach()",
        opt2: "map()",
        opt3: "filter()",
        opt4: "reduce()",
        ans: "map()"
    },
    {
        ques: "Which method applies a function against an accumulator and returns a single value?",
        opt1: "reduce()",
        opt2: "map()",
        opt3: "filter()",
        opt4: "find()",
        ans: "reduce()"
    },
    {
        ques: "Which method returns true if at least one element passes a test?",
        opt1: "every()",
        opt2: "some()",
        opt3: "filter()",
        opt4: "find()",
        ans: "some()"
    },
    {
        ques: "Which method returns true if all elements pass a test?",
        opt1: "every()",
        opt2: "some()",
        opt3: "map()",
        opt4: "filter()",
        ans: "every()"
    },
    {
        ques: "Which method searches for an element and returns it if found?",
        opt1: "find()",
        opt2: "search()",
        opt3: "filter()",
        opt4: "indexOf()",
        ans: "find()"
    },
    {
        ques: "Which method converts an object into a JSON string?",
        opt1: "JSON.parse()",
        opt2: "JSON.stringify()",
        opt3: "JSON.convert()",
        opt4: "JSON.toString()",
        ans: "JSON.stringify()"
    },
    {
        ques: "Which method parses a JSON string into an object?",
        opt1: "JSON.stringify()",
        opt2: "JSON.parse()",
        opt3: "JSON.convert()",
        opt4: "JSON.toObject()",
        ans: "JSON.parse()"
    },
    {
        ques: "Which method removes whitespace from both ends of a string?",
        opt1: "strip()",
        opt2: "trim()",
        opt3: "clear()",
        opt4: "remove()",
        ans: "trim()"
    },
    {
        ques: "Which method checks if a string starts with specified characters?",
        opt1: "startsWith()",
        opt2: "beginWith()",
        opt3: "checkStart()",
        opt4: "isStart()",
        ans: "startsWith()"
    },
    {
        ques: "Which method checks if a string ends with specified characters?",
        opt1: "endsWith()",
        opt2: "finishWith()",
        opt3: "checkEnd()",
        opt4: "isEnd()",
        ans: "endsWith()"
    },
    {
        ques: "Which method extracts a substring between two indices?",
        opt1: "slice()",
        opt2: "split()",
        opt3: "substring()",
        opt4: "cut()",
        ans: "substring()"
    },
    {
        ques: "Which method replaces part of a string with another string?",
        opt1: "replace()",
        opt2: "switch()",
        opt3: "update()",
        opt4: "change()",
        ans: "replace()"
    },
    {
        ques: "Which method returns the character at the specified index?",
        opt1: "charAt()",
        opt2: "getChar()",
        opt3: "char()",
        opt4: "indexChar()",
        ans: "charAt()"
    },
    {
        ques: "Which method returns the Unicode of the character at the specified index?",
        opt1: "charCodeAt()",
        opt2: "getUnicode()",
        opt3: "unicode()",
        opt4: "codeChar()",
        ans: "charCodeAt()"
    },
    {
        ques: "Which method searches for a match between a regular expression and a string?",
        opt1: "search()",
        opt2: "find()",
        opt3: "match()",
        opt4: "indexOf()",
        ans: "search()"
    },
    {
        ques: "Which method returns an array of matches found?",
        opt1: "search()",
        opt2: "match()",
        opt3: "find()",
        opt4: "replace()",
        ans: "match()"
    },
    {
        ques: "Which method concatenates two or more strings?",
        opt1: "combine()",
        opt2: "append()",
        opt3: "concat()",
        opt4: "merge()",
        ans: "concat()"
    },
    {
        ques: "Which method splits a string into an array of substrings?",
        opt1: "divide()",
        opt2: "split()",
        opt3: "separate()",
        opt4: "cut()",
        ans: "split()"
    },
    {
        ques: "Which method pads the start of a string with another string?",
        opt1: "padStart()",
        opt2: "startPad()",
        opt3: "padLeft()",
        opt4: "addStart()",
        ans: "padStart()"
    },
    {
        ques: "Which method pads the end of a string with another string?",
        opt1: "padEnd()",
        opt2: "endPad()",
        opt3: "padRight()",
        opt4: "addEnd()",
        ans: "padEnd()"
    },
    {
        ques: "Which method returns the index of the first occurrence of a specified value?",
        opt1: "search()",
        opt2: "indexOf()",
        opt3: "find()",
        opt4: "position()",
        ans: "indexOf()"
    },
    {
        ques: "Which method returns the index of the last occurrence of a specified value?",
        opt1: "lastIndexOf()",
        opt2: "indexOf()",
        opt3: "search()",
        opt4: "findLast()",
        ans: "lastIndexOf()"
    },
    {
        ques: "Which method checks whether a string includes a certain substring?",
        opt1: "has()",
        opt2: "contains()",
        opt3: "includes()",
        opt4: "find()",
        ans: "includes()"
    },
    {
        ques: "Which method repeats a string a specified number of times?",
        opt1: "repeat()",
        opt2: "multiply()",
        opt3: "loop()",
        opt4: "copy()",
        ans: "repeat()"
    },
    {
        ques: "Which method returns the calling string value converted to a number?",
        opt1: "parseInt()",
        opt2: "toNumber()",
        opt3: "Number()",
        opt4: "valueOf()",
        ans: "Number()"
    },
    {
        ques: "Which method returns the primitive value of a String object?",
        opt1: "valueOf()",
        opt2: "toString()",
        opt3: "getPrimitive()",
        opt4: "extract()",
        ans: "valueOf()"
    },
    {
        ques: "Which method is used to match a regular expression pattern in a string?",
        opt1: "match()",
        opt2: "search()",
        opt3: "find()",
        opt4: "check()",
        ans: "match()"
    },
    
    {
        ques: "What will `console.log(2 + 3)` output?",
        opt1: "5",
        opt2: "23",
        opt3: "undefined",
        opt4: "NaN",
        ans: "5"
    },
    {
        ques: "What will `console.log('Hello ' + 'World')` output?",
        opt1: "HelloWorld",
        opt2: "Hello World",
        opt3: "Hello+World",
        opt4: "undefined",
        ans: "Hello World"
    },
    {
        ques: "What will `console.log([1,2,3].length)` output?",
        opt1: "3",
        opt2: "2",
        opt3: "1",
        opt4: "undefined",
        ans: "3"
    },
    {
        ques: "What will `console.log([1, 2] + [3, 4])` output?",
        opt1: "1,23,4",
        opt2: "1,2,3,4",
        opt3: "1,2+3,4",
        opt4: "error",
        ans: "1,23,4"
    },
    {
        ques: "What will `console.log(typeof [])` output?",
        opt1: "array",
        opt2: "object",
        opt3: "undefined",
        opt4: "null",
        ans: "object"
    },
    {
        ques: "What will `console.log({name: 'John'}.name)` output?",
        opt1: "undefined",
        opt2: "null",
        opt3: "John",
        opt4: "error",
        ans: "John"
    },
    {
        ques: "What will `console.log(Object.keys({a:1, b:2}))` output?",
        opt1: "['a', 'b']",
        opt2: "[1, 2]",
        opt3: "['1', '2']",
        opt4: "undefined",
        ans: "['a', 'b']"
    },
    {
        ques: "What will `console.log([1, 2, 3].push(4))` output?",
        opt1: "4",
        opt2: "3",
        opt3: "5",
        opt4: "undefined",
        ans: "4"
    },
    {
        ques: "What will `console.log([1, 2, 3].pop())` output?",
        opt1: "3",
        opt2: "2",
        opt3: "1",
        opt4: "undefined",
        ans: "3"
    },
    {
        ques: "What will `console.log(Object.values({a:1, b:2}))` output?",
        opt1: "[1, 2]",
        opt2: "['a', 'b']",
        opt3: "undefined",
        opt4: "null",
        ans: "[1, 2]"
    },
    {
        ques: "What will `console.log([].length)` output?",
        opt1: "0",
        opt2: "undefined",
        opt3: "null",
        opt4: "1",
        ans: "0"
    },
    {
        ques: "What will `console.log({a:1, b:2}['b'])` output?",
        opt1: "2",
        opt2: "b",
        opt3: "undefined",
        opt4: "null",
        ans: "2"
    },
    {
        ques: "What will `console.log([1, 2, 3].indexOf(2))` output?",
        opt1: "1",
        opt2: "2",
        opt3: "0",
        opt4: "-1",
        ans: "1"
    },
    {
        ques: "What will `console.log([1,2,3].includes(4))` output?",
        opt1: "true",
        opt2: "false",
        opt3: "undefined",
        opt4: "error",
        ans: "false"
    },
    {
        ques: "What will `console.log({a:1, b:2}.hasOwnProperty('a'))` output?",
        opt1: "true",
        opt2: "false",
        opt3: "undefined",
        opt4: "error",
        ans: "true"
    },
    {
        ques: "What will `console.log(Array.isArray([1, 2, 3]))` output?",
        opt1: "true",
        opt2: "false",
        opt3: "object",
        opt4: "undefined",
        ans: "true"
    },
    {
        ques: "What will `console.log({x:10, y:20}.x + {x:5}.x)` output?",
        opt1: "15",
        opt2: "undefined",
        opt3: "NaN",
        opt4: "error",
        ans: "15"
    },
    {
        ques: "What will `console.log(['a', 'b', 'c'].join('-'))` output?",
        opt1: "a-b-c",
        opt2: "abc",
        opt3: "a,b,c",
        opt4: "error",
        ans: "a-b-c"
    },
    {
        ques: "What will `console.log(Object.entries({a:1, b:2}))` output?",
        opt1: "[['a',1], ['b',2]]",
        opt2: "[1,2]",
        opt3: "[a,b]",
        opt4: "undefined",
        ans: "[['a',1], ['b',2]]"
    },
    {
        ques: "What will `console.log([...Array(3).keys()])` output?",
        opt1: "[0, 1, 2]",
        opt2: "[1, 2, 3]",
        opt3: "[3, 2, 1]",
        opt4: "error",
        ans: "[0, 1, 2]"
    },
    
    {
        ques: "Which method is used to attach an event handler to an element?",
        opt1: "attachEvent()",
        opt2: "addEventListener()",
        opt3: "setEvent()",
        opt4: "onEvent()",
        ans: "addEventListener()"
    },
    {
        ques: "What is the correct syntax to add a click event listener?",
        opt1: "element.addEventListener('click', function)",
        opt2: "element.onClick = function",
        opt3: "element.add('click', function)",
        opt4: "element.listen('click', function)",
        ans: "element.addEventListener('click', function)"
    },
    {
        ques: "Which parameter specifies the type of event in addEventListener?",
        opt1: "target",
        opt2: "type",
        opt3: "handler",
        opt4: "listener",
        ans: "type"
    },
    {
        ques: "What is the purpose of the third parameter in addEventListener?",
        opt1: "It sets the event type",
        opt2: "It indicates whether the event should bubble or capture",
        opt3: "It defines the event handler",
        opt4: "It removes the event listener",
        ans: "It indicates whether the event should bubble or capture"
    },
    {
        ques: "How do you remove an event listener in JavaScript?",
        opt1: "element.removeEventListener('click', function)",
        opt2: "element.deleteEvent('click', function)",
        opt3: "element.remove('click', function)",
        opt4: "element.off('click', function)",
        ans: "element.removeEventListener('click', function)"
    },
    {
        ques: "Which event occurs when the user presses a key on the keyboard?",
        opt1: "keydown",
        opt2: "keypress",
        opt3: "keyup",
        opt4: "All of these",
        ans: "All of these"
    },
    {
        ques: "What will this code output if a button is clicked?\n`button.addEventListener('click', () => console.log('Clicked'))`",
        opt1: "Clicked",
        opt2: "click",
        opt3: "error",
        opt4: "undefined",
        ans: "Clicked"
    },
    {
        ques: "Which event occurs when the user moves the mouse over an element?",
        opt1: "mousemove",
        opt2: "mouseover",
        opt3: "mouseenter",
        opt4: "All of these",
        ans: "All of these"
    },
    {
        ques: "How do you prevent the default behavior of an event inside the handler?",
        opt1: "return false",
        opt2: "event.preventDefault()",
        opt3: "event.stop()",
        opt4: "event.cancel()",
        ans: "event.preventDefault()"
    },
    {
        ques: "Which event is fired when the user submits a form?",
        opt1: "submit",
        opt2: "change",
        opt3: "click",
        opt4: "focus",
        ans: "submit"
    }








];

let i = 0;
let score = 0;
function loadQuestion() {
    let Q = document.getElementById("Q");
    Q.innerHTML = `Q.${i + 1}:${questions[i].ques}`;


    let opta1 = document.querySelector("#A+label");
    opta1.innerText = `${questions[i].opt1}`;
    let A = document.getElementById("A");
    A.value = questions[i].opt1;
//console.log(A.value);

    let opta2 = document.querySelector("#B+label");
    opta2.innerText = `${questions[i].opt2}`;
    document.getElementById("B").value = questions[i].opt2;

    let opta3 = document.querySelector("#C+label");
    opta3.innerText = `${questions[i].opt3}`;
    document.getElementById("C").value = questions[i].opt3;

    document.querySelector("#D+label").innerText = questions[i].opt4
    document.getElementById("D").value = questions[i].opt4;
}
loadQuestion();
function next() {
    // document.getElementById("res").style.display="none";
    sec=60;
    let userans = document.querySelector("input[type='radio']:checked");
  //  console.log(userans.checked);
  //  console.log(userans);
   // console.log(userans.value);
    if (userans) {
        if (userans.value === questions[i].ans) {
            score++;
        }
        userans.checked = false;
    }
    i++;
   // console.log(i);
    if (i == questions.length - 1) {
        document.querySelector("#n").innerHTML = "submit";
        document.querySelector("#n").style.backgroundColor = "green";
        
        
    }
    if (i == questions.length) {
        document.querySelector(".box").innerHTML = `<h4 id="ans">Your Score is ${score} out of ${questions.length} </h4> ` 
        return;
    }
    loadQuestion();

}

function Back() {
    sec=60;
    i--;
    if (i < 0) {
        i = questions.length - 1;
    }
    loadQuestion();


}

function reset() {
    i = 0;
    score = 0;

    loadQuestion();
}
let sec = 60;
let myTimer = setInterval(() => {
    document.querySelector(".timer>h2").innerHTML=sec;
      if (sec == 0) {
        
        next();
        sec=60;
    }
    if(sec<=10){
        document.querySelector(".timer>h2").style.color="red";
    }else{
        document.querySelector(".timer>h2").style.color="white";     
    }
    sec--;
  
}, 1000)


