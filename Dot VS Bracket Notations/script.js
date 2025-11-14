// Dot VS Bracket Notations:
// Today We Will Learn How To Change Data In Objects,
// Using The Dot And Bracket Notation,
// This Is A Long Topic, So I Will Try To Make It Short,
// And I Hope You Will Get It Then😄, And If You Don't Understand Something,
// Search Online, Go To MDN Or Ask AI's, Because Since I Will Make This Short,
// There Is A High Chance You Won't Understand Some Parts,
// So I Recommend Doing Just As I Said,
const jason = {
    firstName: 'Jayson',
    lastName: 'Voorhees,',
    age: 2032 - 1991,
    job: 'Unknown',
    friends: ['Michael', 'Fred']
};
console.log(jason);
// This Is Just A Simple Object,
console.log(jason.lastName); // <-- Dot Notation, 
console.log(jason['lastName']); // <-- Bracket Notationm
// Now In The Bracket Notation, We Can Actually Put Any Expression That We'd Like,
// So We Don't Have To Explicitly Write The String Here,
// But Instead, We Can Compute It From Some Operation,
// And Remember, An Operation Is Basically An Expression, Which Produces A Value,
// And So We Can Put That Inside The Brackets,
// So Let's Actually Try That, And Let's Say,
// That We Had A Variable In Which We Store The Repeating Part,
// In The firstName And lastName,
// Both Have "Name" At The End, And Store That In A Variable,
const nameKey = 'Name';
console.log(jason['first' + nameKey]);
console.log(jason['last' + nameKey]);
// Now In The Square Brackets Or Bracket Notation,
// We Can Put In Any Expression,
// This Is Confusing At First Glance, So I Hope You Get Through It Soon😅,
// Also, This Can't Happen With The Dot Notation, As Shown:
// console.log(jonas.'last' + nameKey) <-- This Would Simply Not Work,

// And So, While We Can Enter Computed Property Names In Bracket Notations,
// We Can Only Enter The Actual Property Name In Dot Notations,
// For Example, We Can Only Use lastName If We Want To Print The Last Name,
// So, When Do We Use Bracket Notations Then?
// And We Use It When We Need To First Compute The Property Name,
// Then We Have To Use The Bracket Notation Obviously,
// But, Except For That, I Suggest Using The Dot Notations,
// Which Results To Easier To Use, Simpler, And Cleaner Code,
// Here's Another Example So You Really Understand When To Use Bracket  Notations,
// So Let's Say That We Don't Know Yet That Which Property We Want To Show,
// And Instead We Get This Information From Some User Interface,
const interestedIn = prompt('What Do You Want To Know About Jason? Choose Between firstName, lastName, Age, Job, And Friends');
// I Hope You Remember What Prompt Does😅,
// Also Remember That This function Will Return A String,
// And This String, We Just Need To Store Into Some Variable(interestedIn),
console.log(interestedIn);
// Now If You Pick Anyone Of Them, It Will Print In The Console,
// And Now We Have To Give It The Info,
// To Display Whatever Property You/User Chose Into the Console,
// And If We Do This:
console.log(jason.interestedIn);
// It Would Return Undefined, Because, undefined Only Shows,
// When We Try To Acces A Property On An Object That Does Not Exist,
// And jason, Does Not Have A Property Called "interestedIn" Right?
// Now The Dots Are Probably Connecting In Your Head😄,
// And Instead Of The Dot Notation, We Use The Bracket Notation,
// Since We Can Enter Any Expression In It,
console.log(jason[interestedIn]);

// Now We Could Pass In Something Else In The Prompt,
// Which Does Not Exist In The Object, Like "location",
// So Now Let's Use Some Knowledge That We Have,
// So We Know That undefined Is A Falsy Value, Right?
// And So, We Can Use That To Our Advantage Now, And Make Some Logic,
// That Prints A Custom String, Whenever The User Tries To Access,
// A Property That Does Not Exist In The Object,
if (jason[interestedIn]) {
    console.log(jason[interestedIn]);
} else {
    console.log('Wrong Request! Choose The Designated Options');
}

// Now, Let's Also Learn How To Use Both The Dots And The Brackets Notations,
// To Add New Properties To The Object, And Thats Pretty Straight Forward,
jason.location = 'California';
jason['twitter/X'] = '@JasonVoorhees';
console.log(jason);


// Now Here Is A Challenge, Its A Small One, And A Bit Hard,
// So If You Fail Or Don't Get It Right, Don't Worry!
// Challenge:
// Jason Has 2 Friends, And His Best Friend Is Michael,
// Now You Have To Make This Without Hard-Coding The Entire Thing,
// And If You Keep Scrolling Down, You'll Find The Solution,
// So Do It Yourself In The Middle Empty Space, Or Create A New File For It!

































































// Here's The Solution:
console.log(`${jason.firstName} Has 
    ${jason.friends.length} Friends, And
    His Best Friend Is Called ${jason.friends[0]} `);
// I Hope You Passed This Mini Challenge, And Most Importantly,
// Understood Everything We've Learnt So Far😊.