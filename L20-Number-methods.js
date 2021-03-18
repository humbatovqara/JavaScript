// İlkin verilən dəyərləri (3.14 və ya 2017 kimi), özəllik və metodlara sahib deyildirlər (çünki obyekt deyil)
// JS-də metod və özəlliklər ilkin dəyərlər üçün də keçərlidir

// toString() - ədədi sətr tipinə çevirir; say sistemləri keçidi edir
show();

function show() {
    var num1, num2;
    num1 = 7.856;
    num2 = new Number(7);
    console.log(typeof num1);
    console.log(typeof num1.toString());

    //toExponential() - üst | tam ədədlərin, vergüldən sonra təyin olunan dəyər qədər yuvarlaqlaşdırır, üstlü forması göstərir
    console.log("toExponential(): " + num1.toExponential());
    console.log("toExponential(2): " + num1.toExponential(2));
    console.log("toExponential(4): " + num1.toExponential(4));
    console.log("toExponential(6): " + num1.toExponential(6));

    //toFixed() - sabit | tam ədədlərin, vergüldən sonra təyin olunan dəyər qədər yuvarlaqlaşdırır, Exponential-dan fərqi, üstlü göstərməməsidir
    console.log("toFixed(): " + num1.toFixed());
    console.log("toFixed(2): " + num1.toFixed(2));
    console.log("toFixed(4): " + num1.toFixed(4));
    console.log("toFixed(6): " + num1.toFixed(6));

    //toPrecision - vergüldən əvvəli də nəzərə alaraq yuvarlaqlaşdırır
    console.log("toPrecision(): " + num1.toPrecision());
    console.log("toPrecision(2): " + num1.toFixed(2));
    console.log("toPrecision(4): " + num1.toFixed(4));
    console.log("toPrecision(6): " + num1.toFixed(6));

    //valueOf() - ədəd tipində dəyər göstərir | Number Object-i ilkin dəyərlərə çevirə bilir
    console.log("valueOf(): " + num1.valueOf());
    console.log("valueOf() tipi: " + typeof num1.valueOf());
    console.log("num2 Objectin tipi: " + typeof num2);
    console.log("Object-i ilkin number-ə çevirir: " + typeof num2.valueOf());

    // Dəyişənləri number data type çevirmək üçün 3 metod (Global method) - number(), parseInt(), parseFloat()
    console.log("Number metodu 1: " + Number(true));
    console.log("Number metodu 2: " + Number(false));
    console.log("Number metodu 3: " + Number(new Date()));
    console.log("Number metodu 4: " + Number("2"));
    console.log("Number metodu 5: " + Number("70 "));
    console.log("Number metodu 6: " + Number(" 50"));
    console.log("Number metodu 7: " + Number("7 60"));
    console.log("Number metodu 8: " + Number("JS"));

    console.log("parseInt metodu 1: " + parseInt(true));
    console.log("parseInt metodu 2: " + parseInt(false));
    console.log("parseInt metodu 3: " + parseInt(new Date()));
    console.log("parseInt metodu 4: " + parseInt("2"));
    console.log("parseInt metodu 5: " + parseInt("70 "));
    console.log("parseInt metodu 6: " + parseInt(" 50"));
    console.log("parseInt metodu 7: " + parseInt("7 60"));
    console.log("parseInt metodu 8: " + parseInt("JS"));
    console.log("parseInt metodu 9: " + parseInt("3.14"));
    console.log("parseInt metodu 10: " + parseInt("7 days"));
    console.log("parseInt metodu 11: " + parseInt("lesson 28"));

    console.log("parseFloat metodu 1: " + parseFloat(true));
    console.log("parseFloat metodu 2: " + parseFloat(false));
    console.log("parseFloat metodu 3: " + parseFloat(new Date()));
    console.log("parseFloat metodu 4: " + parseFloat("2"));
    console.log("parseFloat metodu 5: " + parseFloat("70 "));
    console.log("parseFloat metodu 6: " + parseFloat(" 50"));
    console.log("parseFloat metodu 7: " + parseFloat("7 60"));
    console.log("parseFloat metodu 8: " + parseFloat("JS"));
    console.log("parseFloat metodu 9: " + parseFloat("3.14"));
    console.log("parseFloat metodu 10: " + parseFloat("7 days"));
    console.log("parseFloat metodu 11: " + parseFloat("lesson 28"));

    // Number Data Type Properties
    console.log(Number.MAX_VALUE);
    console.log(Number.MIN_VALUE);
    console.log(Number.NEGATIVE_INFINITY);
    console.log(Number.POSITIVE_INFINITY);
    console.log(Number.NaN);
}