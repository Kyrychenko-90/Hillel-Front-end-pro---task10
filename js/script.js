let num = prompt('Введите число!');
let degree = prompt('Введите степень!');

function power(num, degree) {
    if (degree == 1) {
        return num;
    } else {
        return num * power(num, degree - 1);
    }
}

alert(power(num, degree));


