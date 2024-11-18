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
    const stepsBelow = steps.filter(item => item.stepNumber <= 0)
    const increment = stepsBelow > 3 ? 400 / stepsBelow.length : 100;

    // Second pass: Generate the Tailwind fontSize configuration
    steps.forEach(({ stepNumber, clampValue }) => {
      const multiplier = stepNumber < 0 ? increment : 100;
      const tailwindKey = stepBase + stepNumber * multiplier;
      fontSize[tailwindKey] = `clamp(${clampValue})`;
    });

    // Display the result in the component
    this.displayResult(fontSize, css.slice(0, css.indexOf("\n")));
  }

  displayResult(fontSize, link) {
    // Add the link as a comment
    const header = `${link}\nfontSize: {\n`;

    // Create the fontSize entries with the required tab and format
    const formattedFontSize = Object.entries(fontSize)
      .map(([key, value]) => `\t${key}: '${value}'`)
      .join(',\n');

    // Wrap it all with the closing bracket and comma
    const footer = '\n},';

    // Combine header, formatted content, and footer
    const outputString = `${header}${formattedFontSize}${footer}`;

    // Update the output element to display the result
    this.querySelector('#output').textContent = outputString;
  }
}

// Define the custom element
customElements.define('font-size-converter', FontSizeConverter);