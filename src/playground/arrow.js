// console.log("arrow");
// let x;
// const arrow=(x)=>{
//     return x*x;
// }
// console.log(arrow(5));
// const arrowExpr=(x)=>x*x;
// console.log(arrowExpr(10));
// let fullName;

// const firstName=(fullName)=>{
//     if(fullName){
//         return fullName.split(' ')[0];
//     }
// }

// console.log(firstName("Nithin Shabadhu"));
// const firstname=(fullName)=>fullName.split(' ')[1];
// console.log(firstname("Nithin Shabadhu"));



const add=(a,b)=>{
    return a+b;
}
console.log(add(3,4));

var person={
    name:'nithin',
    place:['hyd','delhi','goa'],
    printPlaces(){
        console.log(this.name);
        console.log(this.place);

        // for(let city in this.place){
        //     console.log(this.name+" lived in "+this.place[city]);
        // }

        this.place.forEach( (x)=>{
            console.log(this.name+" lived in "+x);
        });
    }
}
person.printPlaces();

const multiply={
    arr:[1,2,3,4,5,6,7,8,9],
    num:2,
    multiplier(){
        return this.arr.map((x)=>this.num*x);
    }
}
console.log(multiply.multiplier());

