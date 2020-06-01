

document.getElementById("nermen").innerHTML = "hello java script";
 /* يمكن عبر هذا الكود الخاص بالجافا سكريب من تغير ما هو موجود في ديف html <div id="nermen">nermen</div> */
    // عند كتابة نصوص بداخل هذه النقاط '' او "" يسمى سترينج 
    

    
document.getElementById("number").innerHTML = 1000;
//اذا اردت كتابة ارقام فلا اضعه بداخل نقاط سترينج بل تكتب ماشرة بالكود بدون النقاط



document.write("<p> hellooo from test.js  external file </p>");
// document.write يمكن عبر هذا الكود كتابة اي شئ مباشرا من ملف جافاسكريبت من دون الحاجة للذهاب الى ملف html 



alert("hello from head")
/* alert يوضع فيه عبارة ترحيب للمستخدم او اي شئ تود قوله للمستخدم تظهر عن اول فتح الصفحه على شكل مربع */



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
     

   





var myOldPrice = 2000, // السعر القديم

    myNewPrice = 500, // السعر الجديد

    myDiscount = myOldPrice - myNewPrice + 200; // 2000 - 500 + 200 = 1700 // يمكن استبدال myOldPrice - myNewPrice بالارقام الحسابية التي وضعت كسعر الجديد و القديم

document.getElementById("myPrice").innerHTML = myDiscount;



 /* بدلا من تكرار كلمة var نضع كلمة var مرة واحدة ومن ثم نكتب باقي اكوادالمتغير مع وضع علامة ( , ) عد نهاية كل كود 
واخر كود نضع علامة ( ; ) كعلامة انتهاء 
*/
var  myOldPrice = 2000,

     myNewPrice = 500,

     myDiscount = myOldPrice - myNewPrice + 200;
     
document.getElementById("myPrice").innerHTML = myDiscount;




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




var myPrice = 10000,
    myNewPriceMay = 500,
    myNewPricejune = 1000,
    myNewPricejuly = 500;
    
    myEarnings = myPrice + myNewPriceMay + myNewPricejune + myNewPricejuly; // 10000 + 500 + 1000 + 500 = 12000

document.getElementById("myEarnings").innerHTML = 12000;
    




    var myPrice = 10000,
        myNewPriceMay = 500,
        myNewPricejune = 1000,
        myNewPricejuly = 500;

    document.getElementById("myEarnings1").innerHTML = myNewPriceMay * myNewPricejuly; // 500 * 500 = 250000
    

    var /* يتعامل جافا سكريبت مع الحروف الكبيرة والصغيرة على انهم حروف مختلفة
     حتى وان كانت نفس الكلمة فإما ان اجعل اول الحروف جميعهم كبيرة او اجعل اول الحروف جميعهم صغيرة */
        name = "ahmed",
        Name = "noor";
    document.getElementById("name").innerHTML = name;
    document.getElementById("Name").innerHTML = Name; 
    // اول الكلمات لا تكون الاحرف الاول كبير ولكن اي كلمة تأتي بعدها تصبح اول حروفها كبيرة getElementById
   



                                                //  data type
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

/*
*** array تكتب بهذا الشكل: ["facebook.com", "youtube.com", "google.com"]
*/
var socialWebSites = ["facebook.com", "youtube.com", "google.com"];
document.getElementById("array").innerHTML = socialWebSites[2] // اذا وضعت رقم 0 فسوف يظهر الفيسبوك واذا وضعت رقم 2 فسوف يظهر اليوتوب الى اخره 




/*
object: {firstName: "Nermen", lastName: "Mohamed"}
*/

var myInfo = {firstName: "Nermen", lastName: "Mohamed"};
document.getElementById("object").innerHTML = myInfo.firstName; 




/*
string: "javascript"
*/

var myName = "Nermen";
document.getElementById("string").innerHTML = myName;