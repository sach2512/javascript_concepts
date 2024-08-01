//creating objects though literals
let userobject1 =
{
        firstname:"sachin",
        lastname:"jain",
        age:"10",
        address:"india",
        islogeedin:false,
}



//Accessing properties of objects
console.log(userobject1.islogeedin);
console.log(userobject1["firstname"]);

//manipulation of objects

userobject1.firstname="jain"; // chnaging the name
userobject1.hometown ="TELANGANA" // ADDING NEW PROPERTIES IN objects
delete userobject1.hometown // deleting the properties of object
//After deletion, the property cannot be used before it is added back again.

// we can store methods also inside objects

userobject1.greeting = ()=>{
        console.log("hello wolrd");
}

//mutability of objects

let userobject2 =
{
        firstname:"sachin",
        lastname:"jain",
        age:"10",
        address:"india",
        islogeedin:false,
}

userobject1===userobject2 // it is false becuase they are refernce types not value type

let userobject3 = userobject1 

userobject3.firstname="jain";

// now  userobject1.firstname  will log jain instead of sachin


