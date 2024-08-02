

let orginalvalue = 10;
let copiedvalue = orginalvalue;

console.log(copiedvalue);  // logs 10
console.log(orginalvalue); //  logs10


copiedvalue = 20;
console.log(copiedvalue);  // logs 10
console.log(orginalvalue); //logs 20 

let obj1 = {
    name:"sachin",
    lastname:"jain",
}

let obj2 = obj1;

console.log(obj1); //logs  { name: 'sachin', lastname: 'jain' }
console.log(obj2); //logs { name: 'sachin', lastname: 'jain' }

obj2.name = "newname"; // will change the orginal object too shalow copy 

console.log(obj1); //logs  { name: 'newname', lastname: 'jain' }
console.log(obj2); //logs { name: 'newname', lastname: 'jain' }


// now there are differtn ways to avoid these and create deep copy for the objectd 

// object.assign 

let obj3 = Object.assign({},obj1);
console.log(obj1); // logs { name: 'newname', lastname: 'jain' }
console.log(obj3); //logs { name: 'newname', lastname: 'jain' }

obj3.name="sachin";
console.log(obj1); //logs { name: 'newname', lastname: 'jain' }
console.log(obj3); // logs  { name: 'sachin', lastname: 'jain' }

let obj4 ={...obj1} // creates deep copy 

// the draw back of these method is it is not suitable for nested objects 

let obj5 = {
    name:"sachin",
    lastname:"jain",
    skills:{
        primary:"frontend",
        secondary:"backend",
    }
}
let obj6 = {...obj5}

console.log(obj5);   
console.log(obj6);

// //logs  {
//   name: 'sachin',
//   lastname: 'jain',
//   skills: { primary: 'frontend', secondary: 'backend' }
// }

obj6.skills.primary = "fullstack";

console.log(obj5);   
console.log(obj6); // it creates shallow copy  
// these is thed drawback object.assign and spreadoperator is not suitabl to create deep copy for nested obkects

// json.stringify

let obj7 = JSON.parse(JSON.stringify(obj5));
console.log(obj5);
console.log(obj7);

obj7.skills.primary = "devops"
console.log(obj5);
console.log(obj7);
// these json.sgtringfy will create deepcopy but its not suffeict from any  functions inside the objects 
//so to over come these we have a package loadash

// install the package npm i loadash

const _= require(loadash);

let obj8 = {
    place:"india",
    graduated:true,

    greet:()=>{
        console.log("hello");
    }
}

let obj9 = _.cloneDeep(obj8) // this will create deep copy 