// filename: advanced_data_processing.js

// This code demonstrates advanced data processing by performing statistical analysis on a dataset.

// Function to generate random dataset
function generateDataset(size) {
  let dataset = [];
  for (let i = 0; i < size; i++) {
    dataset.push(Math.random() * 100); // Generating random numbers between 0 and 100
  }
  return dataset;
}

// Function to calculate the mean of a dataset
function calculateMean(dataset) {
  let sum = dataset.reduce((acc, val) => acc + val, 0);
  return sum / dataset.length;
}

// Function to calculate the median of a dataset
function calculateMedian(dataset) {
  let sortedDataset = dataset.sort((a, b) => a - b);
  let middleIndex = Math.floor(sortedDataset.length / 2);
  
  if (sortedDataset.length % 2 === 1) {
    return sortedDataset[middleIndex];
  } else {
    return (sortedDataset[middleIndex - 1] + sortedDataset[middleIndex]) / 2;
  }
}

// Function to calculate the mode of a dataset
function calculateMode(dataset) {
  let counts = {};
  dataset.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  let maxFrequency = Math.max(...Object.values(counts));
  let modes = [];
  for (let num in counts) {
    if (counts[num] === maxFrequency) {
      modes.push(parseFloat(num));
    }
  }
  return modes;
}

// Function to calculate the standard deviation of a dataset
function calculateStandardDeviation(dataset) {
  let mean = calculateMean(dataset);
  let squaredDifferences = [];
  dataset.forEach((num) => {
    squaredDifferences.push(Math.pow(num - mean, 2));
  });
  let sumOfSquaredDifferences = squaredDifferences.reduce((acc, val) => acc + val);
  let variance = sumOfSquaredDifferences / dataset.length;
  return Math.sqrt(variance);
}

// Example usage

// Generate a dataset of 1000 numbers
let dataset = generateDataset(1000);

// Calculate and print the mean
let mean = calculateMean(dataset);
console.log(`Mean: ${mean}`);

// Calculate and print the median
let median = calculateMedian(dataset);
console.log(`Median: ${median}`);

// Calculate and print the mode
let mode = calculateMode(dataset);
console.log(`Mode: ${mode}`);

// Calculate and print the standard deviation
let standardDeviation = calculateStandardDeviation(dataset);
console.log(`Standard Deviation: ${standardDeviation}`);

// Perform other advanced data processing operations on the dataset...

// ... (more code)
// ... (more code)

// End of code