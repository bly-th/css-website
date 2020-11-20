const code = document.querySelector('.os-window__content code');
const html = code.innerHTML;

const typewriter = new Typewriter(code, {
  loop: true,
  delay: 75,
});

typewriter.typeString(html).start();
