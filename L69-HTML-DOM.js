/*
    HTML DOM - Document Object Model
    HTML DOM ilə JavaScript HTML sənədinin bütün elementlərinə müraciət edə bilir (çağıra bilir) və onları dəyişdirə bilir.
    Veb səhifə yükləndiyində, brauzer səhifənin DOM-unu yaradır.
    Brauzer HTML DOM modeli ilə elementləri Object-lərdən ibarət olan ağaca çevirir
*/
document.getElementById("result").innerHTML = "DOM ağacı ilə result id-li elementin mətnini dəyişdirdim";

/*
    DOM ilə dinamik HTML yaradırıq
    - Bütün HTML elemetlərini dəyişdirə bilir, silə bilir, əlavə edə bilir, event hadisəsi edə bilir
    - Bütün HTML atributlarını dəyişdirə bilir, silə bilir, əlavə edə bilir, event hadisəsi edə bilir
    - Bütün CSS stillərini dəyişdirə bilir
*/
document.getElementById("head").style.color = "red";

/*
    DOM W3C standartıdır (World Wide Web Consortium)
    Bu standart 3 fərqli hissəyə ayrılmışdır:
        1. Core DOM - bütün sənədlər üçün standart model
        2. XML DOM - XML sənədləri üçün standart model
        3. HTML DOM - HTML sənədləri üçün standart model
*/