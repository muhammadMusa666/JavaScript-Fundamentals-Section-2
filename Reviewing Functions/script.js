// Review/Conclusion:
// We Will Today Reviewing function And Everyhing We've Learnt So Far,
// So We Will Likely Use functions That We Have Used Before,

// Arrow function:
// So First, We Will Use The "yearsUntilRetirement" function,
// Which We Used To Discuss And Learn About Arrow functions,
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement
//     return `${firstName} Retires In ${retirement} Years`;
// }
// Here We Will Try To Convert It Into A Normal function Expression,
// And How Do We Do That? Well, We Simply Remove The Arrow,
// And Then Write The function Keyword, As Shown:
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement
//     return `${firstName} Retires In ${retirement} Years`;
// }

// Calling A function In Another function:
// Now We Could Export The functionality There,
// Which If You Dont Know, Are The "const age = 2037 - birthYear",
// And "const retirement = 65 - age;"
// So We Could Export Them Into Another function,
// Meaning We Will Call A function In Another function,
// Which We Learned In The Previous Subrepo,
// And For Example, We Can Use The "calcAge" function To Do So,
// const calcAge = function (birthYear) {
//     return 2032 - birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = 2032 - birthYear;
//     const retirement = 65 - age;
//     // return retirement
//     return `${firstName} Retires In ${retirement} Years`;
// }
// Now You Might Find It Confusing That We Have Two Different functions Here,
// With The Same Parameter Names, Which Is "birthYear",
// But That's Not A Problem At All, So Even If They Have The Same Parameter Names,
// They Are Not At All Related To Eachother, And They're Completely Different Parameters,
// So Just Like Two Different Variables, We Could Even Have A Variable Outside,
// Of Any Of The functions, Which Could Also Be Called "birthYear",
// But I Don't Want To Confuse You By Showing It,
// Since This Is Only A Review Or A Conclusion Of What We've Learnt😅,
// But What Matters Here, Is That Each Of The Parameters,
// Are Really Just Like A Local Variable To Each function,
// Now Lets Go Ahead And Make This Work, And Calculate The Age,
// Based On The function That We Just Wrote:
const calcAge = function (birthYear) {
    return 2032 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    // const age = 2032 - birthYear; From This,
    const age = calcAge(birthYear); // <-- To This,
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
        console.log(`${firstName} Retires In ${retirement} Years.`);
    } else {
        return -1;
        console.log(`${firstName} Has Already Retired 🎊`);
    }
}
// console.log(yearsUntilRetirement(1991, 'Vincent'));
// console.log(yearsUntilRetirement(1964, 'William'));
// And Here, You Might Already Know How This Works,
// The Arguments Replace The Paramters, Which Are Just Placeholders,
// And Replaces The Value Of The Arguments To Them,
// So Every "birthYear" Becomes 1991, And firstName Becomes "Vincent", And So On,
// Now, If The Retirement Is -1 Or More, It Means That Person Has Retired,
// So, We Want A Decision For That Purpose, And So, We Use The if-else Statement,
// Also Keep In Mind, That We Have To console.log, Before The return In Both Cases,

// Now, The Actual Reveiw Starts Here,
// So First We Have The 3 Types Of functions,
// Function Declaration, Function Expression, And Arrow Function,
// Function Declaration:
// Its A Function That Can Be Used Before It's Declared,
// function calcAge(birthYear) {
//     return 2032 - birthYear;
// };
// Function Expressions:
// They Are Essentially A Function Value Stored In A Variable,
// const calcAge = function (birthYear) {
//     return 2032 - birthYear;
// };
// Arrow function:
// Great For A Quick One-Line function,
// Has No "this" Keyword(Discussed Is The Future),
// const calcAge = birthYear => 2032 - birthYear;

// They Are Three Different Ways Of Wrtiting functions,
// But They All Work In A Similiar Way:
// Receive Input Data, Transform Data, And Then Output Data,

// So Now, Lets Dive Deeper, I Will Show You The Anatomy Of A Function:
function calcAge(birthYear, firstName) {
    const age = 2032 - birthYear;
    console.log(`${firstName} Is ${age} Years Old`);
    return age;
}

const age = calcAge(1991, 'Jeremy');
// So Usually, A function Needs A function Name, Which In This Case Is "calcAge"
// Then, It Also Has Parameters, Which In This Case Are "birthYear" And "firstName",
// And These Parameters Are Essentially Placeholders, That Receive Input Values,
// So Like I Said Before, They Are A Little Bit Like Local Variables Of A function,
// So Variables That are Defined, Only Inside Of This Very function,
// Now You Also Already Know, We Use functions To Reuse Pieces Of Code,
// And These Pieces Of Code, Are Inside The function Body,
// The Place Which Processes The function's Input Data, And Then Returned,
// And By The End Of The function, We Usually Have A Return Statement,
// Which We Use To Output A Value From The function,
// And Also The return Statement Immediatly Terminates The function's Execution,
// And Now About Calling The function, We Do That By Using Parenthesis,
// So We Write The Name Of The function Like We Did Here With calcAge,
// And Then With A Parenthesis We Call The function,
// And Because Without The Parenthesis, The function Is Really Just A Value,
// But With The Parenthesis, We Actually Called The function,
// We Can Also Say That We Run/Invoke/Execute The function, Which Mean The Same Thing😄,
// Now In This Case, Since This function Has Parameters, We Then Call The function,
// With Arguments, And These Arguments Are The Actual Values Of The function's Parameters,
// So We Use These, To Input The Actual Data Into The function,
// And We Can Also Imagine This, As Replacing The Placeholders(Parameters),
// Then Once The calcAge function Has Finally Done Its Job,
// Then All Of This Expression Will Basically Be Replaced By The Returned Value,
// So In This Case The "age" That Was Replaced Here, And That Age Value,
// Is What We Then Store, Into This "age" Variable,
// And So We Use This Variable To Basically Save The Returned Value,
// That Was Outputed From The function,
// Now One Think I Want To Make Clear, The console.log,
// Has Nothing To Do With Returning A Value, It Simply Prints A Message To The console,
// But It Has Nothing To Do With Returning, Actually, The console.log,
// Is Just Another function Call Inside The calcAge function,
// Because console.log Itself Is A function,
// And So The Argument That We Pass Into The console.log function,
// Will Get Printed To The Console, Thats Basically It! I Hope You Enjoyed This Review😄,