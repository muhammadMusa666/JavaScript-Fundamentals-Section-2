// Objects:
// Today We Will Learn Another Major Data Structure Of JavaScript,
// Which Are Objects, So Just So You Know,
// We Have Been Using Arrays As Data Structures Up Until This Point,
// To Basically Store Multiple Related Values, In The Same Variable,
// So As A Recap, This Is How It Works, You Don't Have To Write This,
// Its Only To Refresh Your Mind So You Know How It Works,
const exampleArray = [
    'Jeremy',
    'Bolt',
    2032 - 1991,
    'Guard',
    ['Vincent']
];
// So The Problem With Arrays Is That We Can't Give These Elements A Name,
// And Can Only Reference Them by Their Order Number In Which They Appear In The Array,
// And To Solve That Problem, We Have The "Object" Data Structure In JavaScript,
// So In Objects, We Actually Define Key Value Pairs, And Then,
// We Can Give Each Of Them These Values Shown In The Arrays, A Name,
// And Instead Of The Square Brackets, We Use The Curly Braces,
// Now We Say This Many Times, In A Code Block, if-else Statement, switch statement,
// And Even In functions, But This Is Different, So Don't Get Confused😅,
// And So We Will Fill This Object With Key Value Pairs,
// Which The Key, Is Basically The Variable Name
const George = {
    firstName: 'George',
    lastName: 'Davidson',
    age: 2032 - 1991,
    job: 'teacher',
    friends: ['Clay', 'Nicholas'],
};

// Now Objects, Are Probably The Most Fundamental Concept,
// In The Whole Of The JavaScript Language,
// So There Are Many Ways Of Creating Objects,
// And Writing It Like This, Is Probably The Simplest Way Of Creating An Object,
// But Using The Curly Braces Like This Is The Easiest One,
// Which Is Also Called, the Object Literal Syntax,
// Because We are Literally Writing Down The Entire Object Content
// So As A Recap, Just Like Arrays, We Use Objects To Essentially Group Together,
// Different Variables That Really Belong Together, Much Like The Object Shown,
// Now The Big Difference Between Them, Is That In Objects,
// The Order Of These Values, Does Not Matter At All, When You Want To Retrieve Them,
// And In Arrays, Its Basically Just The Opposite,
// So We Can Only Acces Array Elements, Using Their Order Number,
// This Means That We Should Use Arrays For More Order Data,
// And Objects For Unstructured Data, Aswell As Data That We Want To Name,
// Then Retrieve From The Object, So Thats It! This Was Short But I Hope You Enjoy!