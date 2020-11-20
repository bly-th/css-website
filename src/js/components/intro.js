const code = document.querySelector('.os-window__content');
const entries = code.querySelectorAll('pre');

const codeEntries = Array.from(entries).map((entry) => {
  return entry.innerHTML;
});

const typewriter = new Typewriter(code, {
  loop: true,
  delay: 150,
});

codeEntries.forEach((entry) => {
  typewriter.typeString(entry);
  typewriter.deleteAll();
});

typewriter.start();
