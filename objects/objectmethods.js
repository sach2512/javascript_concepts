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
  
