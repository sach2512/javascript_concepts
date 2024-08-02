// lets take an object and perorm variaous operations sin it
const product = {
    productId: '12345',
    productName: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 99.99,
    currency: 'USD',
    inStock: true,
    category: 'Electronics',
    brand: 'SoundTech',
    rating: 4.5,
    reviews: [
      {
        reviewId: 'r1',
        userId: 'u123',
        userName: 'John Doe',
        rating: 5,
        comment: 'Amazing sound quality!',
        date: '2024-07-01'
      },
      {
        reviewId: 'r2',
        userId: 'u456',
        userName: 'Jane Smith',
        rating: 4,
        comment: 'Comfortable to wear for long periods.',
        date: '2024-07-02'
      }
    ],
    images: [
      'https://example.com/images/product1.jpg',
      'https://example.com/images/product2.jpg'
    ],
    specifications: {
      batteryLife: '20 hours',
      weight: '250g',
      dimensions: '20x15x5 cm',
      color: 'Black'
    }
  };


  //Object.keys -- it will return all the key sof objectin the form of array

  console.log(Object.keys(product));

  // object-values -- it will return al the values of the object in array form 

  console.log(Object.values(product));

  //Object.entries Returns an array of the key/value pairs of an object

  console.log(Object.entries(product));

//   Object.fromEntries() is a method that takes an array of key-value pairs and turns it into an object.

const entries = [
    ['name', 'Sachin'],
    ['age', 30],
    ['country', 'India']
  ];

  let data = Object.fromEntries(entries);
  console.log(data) // { name: 'Sachin', age: 30, country: 'India' }

  // object.assign 

  const sourceObj = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
  };
  
  const targetObj = {
    id: 1,
    status: 'active'
  };
  
  // Creating a new object that merges targetObj and sourceObj
  const newObject = Object.assign({}, targetObj, sourceObj);

  // we have object.defineProperty and Object.defineaProperties
  
  // obj1.defineProperty(obj,"value",Props)

  

  let obj1={};
  obj1.definePropert(obj1,"name",{
    value:"sachin",
    enumerable: true, 
  writable: true,   
  configurable: true
  })

  // obj1.deineProperties(obj1,{props})

  let obj2 ={}
  obj2.defineProperties(obj2,{
    name:{
        value:"sachin",
        enumerable: true, 
      writable: true,   
      configurable: true
    },
    age:{
        value:24,
        enumerable: true, 
      writable: true,   
      configurable: true
    }
  })
  
  // object.hasown property is returs true if the object has that property 

  console.log(obj2.hasOwn(obj2,name)); //returns true

  const person = {
    name: 'Alice',
    age: 30
  };
  
  // Seal the object
  Object.seal(person);
  
  
  person.profession = 'Engineer'; // This will not work (property not added)
  
 
  delete person.age; // This will not work (property not deleted)
  
  
  person.name = 'Bob'; // This will work (property value changed)
  
 
  console.log(Object.isSealed(person)); // Output: true
  
  
  console.log(person); // Output: { name: 'Bob', age: 30 }

  Object.freeze(person)// completly frezze and prevents modifing of existing object too

  // object.create

  let objtnew = {
    name:"sachin",
  }

  let objnew2 = Object.create(objtnew,{});

  // now obj2new will inherit from objtnew and will have property of name

  console.log(objnew2.name)//logs sachin 

  let obj3 = Object.create(obj2,{
    fullname:{
        value:"jain",
        enumerable:true,
        writable:true,
        configurable:true
    },
    lastname:{
        value:"jain",
        enumerable:true,
        writable:true,
        configurable:true
    }
  })
  // now obj3 will inherit obj2 and it will have fullname ,lastname,name prppert(inherited from obj2)

  console.log(obj3.name)// logs sachin
