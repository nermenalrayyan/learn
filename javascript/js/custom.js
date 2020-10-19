/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// If Condition

// Function Code
/* 
ال function تعيد البيانات ولا تطبعها مباشرة لا وظيفتها ليس طبع البيانات وظيفتها فقط عمل مهمة معينة وانا اتحكم في طباعتها بطريقة ال return
*/ 

function checkGender()
{
    gen=f.gender.value

    if (gen === 'male')
    {
       alert("Welome Mr: Amer")
    } 

    else {
            alert("Welome Miss: Nermen")
    }

}






// الطريقة الاولى لكتابة الfunction 
function sayHello(name, gender) // gender = نوع الجنس لتحديد صياغة الرسالة
{
    if (gender === 'Male') {
        console.log(`Hello Mr ${name}`);
    } else if (gender === 'Female') {
        console.log(`Hello Miss ${name}`);
    } else {
        console.log(`Hello ${name}`); // يوضع ثالث اختيار في حال كان هنالك اختيار غير الاثنين الموضوعين مثل عدم اظهار نوع الجنس فيوضع هذه الاختيار فقط عند الحاجة
    }

}
sayHello("Nermen1", "Female");
sayHello("Amer1", "Male");
sayHello("Unknown");
// sayHello("Nermen1");


// الطريقة الثانية لكتابة الfunction والاهم

/* function sayHello (name, gender) // gender = نوع الجنس لتحديد صياغة الرسالة
{
    return `Hello ${name}`; // تدعى هذه العلامة `` ب backtick 
} 

console.log(sayHello("Nermen2", "female"));
console.log(sayHello("Amer", "male"));
console.log(sayHello("Unknown"));
*/



/*
* {} = Curly Braces

* [] = Square Backets

* `  = Back Tick
*/



// Echo vs Return 

/*
* === ثلاثة يساوي وظيفتها يقارن النوع مع ال value اذا كان number ام string
يفضل استخدام ثلاثة يساوي تحديدا في ال js
* == ثنين يساوي وظيفته مقارنة ال value فقط
*/

// if Condiction Code
/* 
if ( Condition ) {

} elseif ( Other Condition) {

}  else {

}
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Array 

// Array Code
/* var myArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myArray [0]); // يستدعي بيانات معينة الموضوعة في ال var 
// Zero Based Index [0] 0 = 1 يبدء الاستدعاء من رقم 0 وليس 1 فاذا وضعنا رقم 7 فسوف يعطيني البيانات رقم 8
var myDiv = document.querySelectorAll("span");
console.log(typeof myArry); // لمعرفة نوع ان كان number او opject او string وغيره   
console.log(myDiv [3]); // يستدعي البيانات الموجودة في ال html من ال class او ال id او ال tag
*/ 


 var myArray = ["Fatma", "Mustafa", "Ahmed", "Amira", "Dalia", "Eman"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);

document.querySelectorAll('span')[0].innerHTML = myArray[0];
document.querySelectorAll('span')[1].innerHTML = myArray[1];
document.querySelectorAll('span')[2].innerHTML = myArray[2];
document.querySelectorAll('span')[3].innerHTML = myArray[3];
document.querySelectorAll('span')[4].innerHTML = myArray[4];
document.querySelectorAll('span')[5].innerHTML = myArray[5]; 









// For Code
var myArray = ["Fatma", "Mustafa", "Ahmed", "Amira", "Dalia", "Eman", "Osama", "ali"];

// for (var i = 0; i < 10; i++ ) 
for (var i = 0; i < myArray.length; i++ ) 
{
//  console.log(i);
console.log(`Hello ${myArray[i]}`);

}


// انشاء عنصر
for (var i = 0; i < 10; i++) // نسخ الكود
 {
var mainElement = document.createElement('div');

var maintext = document.createTextNode('for code');
 mainElement.className = 'block';

mainElement.appendChild(maintext);

document.body.appendChild(mainElement);

}

// console.log(mainElement);



var myEnglishLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

for (var i = 0; i < myEnglishLetters.length; i++) // نسخ الكود
 {
var mainElement = document.createElement('div');

mainElement.className = `block ${myEnglishLetters[i].toLowerCase()}`; //toLowerCace = يصغر الحرف لانه سوف يوضع في ال class 

mainElement.appendChild(document.createTextNode(myEnglishLetters[i]));

document.body.appendChild(mainElement);

}
/*

  * loop = يساعد على تكرار الكود لأكبر عدد بدلا من تكراره يدويا

  * for = أستطيع تكرار اي عدد احتاجه من الاكواد
    
    for (Initial Counter; Condition; Action)
    // black of code
    // i = يمكن تغيرها ولكن الافضل كتابتها حتى يفهم الاخرين معناها
    // < 10 تعديد عدد معين وبعد ذلك يتوقف 
    // <= 100
    // i++ = يزيد رقم بشكل تلقائي
    // اذا وضعنها i في ال console فسوف يعطيني جميع العدد الموضوع
    // myArray.length = يستدعي عدد لا محدود من العناصر ويفضل استخدامها  
    
*/











/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Document

/* start Testing Id */
// Get Element By Id Html 

/* document.getElementById("testing-id");*/


// Greate  Variable
var divElement = document.getElementById("testing-id");

// OutPut Element To Console
console.log(divElement); // يظهر في ال console العنصر و النص الذي بداحله

// OutPut Text Inside Element
console.log(divElement.innerHTML); // يظهر فقط المحتوى الذي بداخل العنصر
/* End Testing Id */






/* start Testing class */
// Get Element By Class Name
// document.querySelector("#"); // لتحديد نوع العنصر أن كان Class او Id 
// document.querySelector(".testing-class");

// Greate  Variable
var  spanElement = document.querySelector(".testing-class");

// OutPut Element To Console
console.log(spanElement); // يظهر في ال console العنصر و النص الذي بداحله

// OutPut Text Inside Element
console.log(spanElement.innerHTML); // يظهر فقط المحتوى الذي بداخل العنصر
/* end Testing Id */






/* start Change*/
// Greate Variable With div Content
var sectionElement = document.getElementById("change");

// Output To Console
console.log(sectionElement);

// Output The Text
console.log(sectionElement.innerHTML);

// Change The HTML
sectionElement.innerHTML = "Changed from js";
// Output The Text
console.log(sectionElement.innerHTML);
/* start Change */






/* start par */
// Greate  Variable
var paragraphId = document.getElementById("par-id"), //getElementById = يحدد نوع العنصر تلقائيا لمجرد وضع getElementById

    paragraphClass = document.querySelector(".par-class"), //querySelector = تحدد يدويا نوع العنصر عبر وضع علامة . او # قبل اسم ال id او ال class او وضع h2 او p وغيره ليعرف انه نوع ال tag  

    paragraphTest = document.querySelector("#par-id"); 

console.log(paragraphId);
console.log(paragraphClass);
console.log(paragraphTest);

// querySelectorAll = يحدد جميع العناصر الموجودة في الصفحة
/* end par */






/* start parent */
//  Select Child One And Assign To Variable
var childOneElement = document.querySelector(".parent #child"); // يوضع class مرتين او id مع class تحديد عنصر معين قد يكون اسم ال class متطابق ولكن الا id مختلف

// Output Element To Console
console.log(childOneElement);


// Output Element Text To Console
console.log(childOneElement.innerHTML);

// Change Element Text To "changed With Js" Text
childOneElement.innerHTML = "changed With Js 1";

// Write Text Wichout var
document.querySelector(".parent-two #child").innerHTML = "changed With Js 2"; /* الvar وظيفته تعريف اسماء العناصر حتى نتمكن من التحكم بها و التمكن من كتابة اكثر من كود بداخل ال var 
ولكن في حال لم نستخدم ال var فيسم تعريف العناصر عبر الكود نفسه مثل document.querySelector(".parent #child").innerHTML = "changed With Js"; */







//  Select Child Two And Assign To Variable
var childThreeElement = document.querySelector(".parent-three #child");

// Output Element To Console
console.log(childThreeElement); // يظهر العنصر بالكامل


// Change Element Text To "changed With Js" Text
// childThreeElement.innerHTML = "changed With Js 3";
childThreeElement.innerHTML = "<span>changed With Js 3</span>";

// Output Element HTML To Console
console.log(childThreeElement.innerHTML); // يظهر التاج الموجود داخل العنصر مع المحتوى الموجود بداخل التاج


// Output Element Text To Console
console.log(childThreeElement.textContent); // يظهر فقط المحتوى بدون التاج او العنصر 

/* end parent */






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function


/* هكذا يكتب مبنية ال function 
function writeInConsole() { 
     
} */
sayHello1();
sayWorld();
sayHello1();
sayWorld();
sayHello1();
sayWorld();

function sayHello1() {
    console.log("Hello 2");
}

function sayWorld() {
    console.log("World 1");
}






/* var name1 = 'Fatma';
var name2 = 'Mustafa';
var name3 = 'Eman';
var name4 = 'Ahmed';
var name5 = 'Rahma';
var name6 = 'Sobhy';

console.log(`Hello  ${name1}`);
console.log(`Hello  ${name2}`);
console.log(`Hello  ${name3}`);
console.log(`Hello  ${name4}`);
console.log(`Hello  ${name5}`);
console.log(`Hello  ${name6}`); */







// Functon With 
function sayHello (theName, theAge, favLanguage1, favLanguage2) // // thename = كلمة اختيارية يمكن تغيرها لاي كلمة اريدها ويسمى مكانه Parameter
{
    console.log(`
    Hello,  ${theName} 
    Your Age Is ${theAge}
    Your Favourite Programming Language Is ${favLanguage1} And ${favLanguage2}
    Good Bye
    `);
}
//  اذا وضعنا معلومات على ال sayHello يجب ان يوضعوا ترتيب ال الموجود في ال function theName, theAge, favLanguage
sayHello("Fatema", 30, "c++", "js"); // هنا يسمى Argument
sayHello("Mustafa", 28, "php", "python");
sayHello("Eman", 25, "python", "js");
sayHello("Ahmed", 40, "js", "php"); 
sayHello("Rahma", 50, "c++", "python"); 
sayHello("Sobhy", 20,"js", "php");













/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Style


var worldElement =  document.querySelector(".world");

console.log(worldElement.textContent);

worldElement.style.backgroundColor = "red";
worldElement.style.paddingTop = '20px';
worldElement.style.color = 'white';
worldElement.style.textAlign = 'center';












// Event  
// الطريقة الاولى 
 var button1Element = document.getElementById("clicking1");
button1Element.onclick = function () {
    console.log(`Button Clicked 1`);
}; 


//  الطريقة الثانية
var button2Element = document.getElementById("clicking2");
var chlid2Element = document.querySelector(".child2");

button2Element.onclick = hideClicked;

function hideClicked() {
    chlid2Element.style.display = "none";
};   


// الطريقة الثالثة
// هذه الطريقة يمكن استخدامها  في مكان اخر وليس لاخفاء زرار معين 
var button3Element = document.getElementById("clicking3");
var chlid3Element = document.querySelector(".child3");

button3Element.onclick = function () {
    chlid3Element.style.display = "none";
};   














/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Dom

// Find Elements By [ ID, Class, Tag

// انشاء عنصر

var myP = document.createElement('p'),
    
    myPText = document.createTextNode('This Paragraph Created With Javascript');

myP.appendChild(myPText);

document.body.appendChild(myP);



/////////////////////////////////////////////////////////////////////////////////

// طرق كتابة العنصر

/*
  [1] - document.getElementById() // انشاء عنصر واحد فقط لان ال id لا يمكن تكراره
  تستخدم الطريقة الاولى بشكل اكثر من الطرق الاخرى لأنها مدوعمة من جميع المتصفحات
*/

var myDiv = document.getElementById('test1'); 

myDiv.innerHTML = 'Changed By Javascript';





/*
[2] - document.getElementsByTagName()
*/

var myElement = document.getElementsByTagName('h6'); 

console.log(myElement.length); // معرفة كم عدد ال div في الصفحة 
// myElement.innerHTML = 'Changed By Javascript';

// myElement.innerHTML = 'Changed p By Javascript'; // لن يتغير شئ لانني لم احدد له اي عنصر اود تغيره يجب وضع رقم ترتيب العنصر الذي اود تغيره مثل [2]
myElement[3].innerHTML = 'Changed h6 By Javascript';







/*
[3] - document.getElementsByClassName() | ليس مدعوم في بعض المتصفحات القديمة  // s  عند كلمة Element لانه ال class يمكن انشاء منه اكثر من class بنفس الاسم على عكس id يمكن وضع 
*/
var classElement = document.getElementsByClassName('testclass'); 

console.log(classElement.length);

classElement[0].innerHTML = 'Changed testclass By Javascript';






/*
[4] - document.querySelectorAll() | ليس مدعوم في بعض المتصفحات القديمة
*/

var querySelectorElement = document.querySelectorAll('h6.querySelectortest'); // يمكن وضع اسم ال tag مع اسم ال class او ال id الموجود بداخله

console.log(querySelectorElement.length);

querySelectorElement[2].innerHTML = 'Changed querySelectortest By Javascript';





/////////////////////////////////////////////////////////////////////////////////

// Find Elements By Objects

/*
 الطريقة الاولى: document.title
*/ 

var myTitle = document.getElementById('showtitle');

myTitle.innerHTML = document.title;




/*
الطريقة الثانية: document.images
*/

var myImages1 = document.getElementById('showimages1');

// myImages.innerHTML = document.images.length; // length = لمعرفة كم صورة موجودة على الصفحة 

myImages1.innerHTML = document.images[1].src; 
///////////////////////////////


// بطريقة ال loop 
var myImages2 = document.getElementById('showimages2'),
    
    i;

for (i = 0; i < document.images.length; i = i + 1) { //i = i + 1 /  زيادة صورة اخرى
    document.write(document.images[i].src);
}
///////////////////////////////



var myImages3 = document.getElementById('showimages3');

myImages3.innerHTML = document.images.length; // length = لمعرفة كم صورة موجودة على الصفحة 









/*
الطريقة الثالثة: document.forms
*/

var myForms = document.getElementById('testform');

// myForms.innerText = document.forms.length; // length = معرفة عدد ال form الموجودة في الصفحة  
 
// myForms.innerText = document.forms[1].x1.value;

myForms.innerText = document.forms[1].x1.type; // type = معرفة نوع الحقل ال input ان كان نوعه text, email, password, وغيرهم 

/////////////////////////////////////////////////////////////////////////////////