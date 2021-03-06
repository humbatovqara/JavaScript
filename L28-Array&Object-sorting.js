var cars = [
    "Mercedes",
    "BMW",
    "Audi",
    "Lexus",
    "Toyota"
];
var numbers = [45, 100, 1, 8, 17, 30, 11];
// document.getElementById("result").innerHTML = numbers;
Show("result",numbers);

// Array-ları RANDOM sıralaya bilərik
/*
    function sortArray() {
        numbers.sort(function(x,y) {
            return 0.6-Math.random();
        });
        Show("result2",numbers);
    }
*/
// Array-dakı MAX və MİN dəyərini tapmaq üçün standart funksiyalar yoxdur
// Eyni zamanda, bir Array-ı sort etdikdək sonra, ən yüksən və ən aşağı dəyərləri əldə etmək üçün Array-ı istifadə etmək olar
// Bu yol tövsiyə edilməyəndir !!!
/*
function sortArray() {
    numbers.sort(function (x, y) {
        return x - y;       // MİN
        // return y - x;    // MAX
    });
    Show("result2",numbers);  // MIN dəyər
}
*/

// Tövsiyə edilən yol !!!
// Bir arraydakı MAX dəyəri tapmaq üçün Math.max.apply
// Bir arraydakı MİN dəyəri tapmaq üçün Math.min.apply
function Show(par1,par2) {
    document.getElementById(par1).innerHTML = par2;
}

function MaxArray(take) {
    return Math.max.apply(null,take);
}

function MinArray(take) {
    return Math.min.apply(null,take);
}

Show("result3",MaxArray(numbers));
Show("result4",MinArray(numbers));


// Arraylar daxilinə Object ola bilər
var pc = [
    {type:"Acer", ram:"8 Gb",year:"2012"},
    {type:"Asus", ram:"16 Gb",year:"2016"},
    {type:"HP", ram:"32 Gb",year:"2014"}
];

Show("result5",
    pc[0].type + "-" + pc[0].ram + "-" + pc[0].year + "<br>" + 
    pc[1].type + "-" + pc[1].ram + "-" + pc[1].year + "<br>" + 
    pc[2].type + "-" + pc[2].ram + "-" + pc[2].year
);

function sortArray() {
    pc.sort(function(x,y) {
        return x.year - y.year;
    });
    Show("result6",
    pc[0].type + "-" + pc[0].ram + "-" + pc[0].year + "<br>" + 
    pc[1].type + "-" + pc[1].ram + "-" + pc[1].year + "<br>" + 
    pc[2].type + "-" + pc[2].ram + "-" + pc[2].year
);
}
