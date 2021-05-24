window.onload = () => {
    var button = document.querySelector('#btn')
    button.addEventListener('click', calcBMI)

}
var calcBMI = function() {
    debugger;
    var height = parseInt(document.getElementById('height').value)
    var weight = parseInt(document.getElementById('weight').value)
    var result = document.querySelector('result')

    var BMI = (weight / (height/100 *height/100));
    if (BMI < 18.5) {
        console.log('Phan loai : Gay ; Nguy co phay trien benh : Thap')
    }else if (BMI >= 18.5 && BMI <= 24.9 ){
        alert('Phan loai : Binh thuong ; Nguy co phay trien benh : Trung binh')
    }else if (BMI >= 25 && BMI <= 29.9 ){
        alert('Phan loai : Hoi beo ; Nguy co phay trien benh : Cao')
    }else if (BMI >= 30 && BMI <= 34.9 ){
        alert('Phan loai : Beo phi cap do 1 ; Nguy co phay trien benh : Cao')
    }else if (BMI >= 35 && BMI <= 39.9 ){
        alert('Phan loai : Beo phi cap do 2 ; Nguy co phay trien benh : Rat cao')
    }else if (BMI >= 40 ){
        alert('Phan loai : Beo phi cap do 1 ; Nguy co phay trien benh : Cao')
    }else{
        alert('Khong co ket qua ')
    }
              
}