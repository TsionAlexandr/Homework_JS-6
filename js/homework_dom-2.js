// // Задача 1.


function isParent(parent, child) {
    
    if (child.parentElement === null) return false;
    
    if (child.parentElement === parent) {
        return true;
    } else {
        return isParent(parent, child.parentElement);
    }
}

console.log (isParent(document.body.children[0], document.querySelector('mark')));
console.log (isParent(document.querySelector('ul'), document.querySelector('mark')));

// // Задача 2.


Array.prototype.slice.call(document.getElementsByTagName('a')).map((v)=>{if (v.parentNode.tagName!='LI') 

console.log(v)});

// // Задача 3.
let x = document.querySelector("ul").previousElementSibling;
let y = document.querySelector("ul").nextElementSibling;

console.log (x);
console.log (y);


// // Задача 4.

console.log (document.getElementsByTagName('ul')[0].getElementsByTagName('li'));


