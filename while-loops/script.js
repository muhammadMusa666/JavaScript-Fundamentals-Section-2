// While-Loops:
// So Previously, We Had Learnt All About The for-loops,
// But There Is Another Type Of Loop In JavaScript,
// And It's Called The while-loop,
// So Lets Use The Weight Lifting Example Again,
// And We Will Keep It For Comparison Basically,
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting Weights Repetition ${rep} 🏋️‍♀️`);
}
// Now Let's Do The Same Thing Using The while-loop,
// And Just So You Know, In A while-loop,
// We Can Only Specify The Condition,
// We Cannot Specify The Initialization And The Final Expression Like In A for-loop,
// let rep = 1; <-- Initialization
// rep++; <-- Final Expression
// While We Can Only Specify The Condition Here,
// rep <= 10; <-- Condition
// So Basically, It Is Called The while-loop Because,
// It Will Keep Running The Loop While The Condition Is TRUE,
// And Also, Now We Have To Manually Define The Initialization And The Final Expression,
let rep = 1; // Initialization
while (rep <= 10) {
    // console.log(`WHILE: Lifting Weights Repetition ${rep} 🏋️‍♀️`); Commented Out To Avoid Filling The Console,
    rep++; // Final Expression
}
// Now This All Means That The while-loop Is More Versatile Than The for-loop,
// And It Can Be Used In More Situations, Because,
// It Does Not Really Need A Counter(Initialization), And Only Needs A Condition,
// And That Condition, Can Be Any Condition,
// So It Doesnt Have To Be Related To Any Counter At All,
// But In This Case, We Use The Counter Because We Need It,
// So You Can See Why It Is More Flexible,

// So This Time, Lets Create An Example Which Does Not Require A Counter,
// And Instead, It Will Depend On A Random Variable,
// And Lets Say, We Want To Roll A Dice, And Keep Rolling It Until We Get A 6,
// And When We Roll A 6, We Stop, So Essentially,
// We Want To Keep Rolling The Dice While The Rolled Dice Is Different From 6,
let dice = Math.trunc(Math.random() * 6) + 1;
// By The Way, The Way That We Implement This,
// Does Not Matter At This Point And To You,
// We Will Learn More About Random Numbers, Later In The Future,
// So For Now, Basically Just Dont Worry About It, And Leave It As It Is,
while (dice !== 6) {
    console.log(`You Rolled A ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Rolled A 6, Loop Has Finished...');
    }
}
// Now Here, The Dice Will As We Know, Keep Rolling Between 1 And 6,
// And If Thats Different, Then The Loop Will Run,
// But Then It Would Keep Running Forever, Which Is Called An Infinite Loop,
// So To Avoid That, We Can Keep Creating New Dice Values,
// And We Are Going To Reassign This Value(let dice = Math.trunc(Math.random() * 6) + 1;),
// At The End Of Each Iteration, Now If We Roll A 6,
// It Will Just Stop The Loop Without Printing Anything,
// So That's Why We Have Put An if-else Statement Here,
// Oh And When You Roll A 6 On The First Try,
// Nothing Will Be Printed In The Console,
// Because The Condition Is Not Met From The Beginning😅,
// So The Conclusion Of This, Is That While-loops Are More Flexible Than for-loops,
// And That They Dont Have To Depend On Any Counter Variable,
// So When You Have A Situation When You Do Not Know How Many Iterations You Need To Do,
// The while-loop Is The Right Tool For The Right Job,

// Alright, And With This, We Have Finally Finished The Fundamentals Part 2 Section😄!,
// It Was Not Easy To Reach This Point, But You Made It,
// So Congratulations, Because You Deserve It👏,
// And Are Now Basically An Average JavaScript Developer,
// So Keep Going, And Keep Practicing, Keep Coding🫡,
// And Soon Enough, You Will Become An Expert,
// So See You In The Next Section, And Once More, Happy Coding!🚀








