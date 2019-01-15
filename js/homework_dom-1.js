// // получить в консоль head
// console.log (document.head);

// // получить в консоль body
// console.log (document.body);

// // получить все дочерние элементы body и вывести их в консоль.
// console.log (document.body.childNodes);

// // получить первый div и все его дочерние узлы
// console.log (document.body.querySelector('div'));
// console.log (document.body.querySelector('div').children);

// // вывести все дочерние узлы в консоль

// if (document.body.querySelector('div').children) {
//     const children1 = document.body.querySelector('div').children ;

//     for (var i = 0; i < children1.length; ++i) {
//         console.log(children1[i])
//     }
// }

// // вывести в консоль все дочерние узлы, кроме первого и последнего

// if (document.body.querySelector('div').children) {
//     const children = document.body.querySelector('div').children ;

//     for (var i = 1; i < children.length - 1; ++i) {
//         console.log(children[i])
//     }
// }