// if else statement
// şərt ifadələri
// if - şərt doğrudursa icra ediləcək kod sətri üçün yazılır
// else - eyni şərt doğru deyilsə icra ediləcək kod sətri üçün yazılır
// else if - ilk iki şərt ödənilmirsə yeni şərt bloku açmaq üçün yazılır
// switch - icra ediləcək çoxlu kod bloku üçün yazılır

function noteResult() {

    var midtermNote, finalNote, message, average;
    midtermNote = Number(document.getElementById("midterm").value);
    finalNote = Number(document.getElementById("final").value);
    average = midtermNote * 0.3 + finalNote * 0.7;
    
    /*
        if (isNaN(midtermNote)) {
            message = "Midterm balını rəqəm daxil etməlisiniz";
        } else if (isNaN(finalNote)) {
            message = "Final balını rəqəm daxil etməlisiniz";
        } else {
            message = (average >= 60) ? "Semestri keçdiniz" : "Kəsildiniz";
        }
    */

    if (isNaN(midtermNote)) {
        message = "Midterm balını rəqəm daxil etməlisiniz";
    } else if (isNaN(finalNote)) {
        message = "Final balını rəqəm daxil etməlisiniz";
    } else {
        if (average >= 0 && average < 45) {
            message = "Kəsildiniz. Balınız: FF";
        } else if (average >= 45 && average <= 60) {
            message = "Balınız: DD";
        } else if (average >= 61 && average <= 80) {
            message = "Balınız: CC";
        } else if (average >= 81 && average <= 90) {
            message = "Balınız: BB";
        } else if (average >= 91 && average <= 100) {
            message = "Balınız: AA";
        } else {
            message = "Nəticə 1-100 aralığında deyildir. Məlumatları düzgün daxil edin!";
        }
    }
    
    document.getElementById("result").innerHTML = message;
}