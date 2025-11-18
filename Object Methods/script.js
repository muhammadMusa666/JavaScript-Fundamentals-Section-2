// Object Methods:
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
