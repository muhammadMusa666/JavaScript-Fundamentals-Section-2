// // Dot VS Bracket Notations:
// // Today We Will Learn How To Change Data In Objects,
// // Using The Dot And Bracket Notation,
// // This Is A Long Topic, So I Will Try To Make It Short,
// // And I Hope You Will Get It Then😄, And If You Don't Understand Something,
// // Search Online, Go To MDN Or Ask AI's, Because Since I Will Make This Short,
// // There Is A High Chance You Won't Understand Some Parts,
// // So I Recommend Doing Just As I Said,
// const jason = {
//     firstName: 'Jayson',
//     lastName: 'Voorhees,',
//     age: 2032 - 1991,
//     job: 'Unknown',
//     friends: ['Michael', 'Fred']
// };
// console.log(jason);
// // This Is Just A Simple Object,
// console.log(jason.lastName); // <-- Dot Notation, 
// console.log(jason['lastName']); // <-- Bracket Notationm
// // Now In The Bracket Notation, We Can Actually Put Any Expression That We'd Like,
// // So We Don't Have To Explicitly Write The String Here,
// // But Instead, We Can Compute It From Some Operation,
// // And Remember, An Operation Is Basically An Expression, Which Produces A Value,
// // And So We Can Put That Inside The Brackets,
// // So Let's Actually Try That, And Let's Say,
// // That We Had A Variable In Which We Store The Repeating Part,
// // In The firstName And lastName,
// // Both Have "Name" At The End, And Store That In A Variable,
// const nameKey = 'Name';
// console.log(jason['first' + nameKey]);
// console.log(jason['last' + nameKey]);
// // Now In The Square Brackets Or Bracket Notation,
// // We Can Put In Any Expression,
// // This Is Confusing At First Glance, So I Hope You Get Through It Soon😅,
// // Also, This Can't Happen With The Dot Notation, As Shown:
// // console.log(jonas.'last' + nameKey) <-- This Would Simply Not Work,

// // And So, While We Can Enter Computed Property Names In Bracket Notations,
// // We Can Only Enter The Actual Property Name In Dot Notations,
// // For Example, We Can Only Use lastName If We Want To Print The Last Name,
// // So, When Do We Use Bracket Notations Then?
// // And We Use It When We Need To First Compute The Property Name,
// // Then We Have To Use The Bracket Notation Obviously,
// // But, Except For That, I Suggest Using The Dot Notations,
// // Which Results To Easier To Use, Simpler, And Cleaner Code,
// // Here's Another Example So You Really Understand When To Use Bracket  Notations,
// // So Let's Say That We Don't Know Yet That Which Property We Want To Show,
// // And Instead We Get This Information From Some User Interface,
// const interestedIn = prompt('What Do You Want To Know About Jason? Choose Between firstName, lastName, Age, Job, And Friends');
// // I Hope You Remember What Prompt Does😅,
// // Also Remember That This function Will Return A String,
// // And This String, We Just Need To Store Into Some Variable(interestedIn),
// console.log(interestedIn);
// // Now If You Pick Anyone Of Them, It Will Print In The Console,
// // And Now We Have To Give It The Info,
// // To Display Whatever Property You/User Chose Into the Console,
// // And If We Do This:
// console.log(jason.interestedIn);
// // It Would Return Undefined, Because, undefined Only Shows,
// // When We Try To Acces A Property On An Object That Does Not Exist,
// // And jason, Does Not Have A Property Called "interestedIn" Right?
// // Now The Dots Are Probably Connecting In Your Head😄,
// // And Instead Of The Dot Notation, We Use The Bracket Notation,
// // Since We Can Enter Any Expression In It,
// console.log(jason[interestedIn]);

// // Now We Could Pass In Something Else In The Prompt,
// // Which Does Not Exist In The Object, Like "location",
// // So Now Let's Use Some Knowledge That We Have,
// // So We Know That undefined Is A Falsy Value, Right?
// // And So, We Can Use That To Our Advantage Now, And Make Some Logic,
// // That Prints A Custom String, Whenever The User Tries To Access,
// // A Property That Does Not Exist In The Object,
// if (jason[interestedIn]) {
//     console.log(jason[interestedIn]);
// } else {
//     console.log('Wrong Request! Choose The Designated Options');
// }

// // Now, Let's Also Learn How To Use Both The Dots And The Brackets Notations,
// // To Add New Properties To The Object, And Thats Pretty Straight Forward,
// jason.location = 'California';
// jason['twitter/X'] = '@JasonVoorhees';
// console.log(jason);


// // Now Here Is A Challenge, Its A Small One, And A Bit Hard,
// // So If You Fail Or Don't Get It Right, Don't Worry!
// // Challenge:
// // Jason Has 2 Friends, And His Best Friend Is Michael,
// // Now You Have To Make This Without Hard-Coding The Entire Thing,
// // And If You Keep Scrolling Down, You'll Find The Solution,
// // So Do It Yourself In The Middle Empty Space, Or Create A New File For It!

// // Here's The Solution:
// console.log(`${jason.firstName} Has 
//     ${jason.friends.length} Friends, And
//     His Best Friend Is Called ${jason.friends[0]} `);
// // I Hope You Passed This Mini Challenge, And Most Importantly,
// // Understood Everything We've Learnt So Far😊.
















// Today, We Will Learn About Object Methods,
// This Is Also Pretty Detailed, So I Recommend You Search Online,
// Visit MDN, Or Ask AI's, Because There Is A High Chance,
// That You Wont Understand Some Things Because Of How Detailed This Will Be,
// So Either Way, I Hope You Understand And Avoid Most Confusions😄!

// So We've Learnt That Objects, Just Like Arrays,
// Can Hold Different Types Of Data, They Can Hold Arrays,
// And Even Hold Objects Inside Of Objects,
// But Now We Will Take It Further,
// Remember When I Said That functions Are Just Another Type Of Value,
// That Means That We Can Create A Key Value Pair,
// In Which The Value Is A function, And By Now,
// You Probably Knew That functions Can Be Added To Objects,
const john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1991,
    job: 'Professor',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2032 - birthYear;
    // }

    // calcAge: function () { // <-- We Dont Use The Parameter Here, And Use "this" Instead,
    //     console.log(this); // <-- If We Run This, Then It Will Print The Whole Object,
    //     return 2032 - this.birthYear; // <-- And We Use "this" Before The Property Name,
    // }
    // We Will AGAIN, Use The calcAge function, Which Has Become Our Favorite Now😅,
    // Now If We Compare It With A Normal function, There Isnt Much Of A Difference,
    // Except That calcAge Isnt A Variable, Instead A Property Of The Object,
    // And Also, Any function That Attached To An Object, Is Called A Method,
    // Now Just Like Any Other Property, We Can Acces The New calcAge Property/Method,
    // console.log(john.calcAge()); // <-- Here, "john" Is Calling The Method,
    // console.log(john['calcAge']());
    // Now Writing The Value Of The Property birthYear, Isnt Ideal,
    // Because You Could Get It Wrong, And Even If You Don't,
    // Its Still Not Ideal, Because We Are Violating The "Don't Repeat Yourself" Rule,
    // So What If We Could Actually The birthYear Property,
    // Directly From The Object, Instead Of Passing It In?
    // Well, We Can, Because In Every Method, JavaScript Gives Us Access,
    // To A Special Variable Called "this", Yes That One,
    // And It Is Basically Equal To The Object On Which The Method Is Called,
    // Or In Other Words, Is Equal To The Object Calling The Method,
    // And The Object That Is Calling The Method Is "john",
    // We Will Learn More About "this" In The Future,
    // And By Now Some Of You Might Think, The "this" Keyword Is Useless,
    // Because Why Can't We Just Do This:
    // john.birthYear
    // Instead Of:
    // this.birthYear,
    // Well That Would Still Violate The Don't Repeat Yourself Priniciple,
    // Because, What If You Need To Change The Object Name?
    // Then We'll Have To Change It Everywhere,

    // Now Lets Take This Further, And Don't Worry, It Won't Be As Confusing😅,
    // It Will Just Be A Smaller Variation Of This,
    // Now Lets Say, What If We Want To Acces The Age,
    // Multiple Times Throughout Our Program, So This Would Work,

    // console.log(john.calcAge());
    // console.log(john.calcAge());
    // console.log(john.calcAge());
    // console.log(john.calcAge());
    // Now This Is Bad Practice, And Not The Best Way To Do This,
    // Instead, We Can Just Calculate The Age Once, Then Store It In The Object,
    // And When We Need It Later, We Can Just Retrieve The Age,

    calcAge: function () {
        this.age = 2032 - this.birthYear;
        return this.age;
    },


};
// Now We Can Do This:
console.log(john.calcAge())

console.log(john.age);
console.log(john.age);
console.log(john.age);
console.log(john.age);

// I've Also Got Another Challenge For You, And Again, Dont Worry If You Fail,
// Or Dont Get It Perfectly Right😄
// So, I Want You To Write A Method Called "getSummary",
// Which Should Kind Of Summarize The Data About john,
// Or Any Other Person Name You Were Using,

// Challenge:
// "John Is A 46-Year Old Professor, And He Has A Drivers License"
// And Solve This Either In The Large Empty Space Below,
// Or Make Another File And Try It There,
// And If You Scroll Down Enough Here, You'll Find The Solution,























































































// Here's The Solution, And Cut The Commented Out Part,
// And Paste It Inside The Object Below The Method, After Uncommenting It Obviously,
// getSummary: function () {
//     return `${this.firstName} Is A ${this.calcAge()}-Year Old
//     ${jonas.job}, And He Has ${this.hasDriversLicense ? 'a' : 'no'} Drivers License`
// }
console.log(john.getSummary());
// By The Way, You Might Be Thinking, We Can Use The age Property Aswell,
// Well I Say We Do calcAge, because We Cannot Assume,
// That calcAge Was Already Called Before,
// And If We Don't Call calcAge Before We Call getSummary,
// Then The age Property Would Not Exist,
// So This Is Very Confusing And Difficult To Understand,
// Even For Me, So Don't Worry If You Dont Understand Some Of It,
// Because That Is Why I Recommend Searching Online, Visiting MDN, Or Asking AI's😊,
