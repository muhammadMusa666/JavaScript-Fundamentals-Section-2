// Looping Backwards And Loops In Loops:
// Today, We Will Do 2 Things, First, We Will Learn How To Loop Backwards,
// And Second, We Will Learn How To Loop Inside Of Other Loops,
// So Lets Have Some Fun With Arrays Now,
// So We Will Use The john Array Again...Which Has Been Used Too Many Times Now😑,
// And For Now, Lets Keep It At 5 Elements,
const john = [
    'John',
    'Doe',
    2032 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];
// So Previously We Looped From The Beginning All The Way To 4,
// Now We Will Do The Opposite, So From 4 To 0,
for (let i = john.length - 1; i >= 0; i--) {
    console.log(i, john[i]);
}
// Now Here, We Tell JavaScript, To Stop The Counter When It Reaches 0 Or Less,
// And We Also Decrease The Counter By 1 In Each Iteration,
// Instead Of The Previous Increase(i++), Which Is(i--),
// And Basically, The Counter Starts At The Last Element Of The Array,
// Which Is The Length - 1, Because Arrays Start Counting From 0,
// So In This Case, It Starts From 4, And Decreases To 0,
// And The Rest Is Of Course The Same As Before,
// Now This Might Not Be Useful In Many Cases,
// But Still, It Is Important To Know,
// And I Did This So We Could Again Think How To Define A Counter,

// Now, I Want To Show You How We Can Loop Inside Of A Loop,
// And It Isnt That Difficult Either,
// So To Do This, Lets Go Back To Our GYM Example From Before,
// So There We Had 10 Repetitions For A Certain Weightlifting Exercise, Remember?
// But Now, Lets Say That We Have 3 Different Exercises,
// And We Want To Repeat Each Of Them 5 Times, So A Total Of 15 Repetitions,
// So To Do This, We Will Need A Loop Inside Of Another Loop,
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--- Starting Exercise ${exercise} ---`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting Weight Repetition ${rep} 🏋️‍♀️`);
    }
}
// Now Everything That I Have Shown You Today, Is Very Important,
// Even If There Is A High Chance That You Wont Use It Daily That Much,
// It's A Good Example To Show You Some Power Of Loops,
// Just Make Sure That You Dont Go Too Deep, Because It Will Get Confusing😅,
// So This Was Quite Short, But I Hope,
// You Learned Something New Today In Our Coding Journey,
// And I Will See You In The Next One, Happy Coding😄!













