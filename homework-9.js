
// TASK 2: Filter array of numbers starting from 5
const initialNumbersSequence =[1,2,3,4,5,6,7,8,9,10];
const filteredNumbersSequence = initialNumbersSequence.filter(function(number) {
    return number >= 5;
});


// TASK 3: Check if a specific string exists in the array
const kitchenAppliancesList = [
  'Toaster',
  'mixer',
  'Microwave',
  'Blender',
  'Kettle'
];

const hasSpecificAppliance = kitchenAppliancesList.includes('Toaster');

// TASK 4: Function to reverse any array and reversing both arrays from tasks 2 and 3
function getReversedArray(targetArray) {
  return [...targetArray].reverse();
}

const reversedNumbersResult = getReversedArray(filteredNumbersSequence);
const reversedAppliancesResult = getReversedArray(kitchenAppliancesList);
