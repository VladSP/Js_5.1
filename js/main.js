// // let a = +prompt('Please, a =');
// // let b = +prompt('Please, b =');
// // let sum;
// // // if (a + b > 10) {
// // //     sum = "Yes";
// // //     document.write(sum);
// // // }
// // // else {
// // //     sum = "No";
// // //     document.write(sum);
// // // }

// // sum = (a + b > 10) ? "yes" : "no";
// // document.write(sum);
// // let msgText;
// // let login = prompt('Enter your login');
// // const nameUser = prompt('Enter your name');
// // // if (login == 'admin') {
// // //     msgText = 'Hi, admin';
// // // }
// // // else if (login == nameUser) {
// // //     msgText = 'Hi,' + nameUser;
    
// // // }
// // // else if (login == "") {
// // //     msgText = "No login!";
// // // }
// // // else {
// // //     msgText = "Wrong!";
// // // }
// // // document.write(msgText);

// // msgText = (login == 'admin') ? 'Hi, admin' :
// //     (login == nameUser) ? 'Hi, ' + nameUser :
// //         (login == "") ? 'No, login' :
// //             'Wrong';

// // document.write(msgText);

// 1 1 2 3 5 8 13 21 34 55 ...

// let n1 = 1,
//     n2 = 2,
//     sum = 0;

// sum = n1 + n2;
// n1 = n2;
// n2 = sum;



// n1 = 1;
// n2 = 1;
// sum = 2;

// n1 = n2; = 1
// n2 = sum; = 2
// sum = 3;

// n1 = n2; = 2
// n2 = sum; = 3
// sum = 5;

// n1 = n2; = 3
// n2 = sum; = 5
// sum = 8;

// let a = +prompt('Enter number');
// b;
// if (a % 2 == 0) {
//     console.log('even');
// }

// else if (a % 2 == 1) {
//     console.log('odd');
// }
// else {
//     console.log('Error');

// }


// b = (a % 2 == 0) ? 'even' : (a % 2 == 1) ? 'odd' : 'Error';

// let seasons = prompt('Enter your favorite season');
// if (a === 0) {
//     document.write('Number is 0');
// }
// else if (a === 1) {
//     document.write('Number is 1');
// }
// else if (a === 2 || a === 3 || a === 4 || a === 5) {
//     document.write('Number from 2 to 5');
// }
// else {
//     document.write('Любое другое');
// }

// switch(seasons) {
//     case 'Winter':
//         document.write('Winter is New Year');
//         break;
//     case 'Spring':
//         document.write('Spring is flowers');
//         break;
//     case 'Summer':
//         document.write('Summer is the sea');
//         break;
//     case 'Autumn':
//         document.write('Autumn is rain');
//     default:
//           document.write('No favorite season?');
// }

// // Цикл это конструкция она предназначина для того что бы мы могли многократно использовать инструкции - 1 проход этого цикла это итерация

// // while () { ПРОВЕРКА УСЛОВИЯ ПЕРЕД КАЖДИМ ВЫПОЛНЕНИЕМ ... ПОКА УСЛОВИЕ ВЕРНОЕ ВЫПОЛНЯЕТЬСЯ ЦИКЛ
    
// // }
// let i = 1;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
// let sum = 0;
// while (true) {
//     let value = + prompt('Enter your number');
//     if (!value) break;
//     sum = sum + value;

// }
// document.write(sum);

// do {
//     // TELO
// }
// while (uslovie);
// let i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i < 10);

// for (начало; условие; шаг;) {
//     тело цикла
// } //Счетчик итерации цикла

// for (i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }