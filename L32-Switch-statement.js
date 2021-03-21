// Break açar sözünə çatdıqda switch blokundan ayrılır
// default = else
// default vəziyyət yalnız kod sətrin sonuna yox, əvvələ də yazıla bilər. Əgər bu son vəziyyət deyilsə break açar sözü yazılması mütləqdir.
// son vəziyyətə break açar sözü yazmağa ehtiyac yoxdur

function show() {
    var day;
    var d = new Date().getDay();
    
    switch (d) {
        case 0: day = "Bazar";
            break;
        case 1: day = "Bazar ertəsi";
            break;
        case 2: day = "Çərşənbə axşamı";
            break;
        case 3: day = "Çərşənbə";
            break;
        case 4: day = "Cümə axşamı";
            break;
        case 5: day = "Cümə";
            break;
        case 6: day = "Şənbə";
            break;
        default: day = "Belə bir gün yoxdur";
    }
    document.getElementById("result").innerHTML = day;
}