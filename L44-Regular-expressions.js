// Javascript Regular Expressions
/*
Axtarış, mətn axtarma, mətn dəyişdirmə əməliyyatları üçün istifadə edilə bilər.

Nədir bu "Regular Expressions"?
Bir mətndə nə isə axtardıqda, axtardığımız şeyi açıqlamaq üçün, bu axtarış modelini istifadə edə bilərik
Regular Expressions - tək bir xarakter və ya daha qarışıq bir formada ola bilər
Regular Expressions - hər cür mətn axtarışı etmək və mətn dəyişdirmək əməliyyatlarını reallaşdırmaq üçün istifadə edilə bilər

Regular Expressions - əsasən 2 string metodu ilə işləilir - search() və replace()

Sintaksisi:
 /pattern/modifiers;

Nümunə:
 /humbatovqara/i;

Modifiers:
    i - bir dəyişdiricidir (axtarışı böyük-kiçik hərfləri nəzərə almadan dəyişdirir)
    g - təyin edilən mətni bütün axtarır, hamısını çıxarır
    m - birdən çox sətrdə axtarış etmək üçün
    [abc] - mötərizə daxilindəki təyin edilmiş simvollar arasından birini tapır
    [0-9] - mötərizə arasında olan hər hansı bir rəqəmi tapır
    (x|y) - seçimlərdən hər hansı birini tapır

Meta caracter:
    \d - Rəqəm axtar tap
    \s - Boşluğu axtar tap
    \b - Sözün başında və ya sonunda bir uyğunluğu tapın
    \uxxxx - 16-lıq say sistemində xxxx ilə göstərilən Unicode simvolunu tapın

Quantifiers:
    n+ - ən azı bir "n" olan hər hansı bir stringlə uyğunlaşır, bərabərləşir
    n* - sıfır və ya daha çox sayda "n" olan hər hansı bir stringlə uyğunlaşır, bərabərləşir
    n? - sıfırları və ya bir dəfə "n"-i olan hər hansı bir stringlə uyğunlaşır, bərabərləşir

JavaScript-də RegExp obyekti öncədən təyin edilmiş özəlliklərə və metodlara sahib Regular Expression obyektidir
test() metodu - RegExp metodudur, true və false qaytarır
exec() metodu - mətni axtarır, varsa özünü, yoxdursa heç nə göstərmir
*/

var text = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ";
document.getElementById("result").innerHTML = 
text.search(/type/ig) + "<br>" + "<hr>" +
/eve/.test(text) + "<br>" +
/ab/.test(text);