class FontSizeConverter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Add event listener to the convert button
    this.querySelector('#convertButton').addEventListener('click', () => this.convertFontSize());
  }

  convertFontSize() {
    const css = this.querySelector('#cssInput').value;

    const fontSize = {};
    const regex = /--step-(-?\d+):\s*clamp\(([^)]+)\);/g;
    const stepBase = 400; // Starting point for `--step-0`
    let maxNegativeStep = 0;
    let match;

    // First pass: Determine the number of negative steps
    const steps = [];
    while ((match = regex.exec(css)) !== null) {
      const stepNumber = parseInt(match[1], 10);
      const clampValue = match[2].trim();
      steps.push({ stepNumber, clampValue });

      // Track the largest negative step
      if (stepNumber < 0 && Math.abs(stepNumber) > maxNegativeStep) {
        maxNegativeStep = Math.abs(stepNumber);
      }
    }

    // Determine increment based on the number of steps below 0
    const increment = 400 / steps.filter(item => item.stepNumber <= 0).length;

    // Second pass: Generate the Tailwind fontSize configuration
    steps.forEach(({ stepNumber, clampValue }) => {
      const tailwindKey = stepBase + stepNumber * increment;
      fontSize[tailwindKey] = `clamp(${clampValue})`;
    });

    // Display the result in the component
    this.displayResult(fontSize);
  }

  displayResult(fontSize) {
    // Convert the fontSize object to a JSON string with indentation for readability
    const formattedFontSize = JSON.stringify(fontSize, null, 2);

    // Update the output element to display the result
    this.querySelector('#output').textContent = formattedFontSize;
  }
}

// Define the custom element
customElements.define('font-size-converter', FontSizeConverter);