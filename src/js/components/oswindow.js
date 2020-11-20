const windows = document.querySelectorAll('.os-window__content');

Array.from(windows).forEach((window) => {
  const entries = window.querySelectorAll('pre');

  const codeEntries = Array.from(entries).map((entry) => {
    return entry.outerHTML;
  });

  console.log(codeEntries);

  const typewriter = new Typewriter(window, {
    loop: true,
    delay: 150,
  });

  codeEntries.forEach((entry) => {
    typewriter.typeString(entry);
    typewriter.deleteAll();
  });

  typewriter.start();
});
