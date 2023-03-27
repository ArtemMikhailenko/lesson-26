// Завдання 1
/*
let user = {} 

Object.defineProperty(user, 'name',{
    writable : true ,
    
})
Object.defineProperty(user, 'age',{
    writable : true ,
    
})
Object.defineProperty(user, 'id',{
    writable : true ,
    enumerable : true , 
})

console.log(user);
console.log(Object.getOwnPropertyDescriptor(user, 'name'));


//Завдання 2

let database = {
    dbName: 'user',
    dbType: 'MySQL'
}
let configurateDB= {
    token : '123' , 
    password : '567' ,
    user : 'admin'
}

Object.freeze(database);
Object.seal(configurateDB);

console.log(Object.getOwnPropertyDescriptor(database , 'dbName'));
*/
//Завдання 3

let salaries = {
    frontend: 2000, 
    backend: 1500,
    design: 1000,

    set addSalaries(value) {
            let newSalaries = value.split(' ')
            this.frontend = addSalaries[0];
        this.backend = addSalaries[1];
        this.design = addSalaries[2];

    }
} 

Object.defineProperty(salaries , 'sum',{
    get (){
        let sum = 0 ;
        for (salary in this){
            sum += this[salary];
        }
        console.log(sum);
    },
    enumerable: false ,
} ,

)
console.log(salaries);
