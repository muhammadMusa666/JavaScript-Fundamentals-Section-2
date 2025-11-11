// Arrays:
// Now, We Will Be Talking About Our First Data Structure, Arrays,
// This Is A Very Long And Detailed Topic, So I Will Try To Keep It Short,
// So If You Dont Understand Something, Go To MDN, Or Search On The Web,
// So Let's Begin:

// So, Let's Say If, I Want To Store My Friends Names In Variables,
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Josh';
// Now This Is Very Long, And Imagine We Have More Friends,
// And So Thats Why We Use Arrays, Which Helps Us Bundle These Values,
// Into A Bigger Container, Where We Can Throw Variables, And Reference Them Later,
// And We Use It When There Is More Than One Value,
// Also The Two Most Important Data Strucutres,
// Atleast In JavaScript, Are Arrays And Objects,
// Also Make Sure, The Comma's Are Outside The Strings,
// Alot Of People Mix Them, In The Strings, Which Is An Error,
const friends = ['Michael', 'Steven', 'Peter']; // <-- Element 0, 1, 2
console.log(friends);
// And This Is Just The Basics, You Can Add Unlimited Values To It,
const Years = new Array(1991, 1984, 2008, 2020); // And So On,
// And This Time We Used "Array" Which Is A function, Or So Called The Array function,
// We Also Needed To Use The New Keyword, Which Is Needed To Make It Work,

// Now We Made Arrays, Now We Need To Get Them Out,
// And For That We Use The Square Bracket Syntax,
// The One We Used For The "friends" Before,
// So Lets Say We Want To Log The First Element,
// Of The "friends" Array, Which Would Be Michael,
console.log(friends[0]);
// And By The Way, Arrays Are Zero Based,
// So The First Element Will Be Zero, Then 1, And So On,
// Like This, If We Want Peter, It Would Be 2,
console.log(friends[2]);
// We Can Also Get The Number Of Elements In The Array By Using This:
console.log(friends.length);
// And This Will Log, 3, Since There Are Three Elements,
// And To See The Last Element, We Do This:
console.log(friends[friends.length - 1]);
// So You Can Keep Increasing The Number And It Will Return Elements Before That,
// Like If I Did -2, It Would Return Steven, And Son On Until The Elements In The Array End,
// And Yes, We Can Put Not Only Strings And Numbers, But Expressions Aswell,
// Also The ".length" Is Also Called A Property, Like Many Others That Can Be Used There,
// But Anyways As You Know, Expressions Produce A Value,

// Now We Can Also Use The Square Bracket Syntax, To Add Elements Aswell,
// So Lets Say, That We Are No Longer Friends With Peter,
// And That I Have Replaced Him With Someone Else,
// Now We Can Change, Or Mutate The Array In The Same Way,
friends[2] = 'John';
console.log(friends);
// Now In The Console. You Might See That We Have The Original Set Of Elements,
// But As We Move Along Through The Code, The Changes Will Occur,
// But Wait, The Variables Declared With const Cant Be Changed Right?
// Well We Were Able To Change The Element Of The Array,
// Because Arrays Are Not A Primitive Value,
// And Only Primitive Values Are Immutable,
// We Will Discuss It In The Future So Don't Worry😄,
// And For Reference, We Can Not Replace The Entire Array, So We Can't Do This:
// friends = ['Alex', 'Oliver', 'James'];

// Now, I Will Explain How Arrays Can Hold Values With Different Types, At The Same Time,
// So Lets Say, This Array Holds All Kinds Of Info About Me,
const firstName = 'Muhammad';
const musa = [firstName, 'Musa', 2032 - 2011, // <-- The String 'Muhammad' Can Be Replaced With "firstName",
    'Developer', friends
];
// We Could Also Use Variables Instead, So I Could Do "firstName",
// Then Give It My First Name, And Use It Instead Of The Strings,
console.log(musa);
console.log(musa.length);


// For Fun, Lets Work On A Small Array Exercise,
// So We Can See Why Arrays Are So Useful,
// So Lets Use The "calcAge" function Again, Why Not, Am I Right😅?
// Exercise:
const calcAge = function (birthYear) {
    return 2032 - birthYear;
}
const years = [1990, 1969, 1967, 2002, 2010, 2016,];
// console.log(calcAge(years)); // <-- Can't Do This
// Now Here We Cant Use The Array As An Argument,
// Because It Expects A Single Value, And It Will Show "NaN"
// And This Just Shows, That We Can't Do Many Operations With Arrays,
// But We Can Use The "calcAge" function, On The Individual Elements Of The Array Of Course,
// So Lets Do That:
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
// Now Let's Use Them Like This:
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
// Now They Are All Nicely Placed Into This Array,
// I Hope You Understand, And See How Fun Arrays Are,
// Even If They Are Hard For You, Later, They Will Be Very Useful
// I Made This Shorter, So I Recommend You Search On The Web Or MDN For More Info,
// And I Put Alot Of Effort Into This So I Hope You Enjoy, Happy Coding🫡