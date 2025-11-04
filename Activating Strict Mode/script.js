// Strict Mode Helps Us Write A More Secure JavaScript Code,
// To Activate Strict Mode, It Is Really Easy,
// Just Do Type This:
'use strict';
// We Can Also Activate Strict Mode For A Specific function Or Block,
// But I Don't Really See The Point In Doing That,
// Of Course If You Want You Can, Everyone Has Different Coding Styles,
// This One Is Just Not For Me,
// Strict Mode Also Helps Us Devs To Avoid Accidental Errors,
// Thats Because Strict Mode Forbids Us To Do Certain Things,
// And It Will Create Visible Errors For Us,
// Meaning If You Do Something Wrong In Your Code Without Knowing,
// It Will Show It To You Instead Of Just Failing Silently,
// Here's An Example Of One Of The Most
// Important Changes That Strict Mode Introduces:
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // <-- If Variable Changed, Error Will Not Appear
if (hasDriversLicense) console.log('I Can Drive :D');
// Here If You Change The Variable Of "hasDriversLisence",
// To Something Else, And Run The Code, No Error Will Appear,
// The console.log Will Not Run, But There Will Be No Error,
// And If You Change It To The Original Variable,
// It Will Run The Code Again,
// Strict Mode Also Introduces A Short List Of Variable Names,
// That Are Reserved For Features That Might Be Added To The Language A Bit Later,
// For Example, Lets Try This Reserved Variable:

// const interface = 'Audio';
// const private = 666;

// There Is Still Alot We Have'nt Learnt About Yet About Strict Mode,
// Like How Its Used In function, objects,
// Setting Properties On Primitive Values, And Many Many More,
// I Will Also Keep On Using Strict Mode In The Future,
// So I Recommend You Do The Same, But Thats On You And Your Style To Code 😀










