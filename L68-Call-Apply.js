// Function Call and Apply
/*
    Call metodu, əvvəlcədən təyin edilmiş JS function metodudur.
    İlk object parametri olaraq bir user object-ini çağırmaq üçün istifadə oluna bilər.
    Call() ilə başqa bir object-ə aid metod istifadə edə bilərik.
    Apply() metodu da call() metoduna bənzəyir.
*/

var person = {
    firstName : "Qara",
    lastName : "Humbatov",
    age : 20,
    eyeColor : "Brown",
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
};

var people = {
    firstName : "A",
    lastName : "B"
};

var x = person.fullName.call(people);
var y = person.fullName.apply(people);

document.getElementById("result").innerHTML = x + "<br>" + y;

/*
    Call() və Apply() funksiyalarının fərqləri:
    - Call() dəyişənləri ayrı-ayrı alır
    - Apply() array şəklində
*/

/*
    Math.Max metodu ilə verilən dəyərlərdən Max tapmaq mümkündür.
    Arraylardan Max dəyəri tapmaq üçün Apply istifadə olunur
*/
document.getElementById("result1").innerHTML = Math.max.apply(null,[5,1,18,6]); 