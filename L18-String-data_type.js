// String
printScreen();

function printScreen() {
    var text = "Javascript ilə hazırlanmış proqram, React JS, Angular JS, Vue JS"; // cüt dırnaq
    var text1 = 'String"in tək dırnaqlı forması'; // tək dırnaq
    var text2 = 'String\'in metodları'; // dırnaq daxilində dırnaq buraxmaq qaydası
    var text3 = "veb proqramlaşdırma";
    var text4 = "mobil proqramlaşdırma";
    var text5 = "C++,C#,HTML,CSS,Bootstrap,Scss,Javascript,Jquery,React JS,Node JS,React Native,Swift"


    // String Method
    // length - stringin uzunluğunu göstərir
    document.getElementById("result").innerHTML = text.length;

    // indexOf() - daxil edilmiş sözün, string-imizdə ilk harada qarşılaşdığı yeri göstərir
    // indexOf & lastIndexOf ikinci bir parametri qəbul edir. Bu zaman həmin yerdən etibarən ilk qarşılaşdığı yeri göstərir
    console.log(text.indexOf("JS"));
    console.log(text.indexOf("JS", 43));

    // search() - indexOf metodu ilə eyni işi görür, fərqi ikinci parametr qəbul etməməsidir
    console.log(text.search("JS"));

    // Stringləri hissələrə ayırmaq üçün 3 metod:
    // slice(start, end) - verilmiş dəyərlər arasındakı hissəni yeni string olaraq göstərir
    // substring(start, end) - proses slice metoduna oxşardır, fərq ondadır ki, mənfi dəyərləri qəbul etmir
    // substr(start, length) - proses slice metoduna oxşardır, fərq ondadır ki, ikinci dəyər kəsilən parçanın uzunluğunu bildirir
    console.log(text.slice(10, 21));
    console.log(text.slice(-7, -1)); // mənfi dəyərlər olduqda kəasilmə stringin sağ tərəfindən aparılır

    console.log(text.substring(10, 50));
    console.log(text.substring(10)); // ikinci dəyəri yazmazsaq, stringi axıra qədər götürəcəkdi (həm slice, həm substring)

    console.log(text.substr(10, 5)); // 10-cu yerdən başlayaraq, 5 uzunluqlu hissəni kəsir
    console.log(text.substr(-6, 2)); // Mənfi dəyər sağdan etibarən kəsilməni bildirir


    // replace() - verilmiş birinci parametri ilk tapdığı yerdə verilmiş ikinci parametrlər dəyişdirir
    console.log(text.replace("JS", "Dəyişdi")); // bu metod böyük-kiçik hərflərə həssasdır
    console.log(text.replace(/js/i, "Dəyiş")); // bu formada yazılış, böyük-kiçik hərfi nəzərə almır
    console.log(text.replace(/JS/g, "HD")); // bu forma artıq böyük-kiçik hərfə həssasdır, üstünlüyü verilmiş dəyərin hamısını dəyişdirir
    console.log(text.replace(/js/gi, "HD+")); // bu forma artıq böyük-kiçik hərflərə həssas deyil və verilmiş dəyərin hamısını dəyişdirir

    // toUpperCase() - bütün hərfləri böyük hərflərə çevirir
    console.log(((text3.toUpperCase()).replace(/ş/gi, "sh")).toUpperCase());

    // toLowerCase() - bütün hərfləri kiçik hərflərə çevirir
    console.log(text3.toLowerCase());

    // concat() - iki və daha çox string-i birləşdirir
    console.log(text3 + " " + text4); // birləşdirmənin I üsulu
    console.log(text3.concat(" ", text4)); // birləşdirmənin II üsulu, boşluq I üsuldakı olduğu kimidir

    // Bütün bu string metodları yeni string göstərir, orginal string-ə əl dəyməzlər

    // String simvollarını ayırmaq üçün 2 təhlükəsiz metod var:
    // charAt(mövqe) - müəyyən bir index-dəki simvolu göstərir
    // charCodeAt(mövqe) - müəyyən bir index-dəki simvolun UNICODE göstərir
    console.log(text3.charAt(4));
    console.log(text3.charCodeAt(4));

    // Split() - qeyd edilmiş simvola əsasən string-imizi təyin etdiyimiz index-ə əsasən göstərir
    var arrayList = text5.split(",");
    console.log(arrayList[2]);
}