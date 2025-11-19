// Looping Arrays, Breaking And Continuing:
// Today, We Will Explore More Features Of The for-loop,
// And Also Create Useful Examples For Them,
// Now, One Of The Most Used Applications Of for-loops, Is To Loop Arrays,
const john = [
    'John',
    'Doe',
    2032 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
const types = [];

// From This, This Is What We Want To Acheive:
// console.log(john[0]),
// console.log(john[1]),
// ...
// console.log(john[4]),
// john[5] And Onwards Does NOT Exist,

for (let i = 0; /*i < 5*/i < john.length; i++) {
    console.log(john[i], typeof john[i]);

    // Filling The "types" Array (These Both Work):
    // types[i] = typeof john[i];
    types.push(typeof john)
}

console.log(types);
// Now The Condition, Or The 2nd Type, Is The Hardest Part Here,
// Because The 5 Is Actually Hard-Coded, So,
// Suppose That We Add Another Property To The Array,
// It Will Not Show In The Console Because Of It Being The 5th Property,
// So We Use Something That Is Dynamically Calculated,
// And, We Used john.length To Do So, Which Works Exactly How We Want,
// So In A Nutshell, This Is Basically How We Use for-loops To Loop Arrays,
// Now, What We Did Here Was Just Read Values From An Array,
// So Now, Lets Also At The Same Time, Create A New Array,
// Which Will Contain, this typeof each element, Did You Get That😅?
// And If That Sounds Useless, Then Keep In Mind, These Are For Education Only,
// And To Help You On Your JavaScript Journey,
// So, Instead Of Making It Here, We Will Make It Below The john Array Above,
// And Keep In Mind, It Will Be An Empty Array,

// Also, To Make Sure That We Actually Understand Completely,
// Lets Try A More Practical Example, So Lets Go Back To birthYears....Again😑,
const years = [1991, 2005, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2032 - years[i]);
}
console.log(ages);
// Now Let Me Explain, So As We Know, We Cannot Do Operations,
// Between Simple Values And An Array, So We Cannot Do 2032 - years,
// So In This Loop, We Basically Did It Individually,
// So We Did The Calculation One By One, And In Each Iteration Of The Loop,
// We Calculated 2032 Minus This Year, And Then Added It,
// To The First Position In The ages Array, Then We Did 2032 Minus 2005,
// And Put It At The End Of The Gaes Array Again

// And Now To Finish, Lets Learn To Important Statements About Loops,
// Which Is The "Break" And "Continue" Statements,
// So Continue Is Used To Exit The Current Iteration Of The Loop,
// And Continue To The Next One, On The Other Hand,
// Break Is Used To Completely Terminate The Whole Loop,
// So First, Lets Say That We Only Want To Print Elements To The Array, That Are Strings,
// And The Continue Statement Is Perfect For This,
// Because With Continue, We Can Exit The Current Iteration Of The Loop,
console.log('--- ONLY STRINGS ---');
for (let i = 0; /*i < 5*/i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;

    console.log(john[i], typeof john[i]);
}
// So This Just Skipped Everything In The Array Except The Strings,
// Also, The Line Of Code Below, Will Now Not Be Executed,
// In The Current Iteration, It Will Not Even Be Reached,
// Now We Will Try The Break, So Lets Say, That We Want To Log No Other Elements,
// After We Found A Number, So Essentially,
// After A Number Is Found, Nothing Else Should Be Printed
console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; /*i < 5*/i < john.length; i++) {
    if (typeof john[i] === 'number') break;

    console.log(john[i], typeof john[i]);
}
// This Now Runs Exactly How We Wanted It To,
// And Again, The Last Line Of Code Does Not Run,
// Because The Entire Loop Is Terminated After A Number Was Found,
// So This Is The End For This Subrepo,
// There Are Only A Few Subrepo's Left In This JS-Fundamentals-2 Folder,
// So If Your Still Here, And Learning To Code On This Journey,
// You Have Almost Reached The Top😄, After You've Learnt Both Fundamentals,
// You Will Have The Basic Knowledge Every JavaScript Developer Should Have,
// So Your Basically An Average JavaScript Developer Now🫡,
// Just Make Sure You Dont Forget Anything,
// And I Am Not Saying You Should Memorize Everything😅,
// But Either Way, If You've Reached This Point, You Can Do Better,
// So I Hope You Enjoy Learning With Me, Happy Coding😊!