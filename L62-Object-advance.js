/*
Javascript-də demək olar hər şey object-dir:
    -Boolean object ola bilər (new açar sözü ilə təyin olunarsa)
    -Number object ola bilər (new açar sözü ilə təyin olunarsa)
    -String object ola bilər (new açar sözü ilə təyin olunarsa)
    -Date hər zaman object-dir
    -Math hər zaman object-dir
    -Regular Expressions hər zaman object-dir
    -Array hər zaman object-dir
    -Function hər zaman object-dir

    Primitiv dəyərlərdən başda bütün tiplər Object-dir
*/

var x = "JavaScript"; // Primitive data type - string
var y = 7; // Primitive data type - number
var a = true; // Primitive data type - boolean
var b = null; // Primitive data type - null (object)
var t; // Primitive data type - undefined

var x1 = new String("JavaScript"); // Primitive data type - string (object)
var d = new Date(); // Tarix - object
var m = Math.abs(-8); // Math - object
var arr = [1, 3, 5, 7]; // Array - object

// Object-də dəyişənlərdir. Ancaq object bir çox dəyərə malik ola bilər
// Object daxilində işlədilən dəyişənlərə özəllik (property) deyirik
// Property - ilkin verilən tipi, object və funksiya ola bilər
// Property funksiya olarsa bu artıq funksiya adlanmır, object-in metod-u adlanır
var person = {
    firstName: "Qara",
    lastName: "Humbatov",
    age: 20,
    eyeColor: "Black",
    confirm: true,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};


// Metodlar - object üzərində reallaşdırıla biləcək hadisələrdir, proseslərdir
document.getElementById("result").innerHTML = person.fullName();    // Funksiya metod adlanır, və çağırıldıqda () qoyulur. Property-də bu yoxdur

// Metod anlayışının ən gözəl izahı Math object-inin metodlarından istifadə etməkdir. Məsələn Math.abs(-8) metodundan istifadə ediriksə burada Math person əvəzinə yazılır, abs metodu isə fullName funksiyamızın yerinə və bu metodu adlanır.