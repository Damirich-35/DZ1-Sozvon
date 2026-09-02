import { socialMediaComments } from './comments.js'; 
// TASK 2: Filter array of numbers starting from 5
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = Numbers.filter(number => number >= 5);

// TASK 3:
const Appliances = [
  'Toaster',
  'mixer',
  'Microwave',
  'Blender',
  'Kettle'
];

const hasToaster = AppliancesList.includes('Toaster');

// TASK 4:
function reverse(targetArray) {
    targetArray.reverse();
}

ReversedArray(filtered);
ReversedArray(Appliances);

// TASK 7:
const ComComments = socialMediaComments.filter(comment => comment.email.includes('.com'));
console.log('TASK 7 (.com comments):', ComComments); 

// TASK 8 (updated postId):
const updatedComments = socialMediaComments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});
console.log('TASK 8 (updated postId):', updatedComments);

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


