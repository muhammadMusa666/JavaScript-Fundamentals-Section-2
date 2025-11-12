// Basics Of Arrays:
// Now, We Will Be Learning The Core Basics Of Arrays,
// There Are Countles Array Methods In JavaScript,
// But We Will Only Be Learning The Basic Ones, For Now Atleast,
// And We We Will Be Using The "friends" Array For Now,
// Now We Will First Start With A Method Called "Push"
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push['Adam'];
console.log(friends);
console.log(newLength);
// So, This "{push" Method Is Used To Add An Element At The End Of An Array,
// Also, "push" Is Technically A function, And We Can See That By The Parenthesis,
// And Basically We Call That function Really Attached To The Friends Array Itself,
// And Thats For That Dot Or Period Stands For,
// So Again, "push" Is A Method, Which Technically Is A function,
// That We Call Directly On The friends Array,
// And If Your Wondering Why, We'll Discuss It Later In The Future,
// But There Is A Good Reason Why This Works, And Its Pretty Fascinating Stuff,
// Now, Since "push" Is A function, It Can Also Return Something,
// So We Already Know That We Can Pass Arguments,
// Into functions, Like How We Did It Here With Jay,
// And Then It Does Its Work, And In This Case, The "push" Actually Does Return A Value,
// And That Is The Length Of The New Array,
// And If We Want To Capture That Value, We Can Create A New Variable For That,
// That Is Why We Added The "newLength" Variable,

// So That Was The "push" Method That Adds Elements At The End,
// And Now, There Is Also A Method To Add Elements At The Beginning Of The Array,
// And That Is Called The Unshift Method,
friends.unshift('Vincent');
console.log(friends);
// And You Can See It In The Console, The Length Is Now 5, And The Name's At The Beginning,
// Also, This Case And Onwards, I Won't Save The Values In A Variable Unless Its Important,

// Next Up, We Also Have Methods To Remove Elements From Array,
// Like This One, Which Removed The Last Element In The Array,
// Aswell As The Complete Opposite Of The "push" Method,
// And We Will Start With The Pop Method,
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);
// And There Is No Needed Info Really That Goes In The Parenthesis,
// To Basically Just Take Out The Last Element,
// So Now, In The Console, The Last Element, Which Was "Jay", Is Gone,
// And This One Does'nt Return The Length Of The New Array,
// Instead It Returns The Removed Elements,

// We Also Have Another Method To Remove Elements,
// And That Is The Shift Method, Which Removes The Starting Element,
// So Again, Basically The Complete Opposite Of The Unshift Method,
friends.shift();
console.log(friends);
// And Once Again, We Did'nt Need To Add Arguments, Because It Is Not Needed,
// And Once Again, This Method Will Also Return The Removed Element,

// Now There Is Also A Very Useful Method That Informs Us,
// About In Which Position A Certian Element Is In The Array,
console.log(friends.indexOf('Michael'));
console.log(friends.indexOf('Jeremy'));
// And This Should Return The Value 0,
// Because Michael Is The First Element Right Now,
// And If Try It With An Element That Is Not There, We Get -1,

// And Now Finally To Finish This Subrepo,
// There Is A Very Similar Method To "indexOf",
// Which Is A Bit More Modern,
// And In My Opinion, The Most Useful,
// So This One Is An ES6 Method, And It's Called "Includes",
// So "Includes" Instead Of Returning The Index Of The Element,
// Will Simply Return True If The Element Is In The Array, And False If Not,
friends.push(16);
console.log(friends.includes('Michael'));
console.log(friends.includes('Jeremy'));
// console.log(friends.includes('16'));
console.log(friends.includes(16));
// And So, For Michael It Will Be True, And False For Jeremy, And I Already Told You Why,
// And This Method Also Uses The Strict Equality Operator,
// So If We Added 16 And Then If We Checked For 16 To String,
// It Would'nt Work, And Return's False, And The Reason Is,
// Because It Uses The Strict Equality Operator, It Does'nt Do Type Coercion,
// But If We Test It Directly With Just The Number, It Works And Returns True,

// We Can Use The Includes Method To Write Conditional Aswell,
// Which Is One Of The Very Useful Applications Of This Method,
if (friends.includes('Steven')) {
    console.log('You Have A Friend Called Steven');
}
// And That;s Probably The Most Used Application Of The Includes Method,










