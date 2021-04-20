// function generator(){
//   const output = document.querySelector('#form__div');

//   mayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']
//   minus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']
//   nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
//   chars = ['*', '+', '-', '/', '@', '_', '?', '!', '[', '{', '(', ')', '}', ']', ',', ';', '.', '>', '<', '~', '°', '^', '&', '$', '#', '"']

//   var characters = mayus.concat(minus, nums, chars);

//   var password = [];

//   for(let i=1; i<=20; i++){
//     let random = characters[Math.floor(Math.random() * (characters.length))];
//     password.push(random)
//   }

//   res = password.join(''); 

//   // let html = `<div class = "fomr__div">
//   //             <p>${res}</p>
//   //             </div>`;

//   // output.innerHTML=html;

//   output.innerHTML = res;
// }

const output = document.querySelector('#form__div');

mayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']
minus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']
nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
chars = ['*', '+', '-', '/', '@', '_', '?', '!', '[', '{', '(', ')', '}', ']', ',', ';', '.', '>', '<', '~', '°', '^', '&', '$', '#', '"']

var characters = mayus.concat(minus, nums, chars);

var password = [];

for(let i=1; i<=20; i++){
let random = characters[Math.floor(Math.random() * (characters.length))];
password.push(random)
}

res = password.join('');

let html = `<div class = "fomr__div">
            <p>${res}</p>
            </div>`;

output.innerHTML=html;













