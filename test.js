

document.getElementById("nermen").innerHTML = "hello java script";
 /* يمكن عبر هذا الكود الخاص بالجافا سكريب من تغير ما هو موجود في ديف html <div id="nermen">nermen</div> */
    // عند كتابة نصوص بداخل هذه النقاط '' او "" يسمى سترينج 
    

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////    
document.getElementById("number").innerHTML = 1000;
//اذا اردت كتابة ارقام فلا اضعه بداخل نقاط سترينج بل تكتب ماشرة بالكود بدون النقاط




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.write("<p> hellooo from test.js  external file </p>");
// document.write يمكن عبر هذا الكود كتابة اي شئ مباشرا من ملف جافاسكريبت من دون الحاجة للذهاب الى ملف html 



//alert("hello from head")

/* alert يوضع فيه عبارة ترحيب للمستخدم او اي شئ تود قوله للمستخدم تظهر عن اول فتح الصفحه على شكل مربع */



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("test").innerHTML = "helloo javascript from js file";





// يمكن كتابة التعليقات على هذه الشكل يسمى single line comment يستخدم للتعليقات القصيرة 

   // أو
/* او على هذه الشكل ويسمى multi line comment ويستخدم للتعليقات الطويلة والتي تحتاج الى سطرين او اكثر
طريقة مرتبة لكتابة مجموعة تعليقات في تعليق واحد مثل

*** التعليق الاول

*** التعليق الثاني

*** التعليق الثالث

*** التعليق الرابع
*/



/* 

*** تبدأ المتغيرات بالحروف او بعلامة دولار $ او underscore الا وهو علامة سطر تحت (_) 
اما الارقام فلا تتعرف به المتغيرات اذا وضعت اول الكلمة


*** يسمى كود var بالمتغيرات وهو الكلمة الرئيسية لمتغير جافاسكريبت


*** myPrice = أسم المتغير يوجد اسماء لا يمكن كتابة كمتغير لان جافا السكريبت 
احتجازتها للغه ولا يمكن استخدامها كاسم للمتغير مثل كلمة if او return او function


*** علامة ( = ) تعني assignment operator 


*** 100 تعني ( variabale value قيمة المتغير ) 

*/


  // يجب وضع المتغير ثم بعدها القيمة ( the value . القيمة )
var // يمكن كتابة تعليق بجانب كلمة var او فوقها ليس بجانب الارقام
    myPrice = 9900,
    x = 10, 
    y = 20,
    z = 100;

    myDiscount = myPrice - x - y - z; // 9900 - 10 - 20 - 100 = 9770
document.getElementById("price1").innerHTML = myDiscount;
// var myPrice; //  يعتبر هذا متغير بدون قيمة  undefined . بدون قيمة  
     

   


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var myOldPrice = 2000, // السعر القديم

    myNewPrice = 500, // السعر الجديد

    myDiscount = myOldPrice - myNewPrice + 200; // 2000 - 500 + 200 = 1700 // يمكن استبدال myOldPrice - myNewPrice بالارقام الحسابية التي وضعت كسعر الجديد و القديم

document.getElementById("myPrice").innerHTML = myDiscount;





//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /* بدلا من تكرار كلمة var نضع كلمة var مرة واحدة ومن ثم نكتب باقي اكوادالمتغير مع وضع علامة ( , ) عد نهاية كل كود 
واخر كود نضع علامة ( ; ) كعلامة انتهاء 
*/
var  myOldPrice = 2000,

     myNewPrice = 500,

     myDiscount = myOldPrice - myNewPrice + 200;
     
document.getElementById("myPrice").innerHTML = myDiscount;







//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* اذا تغير السعر الاساسي والذي هو 500 فسوف يتغير تلقائية باقي الاسعار التي اسفلها 
واذا تم زيادة السعر الاصلي فسوف تزيد باقي الاسعار التي تليها واذا تم عمل انقاص للسعر الاصلي فسوف تنقص باقي الاسعار التي تليها تلقائيا
*/
var mainPrice = 500,
    mySmallDiscount = 50,
    myMediumDiscount = 100,
    myBigDiscount = 250;

document.getElementById("price").innerHTML = mainPrice;

document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount; // 500 - 50 = 450

document.getElementById("product2").innerHTML = mainPrice - myMediumDiscount; // 500 - 100 = 400

document.getElementById("product3").innerHTML = mainPrice - myBigDiscount; // 500 - 250 = 250
/*
*** علامة(*) تعني الضرب في الحسابات الرياضيات

*** علامة (/) تعني القسمة
*/




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var myPrice = 10000,
    myNewPriceMay = 500,
    myNewPricejune = 1000,
    myNewPricejuly = 500;
    
    myEarnings = myPrice + myNewPriceMay + myNewPricejune + myNewPricejuly; // 10000 + 500 + 1000 + 500 = 12000

document.getElementById("myEarnings").innerHTML = 12000;
    




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var myPrice = 10000,
    myNewPriceMay = 500,
    myNewPricejune = 1000,
    myNewPricejuly = 500;

document.getElementById("myEarnings1").innerHTML = myNewPriceMay * myNewPricejuly; // 500 * 500 = 250000
    





//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var /* يتعامل جافا سكريبت مع الحروف الكبيرة والصغيرة على انهم حروف مختلفة
     حتى وان كانت نفس الكلمة فإما ان اجعل اول الحروف جميعهم كبيرة او اجعل اول الحروف جميعهم صغيرة */
    name = "ahmed",
    Name = "noor";
document.getElementById("name").innerHTML = name;
document.getElementById("Name").innerHTML = Name; 
    // اول الكلمات لا تكون الاحرف الاول كبير ولكن اي كلمة تأتي بعدها تصبح اول حروفها كبيرة getElementById
   


///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
                                            // دروس عن data type اواع البيانات
/* 
*** Boolean.المنطقية
القيمة الخاصه بها true and false 
تستخدم عند وضع شئ واخباره اذا كانت صحيحة ان يخبر انها صحيحة واذا كانت خاطئة فيخبر انها خاطئ مثال    
 */
var z = 10,
        y = 20; 

    if (x + y == 40)
       { 
        console.log("good")
       } 
// اذا وضعت كانت النتيجة ليست صحيحة فلن يعترف بها المتصفح اما اذا كانت صحيحة فسوف تظهر كلمة good اواي كلمة توضع كتعريف ان الحسابية صحيحة ستظهر في ادوات المطورين
    else {
         console.log("bad")
         }
// يوضع كود else كتعريف اذا لم يكن التيجة صحيحة فانه يقوم بإظهار كلمة سئ اواي كلمة يتم كتابتها كعلامة ان النتيجة خطأ




////////////////////////////////////////////////////////////////////////////////////////////////
/*
اخبر الكود اذا كان المنتج لديه خصم ام لا 
true = معناه انه لديه خصم
false = معناه انه ليس لديه خصم 
*/

var hasDiscount = false; // اكتب هنا true اذا كان المنتج لديه خصم 
 // واذا لم يكن لديه خصم اكتب false 

if (hasDiscount === true) {
    var mainPrice = 35; // يوجد خصم
}
else {
    var mainPrice = 450; // لا يوجد خصم
}

document.getElementById("mainPrice").innerHTML = mainPrice;




/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
*** array تكتب بهذا الشكل: ["facebook.com", "youtube.com", "google.com"]
*/
var socialWebSites = ["facebook.com", "youtube.com", "google.com"];
document.getElementById("array").innerHTML = socialWebSites[2] // اذا وضعت رقم 0 فسوف يظهر الفيسبوك واذا وضعت رقم 2 فسوف يظهر اليوتوب الى اخره 







//////////////////////////////////////////////////////////////////////////////////////////////////
/*
object: {firstName: "Nermen", lastName: "Mohamed"}
*/

var myInfo = {firstName: "Nermen", lastName: "Mohamed"};
document.getElementById("object").innerHTML = myInfo.firstName; 




///////////////////////////////////////////////////////////////////////////////////////////////
// string: "javascript"

/*يمكن عمل دمج بين علامة "" و '' يمكن ان اضع "" داخل '' والعكس المهم ان لا يكونوا نفس الشكل 
مثل "Nermen 'mohammed'"
او مثل 
"nermen \"alrayyan\""
*/

var myName = "nermen \"alrayyan\"";
document.getElementById("string").innerHTML = myName;





////////////////////////////////////////////////////////////////////////////////////////////////
// number
/* دعم وضع الرقم داخل "" لانه سيعتبر string اسم وليس رقم
فاذا اردت عمل دمج بين الارقامعبر الحسابات الرياضية فلن تنجح مثل عمل 
"26" + 10 
*/
var myAge = 26; 
document.getElementById("number1").innerHTML = myAge;






///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
                                    // دروس عن concatenation

/* "2620" يظهر النتيجة مثل 
اذا كتبتها هكذا
"26" + "20"

ليس بشرط ان يضع علامة + يمكن وضع اي علامة على حسب لغة البرمجة

يجب وضع فاسل بعد كلمة Is او قبل رقم 26 حتى لا تكونوا ملتسقين ببعض 
او عمل هكذا 
"Hello I'm Nemren My Age Is" + " " + "26" 
عمل فاصل داخل " " الفارغ

اذا تم وضع حسابات رياضية ثم نوع string ثم concatenation مثل
 50 + 50 + "nermen" + 50 + 50
فسوف تظهر هكذا
100nermen5050
اذا اردت وضع حسابات رياضية بعد ال string اضع قوسين ومن ثم الحسابات الرياضية 
مثل
50 + 50 + "nermen" + (50 + 50)
*/
var myAge = "Hello I'm Nemren My Age Is" + " " + "26",

    myAge1 = 50 + 50 + "nermen" + 50 + 50,

    myAge2 = 50 + 50 + "nermen" + (50 + 50);

document.getElementById("concatenation").innerHTML = myAge + "<p>" + myAge1 + "<p>" + myAge2;





////////////////////////////////////////////////////////////////////////////////////////////////
var myName = "Nermen",
    myAge = 26,
    myCountry = "jorden";

document.getElementById("concatenation4").innerHTML = // بإمكاني انزال الباقي الكود بعد علامة = حتى اتمكنمن كتابة جميع المتغيرات
     // عمل مسافات بين كل نص و علامة " و + 
     // وضع "<br>" + او "<p>" + بين كل سطر حتى تظهر النصوص فوق بعض 
     "My Name is: " + "<span style='color:blue'>" + myName + "</span>" + "<br>" +
     "<span style=\"color:blue\">My Age Is</span>: <span style='color:red'>" + myAge + "</span>" + "<br>" +
     "<p style=\"color:red\">My Country Is:</p> " + myCountry; 




///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
                                            // دروس عن output 
var myName = "Nermen ",
    myAge = 26;

alert("Hello My Name Is " + myName + " And My Age Is " + myAge);
/* يمكن كتابة ال alert ايضا في 

ادوات المطورين داخل console 
alert("Hello Javascript From Console")

و في محرك البحث الخاص بالمتصفح
javascript:alert("Hello Javascript From Browser")
*/




//////////////////////////////////////////////////////////////////////////////////////////////
// يمكن أيضا عمل حسابات رياضية في alert
var x = 5,
    z = 15;

alert(x + z);   





////////////////////////////////////////////////////////////////////////////////////////////////
var myName = "Nermen ",
    myAge = 26;
document.write("Hello My Name Is " + myName + " And My Age Is " + myAge);





////////////////////////////////////////////////////////////////////////////////////////////////
var myName = "Nermen Alrayyan",
    myAge = 26,
    myCountry = "Jorden";
document.getElementById("output1").innerHTML = 
         "Hello My Name Is: " + myName + "<br>" +" My Age Is: " + myAge + "<br>" + " My Country Is: " + myCountry;





//////////////////////////////////////////////////////////////////////////////////////////////
var myName = "Nermen Mohammed",
    myAge = 26,
    myCountry = "Jorden",
    myDiv = document.getElementById("output2"); 
myDiv.innerHTML = "Hello My Name Is: " + myName + "<br>" +" My Age Is: " + myAge + "<br>" + " My Country Is: " + myCountry;         





///////////////////////////////////////////////////////////////////////////////////////////////
var myName = "Nermen Mohammed Alrayyan",
    myAge = 26,
    myCountry = "Jorden";
console.log("Hello My Name Is: " + myName + " My Age Is: " + myAge + " My Country Is: " + myCountry);
// لن يظهر هذه في المتصفح بل في ادوات المطور داخل console




///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
                                        // دروس عن JavaScript Operators
var x = 100,
    y = 400,
    z = x + y; // 100 + 400 = 500
document.getElementById("operators").innerHTML = z; 
// وضعت متغير z حتى يجمع لي متغير x و y وكتابة فقط حرف z في ال document 
// يمكن عمل حسابات رياضية في ال console




/////////////////////////////////////////////////////////////////////////////////////////////
var x = "Nermen",
    y = 400, 
    z = x - y; /* اذا وضعت علامة ( - ) فسوف يظهر لي كلمة NaN وتعني لا يوجد رقم وتظهر هذه اذا وضعت
    الا وهو الاسم string 
    مثل 

var x = "Nermen",
    y = 400, 
    z = x - y; 

    ولكن اذا وضعته هكذا من دون string فسوف تنجح

var x = 100,
    y = 400, 
    z = x - y;

اشكال علامات الرياضية في البرمجة 
** ( + ) علامة زائد 
** ( - ) علامة ناقص
** ( / ) علامة تقسيم
** ( * ) علامة ضرب
** ( % ) هي علامة حسابية ولكن قليلة الاستخدام ومعقدة بعض الشئ
*/
document.getElementById("operators").innerHTML = z;





//////////////////////////////////////////////////////////////////////////////////////////////
var myCounter = 1; /* تستخدم هذه في جعل الارقام تزداد عند الضغط على مثل عدد الزوار الذين
زاروا الصفحة او قناة اليوتوب او مشاهدة فيديو او عمل لايك وغيرهم
يزداد تلقائيا لمجرد ان يضغط المستخدم على شئ او يدخل على شئ
يجب ان يكون هنالك شئ فعال في الصفحة حتى يزدادالرقم تلقائيا

وضع زائد فسوف يزيد الرقم myCounter++ 

واذا وضعت ناقص فسوف ينقص الرقم ويستخدم الناقص عند وضع منتج بعدد معين myCounter-- 
وينقص العدد تلقائيا لمجرد ان يشتري المستخدم المنتج 
وعند الوصول الى  رقم 0 ستظهر للمستخدم رسالة توضح انتهاء كمية المنتج الموجودة


او ان هنالك بث مباشر معروض فسوف يزيد عددالمشاهدين للبث 
ولمجرد ان يخرج عدد من المشاهدين فسوف ينقص العدد المعروض في البث
*/
alert(myCounter++); // ال alert هذه للتجربة فقط




///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
                                            // درس عن if, else

        
var ticketPrice = 3000; // يجب ان يكون ثمن التذكرة اقل من 1500 حتى تظهر رسالة Yes Is Cheap اذا كانت التذكرة اغلى من 1500 فلن تظهر الرسالة
// علامة(>) تعني اصغر من او اقل من  و علامة (<)  تعني اكبر من او اكثر من


if (ticketPrice < 1500) // يسمى هذا المكان بال condition 
{
      console.log("Yes Is Cheap"); 
// اذا كانت التذكرة اقل من 1500 او اي رقم اخر موضوع بسوف تظهر هذه الرسالة في ادوات المطورين
}

else 

{
  console.log("No Its Expensive"); // اذا كانت اغلى من 1500 فسوف تظهر هذه الرسالة
}




/////////////////////////////////////////////////////////////////////////////////////////////
var ticketPrice = 2000;

if (ticketPrice < 500)

{
    console.log("Yes Is Cheap"); 
}

else if (ticketPrice == 2000)

{
    console.log("Yes Is good price"); // ستظهر هذا الرسالة اذا كان السعر 2000
}

else 

{
   console.log("No Its Expensive");
}




//////////////////////////////////////////////////////////////////////////////////////////////
var yourAge = prompt("what's your Age?"); // يمكن للمسخدم كتابة ما هو مطلوب منه عبر هذا الكود

if (yourAge < 18) // اذا كان العمر اصغر من 18 
// عند وضع علامة = بجانب علامة > فسوف تظهر رسالة الترحيب اذا كان الشخص عمره 18 ولكن اذا كان اصغر من 18 فسوف تظهر رسالة الاعذار
{
   document.getElementById('theage').innerHTML = 
     "Sorry Your Age Is " + yourAge + " You Are Not Allowed Here"; 
     // توضع مثل هذه الرسالة اذا كان هنالك موقع مخصص فقط للكبار وممنوع للاشخاص الذين عمرهم اصغر مت 18 الدخول الى هذا الموقع
}
else {
    document.getElementById('theage').innerHTML = 
    "hello Your Age Is " + yourAge + " You Are Welcome Here";
}




///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
                                        // Conditional Operators
/*
وعلامة (=>) تعني اصغر من او يساوي
فاذا اردت مثلا وضع الحد الحد الأدنى للمستخدمين هو 5 و  وهو أكبر من الارقام التي 
أقل منه مثل أكبر من 4 و3 و ما أسفله اضع هذا العلامة 
                                        
واذا اردت أكثر او يساوي من 5 او اي رقم اخر (>=)
5 >= 5  تعني انه سيحسب اذا كان الرقم 5 يساوي مع ال5 الاخر او يمكن ان يكون اصغر من الارقام التي اعلى منها مثل اصغر من 6 و7 وما فوقه
*/
var myPrice = 40;

if (myPrice <= 50)
{
    alert (" Sorry The Price Is " + myPrice + " And All I Have Is 50")
}
else 
{
    alert("Good The Price Is " + myPrice + " And I Have Is 50");
}


////////////////////////////////////////////////////////////////////////////////////////////////
/*
*** ( = ) Assignment Operator وضع يساوي واحد يعني انه لن يستطيع عمل مقارنة بين var و if او else فسوف يتعامل مع if على انه متغير مثله مثل var
*** ( == ) comparison operator اذا وضعت علامة يساوي مرتين فسوف أتمكن من عمل مقارنة بين var و if 
*** ( === ) Identical operator مقارنة نوع البيانات + القيمة
*/

var myPrice = 50, // Data Type: Number

    Nermen = "50"; // Data Type: String If I Delete "" سيصبح من نوع Data Type (number)

if (myPrice === 50) 
{
    alert ("good");
}
/*
if (Nermen == 50) 
{
    alert ("good Is = 50")
}
*/
else 
{
    alert("bad");
}

/*
ملخص الدرس ..
العلامات المنطقيه هي{ > , < , =< , => , == , === }.
 الفرق بين ( =  ==  === )

= :-  هذه الاشاره لاسناد قيمه معينه للمتغير ..مثال ;var value=30  
== :- هذه  الاشاره  للمقارنه بالقيمه فقد دون الاهتمام بنوع البيانات  مثال.
;"var value="30 ..نلاحظ نوع البيانات هي قيمه نصيه لانها محصوره بين "  "
}(if(value==30  ..نلاحظ هنا 30 هي قيمه عدديه 
code 1 .........هذا ال الكود رح يتنفذ السبب ان 30==30 مع ان نوع البيانات مختلفه
{

=== :- هذه الاشاره للمقارنه بالقيمه ونوع البيانات يعني هذه الاشاره حساسه بالنسبه لنوع البيانات ..مثال
;"var value="30 ..نلاحظ نوع البيانات هي قيمه نصيه لانها محصوره بين "  "
}(if(value==30  ..نلاحظ هنا 30 هي قيمه عدديه 
code 1 .........هذا ال الكود  لم  يتنفذ السبب ان 30 تساوي 30 بالقيمه فقد ولكن مختلفه بنوع البيانات لهذا السبب لا يتحقق الشرط وبتالي لم ينفذ الكود
{
*/



///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
                                      // Logical Operators

/*
    ( ! ) Not Equal 
    ( != ) تعني لا تساوي
    ( !== ) Not Identicual تعني لا تساوي القيمة ولا نوع ال data type
    ( && ) And 
    ( || ) تعني or موجود قبل حرف ( د ) او علامة ( [ ) نضغط shift  ثم زر ( | )
        يقوم or بعمل اختيار للمستخدم 
 */

var myPrice = "50";

if (myPrice != 50) 
/* لن تظهر النتيجة good لان القيمة لا تساوي 50 
ولكن اذا غيرت من قيمة المتغير var فسوف تظهر كلمة good
ولكن اذا استبدلت =! ب == وتعني المقارنة فسوف تعطيني النتييجة good لان القيمة فعلا تساوي 50

اذا وضعت !== تعني لا يساوي القيمة لانها ليست 50 ولا النوع البيانات لانها ليست رقم بل string وتعني الاسم
*/
{
    alert("good");
} else {
    alert("bad");
}




///////////////////////////////////////////////////////////////////////////////////////////////
var 
   name = "Nermen",

   age = "26", 

   address = "KSA";

if (age === 26 && name == "Nermen" && address == "KSA") // && تعني ( And ) فاذا لم يتحقق الشرطين معا الموجودة في هذه الكود فسوف يظهر لي bad
/* اذا لم يتحقق الشرط الاول الا وهو name والشرط الثاني الا وهو age والشرط الثالث الا وهو KSA
     اذا لم تتحقق جميع الشروط معا فسوف تظهر رسالة  bad
     عند وضع === فيجب ان يكون القيمة ونوع ال data type متطابقين مع var فسوف يظهر كلمة bad 
     
     لن يتحقق الشروط وسوف تظهر bad لان القيمة المتغير string وتعني اسم ولي رقم 26
     يجب وضع "" على رقم 26 في if حتى يتحقق الشروط  
    */
{
 alert("Good Your Name Is " + name);
}/*
else if (name == "Nermen")
{
    alert("Good Name")
} */
else 
{
    alert("bad");
}



///////////////////////////////////////////////////////////////////////////////////////////////
var   name = "Nermen",

      age = "26", 

      address = "UAE";
if ( age === 30 || name === "Nermen" || address === "UAE") // || تعني or سيختار او واحد منهم صحيح ليس مشروط ان يكون جميعهم صحيح على عكس &&
{
    alert("good.hello");
}
else
{
    alert("bad.goodbye");
} 





///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
                                              // Function

// Function = Function keyword in javascript مفتاح الكلمة في جافاسكريبت

function sayHi()
{
    "use strict";
    
    var myName = "Nermen";
    
    if (myName === "Nermen alrayyan")
    {
        alert("Hello " + myName + " From Inside The Function");
    }
    else
        {
            alert("Hello world " + myName + " From Inside The Function");
        }
}

sayHi(); // يمكن حذف sayHi() لانه يوجد استدعاء alert في html بإسم Call The Function()

///////////////////////////////////////////////////////////////////////////////////////////////
                                    // function - return
function myInfo()
{
    var myName = "Nermen";
}                                  