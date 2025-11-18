// Iteration: The for-loop:
// Today We Will Discuss And Learn About for-loops,
// And As We Know That An if-else Statment Is A Control Structure,
// There Are More Control Structures Like That, And for-loop Is One Of Them,
// Also I Saw That I Had Accidentally Made The Object Methods Topic,
// With The Dot Vs Bracket Notations Topic, So I Just Changed It,
// Sorry For The Inconvenience😅,
// By The Way, Loops Are Our Final Big Topic In This JavaScript Fundamentals 2 Folder,
// So By Then, You Have Learnt The Main Fundamentals Of JavaScript😄!

// Now for-loops Basically Allow Us To Automate Repetitive Tasks,
// So, Tasks That We Have To Perform Over And Over Again,
// For Example, Think Of Us Being In A GYM, We Lift A Set Of Weights,
// And We Do It 10 Times, So We Could Do This,
// console.log('Lifting Weights Repetition 1');
// console.log('Lifting Weights Repetition 2');
// console.log('Lifting Weights Repetition 3');
// console.log('Lifting Weights Repetition 4');
// console.log('Lifting Weights Repetition 5');
// console.log('Lifting Weights Repetition 6');
// console.log('Lifting Weights Repetition 7');
// console.log('Lifting Weights Repetition 8');
// console.log('Lifting Weights Repetition 9');
// console.log('Lifting Weights Repetition 10');
// But You Probabaly Know What I'm Gonna Say,
// That This Is Obviously Not Good Practice,
// Because Here, We're Just Hard-Coding And Keep Repeating It, Just Changing The Number,
// And So Instead Of Making All Of This, We Can Use Loops,
// So Let's Implement The for-loop Now, Which Has A Counter,
// And It Looks Similar To The if-else Statement,
// And Also, The Loop Statement Has 3 Parts, And Its First Part,
// Is The Initial Value Of The Counter, And The Counter, Using This Example,
// The Counter Is The Value That Will Start At 1 And Go All The Way To 10,
// So Let's Call It Wrap For Now, Which Stands For Repitition,
for (let rep = 1; rep <= 10; rep = rep + 1) {
    // Now We Start Our 2nd Part, Which Is The "rep <= 10",
    // And It Is Evaluated Before Each Itertion Of The Loop,
    // So Before Each Time The Code In The Loop Is Executed,
    // And For Those Who Dont Know, In This Case, It Means That,
    // "Repetition Must Be Below Or Equal Than 10",
    // And You Must Know, The for-loop Keeps Running If The Condition Is True,
    // And Immediatly Stops When It Is False,
    // So Then Comes The 3rd Part, Where We Increase The Counter,
    // And You Need To Write Semicolons Before Each Part,
    // And Now We Will Update The Counter After Each Iteration,
    // And That Is Necessary Right Now, Because The Counter Would Just Stay At 1 Forever,
    // And So This Condition Would Never Be False,
    // So What We Do Here, Is We Increase The Counter By One After Each Iteration,
    // And So, We Wrote "rep++", By The Way, This "rep = rep + 1",
    // Also Works, But The "rep++" Is A Much Simpler Way To Do So,
    // Alright, Now All We Have To Do, Is Write The Code That We Want To Be Repeated,
    console.log(`Lifting Weights Repetition 1 ${rep}`);
}
// Now It Works Exactly As We Wanted, A Quick Note Aswell,
// If You Do It Without Using Template Literals,
// It Won't Print It 10 Times In The Console,
// It Will Just Show The Number 10,
// Or Whatever Number You Chose It To Be Repeated, Beside It,
// So Thats All For Now, In The Next Few SubRepos,
// I Will Teach And Show More Use Cases For Loops And for-loops,
// So, I Hope You Enjoy Learning And Going On This Journey With Me😊,
// Happy Coding!