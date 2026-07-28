// TASK 3: Personal user data object
const currentUserProfile = {
  firstName: 'Дамир',
  lastName: 'Нуритдинов',
  email: 'www.dmr777@gmail.com',
  occupation: 'Engineer',
  position: 'Drilling Engineer',
  age: 39,
  country: 'Россия',
  city: 'Октябрьский',
  relationshipStatus: 'married'
};

// TASK 4: Vehicle data object with owner linkage
const vehicleSpecification = {
  brand: 'LADA',
  model: 'X5',
  yearOfManufacture: 2010,
  color: 'white',
  transmissionType: 'automatic'
};

// Adding the owner property on a separate line
vehicleSpecification.vehicleOwner = currentUserProfile;

// TASK 5: Function to add maximum speed property
function ensureMaxSpeedProperty(carObject) {
  if (!('maximumSpeed' in carObject)) {
    carObject.maximumSpeed = 250;
  }
}

// TASK 6: Function to get object property value dynamically
function getObjectPropertyValue(targetObject, targetProperty) {
  console.log(targetObject[targetProperty]);
}

// TASK 7: Simple array of grocery products
const groceryProductsList = ['Milk', 'Bread', 'chicken', 'Apple', 'tea'];

// TASK 8: Array of book objects and appending a new item
const classicSciFiBooks = [
  { title: 'Sahih al-Bukhari', author: 'Imam Muhammad ibn Ismail al-Bukhari', year: 846, coverColor: 'sand', genre: 'Religious literature' },
  { title: 'Stories of the Prophets from Adam to Muhammad', author: 'Imad al-Din Abu al-Fida Ismail ibn Kathir', year: 2016, coverColor: 'blue', genre: 'Religious literature' },
  { title: 'Neuromancer', author: 'William Gibson', year: 1984, coverColor: 'neon', genre: 'Cyberpunk' }
];

classicSciFiBooks.push({ title: 'Snow Crash', author: 'Neal Stephenson', year: 1992, coverColor: 'black', genre: 'Cyberpunk' });

// TASK 9: Merging two specific book arrays using spread operator
const cyberneticUniverseBooks = [
  { title: 'Do Androids Dream of Electric Sheep?', author: 'Philip K. Dick', year: 1968, coverColor: 'gray', genre: 'Sci-Fi' },
  { title: 'I, Robot', author: 'Isaac Asimov', year: 1950, coverColor: 'red', genre: 'Sci-Fi' }
];
const unifiedLibraryCollection = [...classicSciFiBooks, ...cyberneticUniverseBooks];

// TASK 10: Transforming array using map method to identify rare items
function tagRareMediaItems(booksArray) {
  const processedCollection = booksArray.map(function(book) {
       const updatedBook = { ...book };
    
    if (updatedBook.year > 2000) {
      updatedBook.isRare = true;
    } else {
      updatedBook.isRare = false;
    }
    
    return updatedBook;
  });
  
  return processedCollection;
}
