// Function to generate a random hex color
export function getRandomColor() {
  // Generate a random number between 0 and 16777215 (decimal value of FFFFFF in hexadecimal)
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // Ensure that the color has 6 digits (add leading zeros if needed)
  return `#${"0".repeat(6 - randomColor.length)}${randomColor}`;
}
