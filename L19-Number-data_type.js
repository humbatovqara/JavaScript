printScreen();

function printScreen() {
    var x = 7; // natural ədəd - number
    var y = 3.14; // tam ədəd - number

    var num1 = 12e5; // 1200000
    var num2 = 12e-5; // 0.00012

    /* integer, float, double, long int, short - kimi dəyərlər JS-də yoxdur */
    /* tam ədədlər 15 xanadır - bitlərlə əlaqədar */

    var num3 = 0.1;
    var num4 = 0.2;
    var sum1 = num3 + num4; //0.3......4
    var sum2 = ((num3 * 10) + (num4 * 10)) / 10; // 10-luq sayı, tam ədədə çevirib əməliyyatı yenidən yerinə yetiririk

    var num5 = 10;
    var num6 = 60;
    var sum3 = "Result: " + num5 + num6; // String + Number = String (+ birləşdirmə edir)

    var num7 = "10";
    var num8 = 60;
    var sum4 = num7 + num8; // String + Number = String (+ birləşdirmə edir)
    var sum5 = num7 * num8; // String * Number = Number

    var num9 = "10 JS";
    var num10 = 50;
    var sum6 = num9 * num10; //NaN - Not a Number

    var num11 = 10;
    var num12 = 60;
    var num13 = "JS";
    var sum7 = num11 + num12 + num13; //70JS

    console.log(typeof x);
    console.log(typeof y);
    console.log(num1 + " " + num2);
    console.log(sum1);
    console.log(sum2);
    console.log(sum3);
    console.log(sum4);
    console.log(sum5);
    console.log(sum6);
    console.log(sum7);

    // isNaN()
    console.log(isNaN(sum1));
    console.log(isNaN(sum7));
    var num14 = NaN;
    console.log(typeof num14); // typeOf Number

    // input data
    // var data = document.getElementById("input1").value;

    // if (isNaN(data)) {
    //     console.clear();
    //     document.getElementById("result").innerHTML = "Err! Only number";
    // } else {
    //     console.clear();
    //     document.getElementById("result").innerHTML = "Ok!";
    // }


    // Infinity - sonsuzluq
    var num15 = 2;
    var num16 = "";
    var num17 = -2;

    while (num15 != Infinity) {
        num15 *= num15;
        num16 += num15 + " ";
    }

    console.log(num16);
    console.log(num15 / 0); //Infinity
    console.log(num17 / 0); //-Infinity

    console.log(typeof Infinity); // Number


    // Say sistemi
    var num18 = 128; //10-luq say sistemi
    var num19 = num18.toString(16); //10-luqdan 16-a keçid
    var num20 = num18.toString(8); //10-luqdan 8-a keçid
    var num21 = num18.toString(2); //10-luqdan 2-a keçid
    console.log(num19 + "," + num20 + "," + num21);



    // Number => Object
    var num22, num23;
    num22 = 700;
    num23 = new Number(700);

    console.log(typeof num22 + "," + typeof num23);
}