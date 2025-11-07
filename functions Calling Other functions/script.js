// Sometimes, We Need To Add More functions For Each Specific Task,
// Which Works Great If You Do It Right, And Makes Your Code Better To Understand,
// And So, Here We Have This "fruitProcessor" function, If You've Been Following Along,
// You May Remember It, But Anyways, This fruitProcessor function Works,
// When We Give It A Certain Amount Of fruits, Like Oranges And Mangoes,
// To Make Juice, So We Will Expand It, And Say, It Can Only Make Juice,
// From Smaller Fruit Pieces, Meaning We Need Another Machine(function),
// To Cut The Fruits, Into Multiple Smaller Pieces,
// Fruit Slicer Machine(function):
function slicePieces(fruit) { // <-- Then The "slicePieces" Becomes The Argument For This "slicePieces" function, And Will Replace The "fruit" Parameter, So The "fruit" Now Also Has The Value Of 2, 3,
    return fruit * 4; // <-- Then The "fruit" Here Gains Those Values, Which Will Then Be Multiplied By 4,
}
// Fruit Processor Machine(function):
function fruitProcessor(oranges, mangoes) { // <-- The "oranges" and "mangoes" New Value Of 2 And 3,
    const orangePieces = slicePieces(oranges); // Will Then Be Used To Call "slicePieces",
    const mangoPieces = slicePieces(mangoes); // So These Ones, 
    // ^^^The returned Value Goes To The "slicePieces" Above, And Then Be Stored In Its Variables^^^,
    const juice = `Juice With ${orangePieces} Orange Pieces And ${mangoPieces} Mango Pieces.`;
    return juice;
}
console.log(fruitProcessor(2, 3)); // <-- Numbers(Arguments) Replace The Parameters Of "oranges, mangoes",
// So Now, Here Both The functions Or "Machines" Are Done,
// And Let Me Explain, We Use Our New Machine(function),
// To Cut The Received Oranges And Mangoes, In 4 Pieces,
// Then We Use It To Make The Juice, And Now Lets Analyze The Data Flows,
// So Down At The fruitProcessor function, With The Arguments Of 2 And 3,
// It Replaces The Parameter Placeholders Of oranges And mangoes,
// So oranges Holds The Value Of 2 And mangoes Holds 3,
// Which Will Then Be Used To Call The "slicePieces",
// Then They Will Become The Argument And Replace The slicePieces function At The Top,
// Meaning The "fruit" Parameter Will Be Replaced And Hold The Value Of 2, 3,
// And The "fruit" At the return Will Now Have Those Values, And Will Multiply By 4,
// And Then, It Will return That Value,
// To The slicePieces That Are Holding oranges And mangoes,
// And Then, That Value Will Be Stored In Their Variables Of "orangePieces" And "mangoPieces"
// Which Then Is Used In The Template Literals, I Hope You Understand😅,
// Take A Moment To Re-Read And Analyze This And What I Explained To You 🫡,

// Now You Might Be Asking, "Why Not Simply Multiply Both Of The Input Values By Four?"
// So We Can Do That Of Course, By Saying "orangePieces" And "mangoPieces",
// Equals oranges And mangoes Times Four, But We Did It This Way, For Multiple Reasons,
// Firstly, It Is Very Common For One function To Call Another function,
// Just Like I Showed You, And Secondly, This Is Also A Very Good Example,
// To Illustrate The "DRY" Principle, For Example,
// Lets Say We Need To Change The Cutting Machine From 4 Pieces To 3,
// We Would Have To Change Everything Manually,
// If The Number Of Fruits To Cut Was Like 10 For Example,
// If We Did Simply Multiplied The Value By The Given Number,
// So, By Doing It Like This, We Only Have To Change The Multiple Once,
// And It Changes The Whole Thing, So We Don't Have To Write It Everywhere Manually,
// And Here, We Dont Have To Repeat Ourselves,












