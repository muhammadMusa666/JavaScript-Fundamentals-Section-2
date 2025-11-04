// The Fundamental Building Block Of Real World JavaScript Applications Are functions,
// Now What Are functions? In The More Simple Form Of functions,
// It Is Simply A Piece Of Code That We Can Reuse Over And Over Again,
// So Its Kinda Like Variables, But For Whole Chunks Of Code,
// So Basically, A Variable Holds One Value,
// While A function Can Hold One Or More Complete Lines Of Code,
function logger() {
    console.log('My Name Is Unknown');
}
logger(); // <-- This Has No Parameter
// In The Curly Braces, The Code Will Execute When We Run The function,
// And I Only Did One console.log, But You Can Do As Much As You Want,
// Since function's, As I Told You Before, Can Run One Or More Lines Of Code,
// Then To Use The function, We Simply Type The function Name
// In This Case, "logger", Followed By A Parenthesis/Rounded Braces/Brackets,
// And The More Variables You Add, The More It'll Show In The Console,

// But functions Can Do Alot More Than Simply Reusing A Piece Of Code,
// So, Usuall When We Write functions, We Can Also Pass Data Into The functions,
// Additionally, A function Can Also Return Data Aswell,
// Which Means, It Gives Us Data Back,
// That We Can Then Use For Something Else In The Program,
// So That Means It Can Receive Data And Return Data Back,
// For Example:

function fruitProcessor(Oranges, Mangos) { // <-- The Two Parameters
    // console.log(Oranges, Mangos); // <-- We Dont Really Need It, So I Commented It Out
    const juice = `Juice from ${Oranges} Oranges
    And ${Mangos} Mangos.`;
    return juice;
}

// fruitProcessor(0, 4); // <-- Input Value To Fill Parameters, Also Called An Argument,

// Now Here, The Variable's Parameters,
// Which In This Case Are Oranges And Mangos,
// They Are Basically Empty Spaces We Need To Fill Out,
// And So We Give Them Their Values From The Variable At The End,
// And Again To Run/Call/Invoke The function Aswell,
// And Because Of The "return", It Returns The Value Of The Variable "juice",
// And So It Will "return" The Value In The Console, I Hope You Can Understand 😅,
// Now You Might Be Saying: "What About The Juice We Produced?",
// Well, It Was "returned" From The function,
// Which Basically Means That The Result Of Running The Variable,
// In This Case "fruitProcessor", Is The Juice That We Just 'returned',
// So When This Code Is Executed, The "fruitProcessor" Variable's Value,
// Will Be Replaced With The Juice String,
// The "fruitProcessor" Variable's Value Is Also Called An 'Argument',
// And I Will Call These Variable's Arguments From Now On,
// And Now If We Want To Use That Argument That Was "returned" But Replaced,
// We Need To Store It In A Variable, Like This:
const mangoJuice = fruitProcessor(0, 4); // <-- 0 And 4 Are Arguments
console.log(mangoJuice);

// Now, Thanks To The Power Of functions,
// We Can Reuse The function With Diferent Input Values,
// And Then Get A Different Output,
const orangeMangoJuice = fruitProcessor(2, 6); // <-- 2 And 6 Are Arguments
console.log(orangeMangoJuice);
// As A Conclusion, We Can Say That functions Allow Us To Write More Maintanable Code,
// Because With functions, We Can Create Reusable Chunks Of Code,
// Instead Of Manually Writing The Same Code Over And Over Again,
// And So Thats The Most Important Thing You Need To Know About functions,
// And When You Learn That, You Will Know When You Should Actually Use functions,
// And This Is Actually A Very Important Principle Of Writing Clean Code,
// That Is Used In Programming All The Time, And This Is Principle Is Called,
// Don't Repeat Yourself, Or Dry, We Should Keep Our Code Dry,
// Which Means We Should Not Repeat Ourselves, And So Functions Are Perfect For Implementing Dry Code,
// Because They Are Reusable Code Blocks, That Make Up All Applications,
// Also, Fun Fact, console.log Is Actually Also A function, But One That Is Built In,
// And You Might See, They Work Similarly, We Write the function, Then The Parenthesis,
// Then Write Our Values, Variables, Or Parameters/Arguments!
// The "Number" Works The Same:
const num = Number('23');
// As You Can See, There Are Many More Built In functions Like This, I Hope You Understand 😅
// I Will Leave This Now For You To Analyze, This Was Much Harder To Make,
// So I Hope You Enjoy Learning With Me 😀.




