//Anstract classes

//DEfenition: class that is not suposed to be directly instantiated

class Person{
    #name;

    constructor(name = '') {
        this.#name = name;
        if (new.target === Person){
            throw new Error('Person cannot be directly instantiated');
        }
    }

    get name(){
        return this.#name;
    }
}

class Employee extends Person {
    #job

    constructor(name, job){
        super(name);
        this.#job = job
    }

    get job() {
        return this.#job;
    }
}

try{
    const person = new Person ('marry Stevenson')
} catch(error){
    console.log(error.messa)
}

const person = new Person ('marry Stevenson')

const employee = new Employee ('Frederic Smith', 'Web Developer');
console.log(employee.job);