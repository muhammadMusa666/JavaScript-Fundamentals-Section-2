// function Declarations:
// In The Previous SubRepo, We Only Declared The functions,
// Which Are Called "function Declarations", Like A Variable,
// But In JavaScript, There Are Different Ways In Writing functions,
// And Each function, Works In A Slightly Different Way,
// But Dont Worry, They're All Still Pretty Similar 😅,
// Here We Have Given The function's Variable,
// Which Is Called A function Name, Or function Identifier,
// And So I Will Call It function Name After This,
// So Again, The function Name, We Have Given It A Parameter,
// I Don't Know If I Mentioned This Before,
// But Parameters Are Like Local Variables,
function calcAge1(birthYear) { // The "birthYear" Is The Parameter In The function Or function Name, Whatever You Want To Call It 😄
    // const age = 2032 - birthYear; // <-- This Is How We Do It,
    // return age; // But This Is Too Long;
    return 2032 - birthYear; // <-- And So This Is The Shortest Solution,
}
const age1 = calcAge1(1991); // <-- The "1991" Is The Argument To Fill The Parameter
console.log(age1);
// As You Can See In The Example, We Are Calculating The Age,
// And It Can Also By Simplified Like It Says,
// Also Some People Define Arguments And Parameters As If They're The Same,
// Which Is'nt A Big Deal, For Precise Clarification,
// The Parameter Is The Placeholder In The function Or function Name,
// Again, Whatever You Want To Call It, And The Argument,
// Is The Actual Value That We Use To Fill In That Placeholder That Is The Parameter,
// And Now, Like I Told You Before, There Will Be A Value That Is Returned,
// From The "calcAge1" function, And So, We Need To Save That Value Into A Variable,
// So We Gave The "calcAge1" A Variable, Which Is "age1",

// function Expressions:
// So That Was A function Declaration, Now We Will Learn About function Expressions,
// So Basically Writing A function Without A Name,
// But We Still Define The Parameter, As Shown:
const calcAge2 = function (birthYear) {
    return 2032 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
// Here We Do It Like It Says, And We Put The Whole Thing In A Variable,
// And Now That Variable Will Be The function(calcAge2),
// Now It Is Basically A function Without A Name,
// Which Is Also Called An Anonymous function,
// And All Of This Is An Expression, And Remember,
// That An Expression Produces A Value, And We Use That And Store It Into "calcAge2",
// And We Call It In Basically The Same Way, And console.log To Test It,
// Now The function Declaration And Expression Might Seem Very Similar,
// Thats Because They Are, And Its Important To Know Them Both,
// Because In Some Situations, You Will Have To Write Them Like This,

// Also, functions Are Actually Just Values In JavaScript,
// So Just Like A Number, String Or Boolean, Because the Expression Part,
// As You Know, Expressions Produce Values, And We Assign Them To Variables,
// Like How We Assigned The function Expression To The "calcAge2",
// And So function Is Not A Type, Like A Number Type,

// And One Key Difference Between functions Declarations And Expressions,
// Are That We Can Actually Call function Declarations, Unlike Expressions,
// Before They Are Defined In Our Code, So Like Above The Main function, As Shown Below:
// const age1 = calcAge1(1991);

// function calcAge1(birthYear) {
//     return 2032 - birthYear;
// }
// And So, It Is Not Necessary To Do It Like This, But Its On You,
// And Its Your Choice Which Type Of functions To Use Mostly,
// But Either Way, Its Still important To Learn Both,
// So Dont Just Pick One And Forget The Other One
