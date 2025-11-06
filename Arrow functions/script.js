// So There Was Also A Third Type Of function That Was Added In ES6,
// And Thats The Arrow function, It Works Quite Similar To The function Expression,
// And I Will Be Using The function Expression From The Last Subrepo As An Example,
// function Expression:
// const calcAge2 = function (birthYear) {
//     return 2032 - birthYear;
// }

// Arrow function:
const calcAge = birthYear => 2032 - birthYear;
const age1 = calcAge(1991); // <-- The Same As The Other Types,
console.log(age1)
// Here We Also Have To Store This function Into A Variable,
// Just Like How We Do It With function Expressions,
// Also, Arrow functions Are Like The Special Form Of function Expressions,
// Because It Kind Of Still Is A feunction Expression Actually,
// But The Arrow function As You Can See Is Alot Easier And Faster To Write,
// Because, Firstly, We Dont Need The Curly Braces, Like In The function Expression,
// To Define A Code Block, Secondly, The return Actually Happens Implicitly,
// Meaning It returns The Value Automatically, Without Us Having To Say It Explicitly,
// So This Makes The Arrow function Excellent For Simple One-Liner functions,
// And In The Future, It Will Be Extremely Helpful in Certain Situations,
// And To Call The function, We Do It The Same Like The Other functions,
// But, Then It Gets A Bit Complicated When We Add More Parameters Or More Code,
// So Lets Create A New function, And Lets Say That We Want To Calculate,
// How Many Years A Person Has Left Until Retirement,
// And Here, We Are Back To Needing Curly Braces,
// Because Now Its A Multiline Statement, And They Require Curly Braces,
// And When Its Multiline, You Also Have To Return It Manually,
const yearsUntilRetirement = (birthYear, firstName) => { // <-- If We Have Multiple Parameters, We Wrap Them In Parenthesis,
    const age = 2032 - birthYear
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Tyler'));
console.log(yearsUntilRetirement(1984, 'Vincent'));
// And This Time, When We Run This function We Will Put It Directly Into The console.log,
// And We Get The Right Answer In The Console,
// Also, If We Add More Parameters Or Code In The Arrow function,
// It Keeps On Getting Complex, And So We kinda Lose Its Advantage,
// Now You Might Be Asking The Same Question As Before,
// "Which function Should I Use? Should I Use Arrow functions For Everything,
// Since Their So Easy To Write?", Well, That's A No,
// And Thats Because There Is A Fundamental Difference Between The Arrow function,
// And Other More Traditional functions, So function Declarations and Expressions,
// Its That The Fact That Arrow functions Don't Get A So-Called "This" Keyword,
// And When You Search About Arrow functions On The Internet,
// You Will Definitly See Them Telling You About The "This" Keyword,
// But We Will Discuss That In The Future😄.












