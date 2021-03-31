/*
    1
    JavaScript BOM - Browser Object Model
    JS BOM - JS-in browser ilə əlaqə qurmasına icazə verir. BOM-un rəsmi standartı yoxdur.

    Window Object
    Browser-in pəncərəsini təmsil edir. Bütün JS object-ləri, funksiyalar və dəyişənlər avtomatik olaraq window object-inə aid olur.
    Global dəyişənlər - window object-inin xüsusiyyətləri (özəllikləri)
    Global funksiyalar - window object-inin metodlarıdır.
    HTML DOM-un object-i belə window object-inin özəlliyidir.

    Window Size
    Browser pəncərəsinin ölçülərini müəyyən etmək üçün 2 özəllik işlədilir. Hər iki özəllik piksel ilə verilir.
        1. window.innerHeight
        2. window.innerWidth
    Internet Explorer 5-8 version üçün:
        1. document.documentElement.clientHeight
        2. document.documentElement.clientWidth
    or
        1. document.body.clientHeight
        2. document.body.clientWidth

    window.open() - yeni bir pəncərə açır
    window.close() - pəncərəni bağlayır
    window.moveTo() - pəncərəni daşıyır
    window.resizeTo() - pəncərəni yenidən ölçüləndirir
*/

/*
var w,h,result;
result = document.getElementById("result");
w = window.innerWidth || document.documentElement.clientWidth || document.body.clientHeight;
h = window.innerHeight || document.documentElement.clientHeight || document.body.clientWidth;

result.innerHTML = "Browser width: " + w + "<br>" + "Browser height: " + h;
*/

/*
var result, newWindow;
result = document.getElementById("result");

function openWindow() {
    newWindow = window.open("https://www.linkedin.com/feed/","newWindow","width = 600, height = 400");
    //newWindow.document.write("Bu pəncərə JavaScript tərəfindən açıldı");
}

function resizeWindow() {
    newWindow.resizeTo(1000,800);
}

function moveWindow() {
    newWindow.moveTo(450,150);
}

function closeWindow() {
    newWindow.close();
}
*/





/*
    2.
    Window Screen
    Window.screen object-i, window prefixi olmadan da yazıla bilər
        1. screen.width
        2. screen.height
        3. screen.availWidth - mövcud genişlik
        4. screen.availHeight - mövcud hündürlük
        5. screen.colorDepth - rəng biti
        6. screen.pixelDepth    

    Window Location
    Window.location object-i cari səhifə ünvanını (URL) almaq və browseri yeni bir səhifəyə yönləndirmək üçün işlədilir.
        1. window.location.href - səhifə URL göstərir
        2. window.location.hostname
        3. window.location.pathname - səhifənin yolunu və fayl adını
        4. window.location.protocol - protokolu qaytarır
        5. window.location.port - portu göstərir. HTTP-80, HTTPS-243
        6. window.location.assign - yeni səhifə yükləmək üçün
*/

/*
var result;
result = document.getElementById("result");
result.innerHTML = 
    "screen.width: " + screen.width + "<br>" + 
    "screen.height: " + screen.height + "<br>" + 
    "screen.availWidth: " + screen.availWidth + "<br>" +
    "screen.availHeight: " + screen.availHeight + "<br>" + 
    "screen.colorDepth: " + screen.colorDepth + "<br>" + 
    "screem.pixelDepth: " + screen.pixelDepth + "<br>" + "<hr>" +
    
    "window.location.href: " + window.location.href + "<br>" +
    "window.location.hostname: " + window.location.hostname + "<br>" +
    "window.location.pathname: " + window.location.pathname + "<br>" +
    "window.location.protocol: " + window.location.protocol + "<br>" +
    "window.location.port: " + window.location.port + "<br>";

function load() {
    window.location.assign("https://humbatovqara.github.io/portfolio");
}
*/





/*
    3.
    Window History
    Window History - object-ə browser keçmişi daxildir
    İstifadəçilərin gizliliyini qorumaq üçün JavaScript-in bu object-dən istifadə məsələsində limitlər var:
        1. history.back() - browserdə geri qayıtma ilə eyni | history-də bir əvvəlki URL-i yükləyir
        2. history.forward() - browserdə irəli getmə ilə eyni | history-də bir sonrakı URL-i yükləyir
    
    Window Navigator
    window.navigator object - istifadəçinin browser-i haqqında məlumat saxlayır
        1. navigator.appName
        2. navigator.appCodeName
        3. navigator.platform
    Cookies aktivdirsə cookieEnabled özəlliyi true dəyərini, əks halda false dəyərini göstərir
*/

var result;
result = document.getElementById("result");
result.innerHTML = 
    "navigator.cookieEnabled: " + navigator.cookieEnabled + "<br>" + 
    "navigator.appName: " + navigator.appName + "<br>" + 
    "navigator.appCodeName: " + navigator.appCodeName + "<br>" + 
    "navigator.product: " + navigator.product + "<br>" + 
    "navigator.appVersion: " + navigator.appVersion + "<br>" + 
    "navigator.userAgent: " + navigator.userAgent + "<br>" +
    "navigator.platform: " + navigator.platform + "<br>" + 
    "navigator.language: " + navigator.language + "<br>" +
    "navigator.online: " + navigator.onLine + "<br>" +
    "navigator.javaEnabled: " + navigator.javaEnabled();