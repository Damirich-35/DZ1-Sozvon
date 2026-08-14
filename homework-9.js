import { socialMediaComments } from './comments.js'; 
// TASK 2: Filter array of numbers starting from 5
const initialNumbersSequence =[1,2,3,4,5,6,7,8,9,10]
const filteredNumbersSequence = initialNumbersSequence.filter(number => number >= 5);

// TASK 3:
const kitchenAppliancesList = [
  'Toaster',
  'mixer',
  'Microwave',
  'Blender',
  'Kettle'
];

const hasSpecificAppliance = kitchenAppliancesList.includes('Toaster');

// TASK 4:
function getReversedArray(targetArray) {
    targetArray.reverse();
}

getReversedArray(filteredNumbersSequence);
getReversedArray(kitchenAppliancesList);


// TASK 7:
const dotComComments = socialMediaComments.filter(comment => comment.email.includes('.com'));
console.log('TASK 7 (.com comments):', dotComComments); 

// TASK 8 (updated postId):
const updatedPostIdComments = socialMediaComments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});
console.log('TASK 8 (updated postId):', updatedPostIdComments);

// TASK 9
const simplifiedComments = socialMediaComments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});
console.log('TASK 9 (only id and name):', simplifiedComments);

// TASK 10 (validated comments):
const validatedComments = socialMediaComments.map(comment => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180
  };
});
console.log('TASK 10 (validated comments):', validatedComments);

// TASK 11 
const emailsWithReduce = socialMediaComments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, []);
console.log('TASK 11 (Emails via reduce):', emailsWithReduce);

const emailsWithMap = socialMediaComments.map(comment => comment.email);
console.log('TASK 11 (Emails via map):', emailsWithMap);

// TASK 12 (Strings):
const emailsStringJoin = emailsWithReduce.join(', ');
console.log('TASK 12 (via join):', emailsStringJoin);

const emailsStringToString = emailsWithReduce.toString();
console.log('TASK 12 (via toString):', emailsStringToString);


