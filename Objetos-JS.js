let user={name: "Vic",id: 1};

let book1={title: "The catcher in the Rye",author: "J.D. Sallinger",isbn:"03167694887",category:"classic literature"};

let book2={title: "To kill a Mockingbird",author: "Harper Lee",isbn: "0446310786",category: "classic literature"};

user.books=[book1,book2];

console.log(user);
let library=new Array();
library[0]=user;
console.log(library);

let book3={title: "Mortadelo y Filemon", author:"F.Ibañez",category: "classic literature"};

library[0].books.push(book3);/*lo meto en el array*/

console.log(library);

let user2={name:"Olga",id:2};

library.push(user2);
user2.books=[book1,book3];

console.log(library);

/*iteracion en la q.tiene q.salir(usuarios y libros):
console.log('Nombre Usuario:');
console.log('titulo1','autor1');
console.log('titulo2','autor2');
*/
//console.log(user.name);
for(i=0;i<library.length;i++){
    console.log(library[i].name+':');
    for(j=0;j<library[i].books.length;j++){
        console.log(`${library[i].books[j].title},${library[i].books[j].author}`);
    }
    console.log('---------------');
}
