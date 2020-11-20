const code = document.querySelector('.os-window__content');
const blocks = document.querySelector('.os-window__blocks');
const entries = blocks.querySelectorAll('pre');

const codeEntries = Array.from(entries).map((entry) => {
  return entry.querySelector('code').innerHTML;
});

const typewriter = new Typewriter('.os-window__output', {
  loop: true,
  delay: 150,
});

codeEntries.forEach((entry) => {
  typewriter.typeString(entry);
  typewriter.deleteAll();
});

typewriter.start();

blocks.innerHTML = '';
