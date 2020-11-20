const codeWindows = document.querySelectorAll('.os-window__code');

Array.from(codeWindows).forEach((codeWindow) => {
  const entries = codeWindow.querySelectorAll('pre');

  const codeEntries = Array.from(entries).map((entry) => {
    return entry.outerHTML;
  });

  codeWindow.innerHTML = '';

  const typewriter = new Typed(codeWindow, {
    loop: true,
    typeSpeed: 70,
    strings: codeEntries,
  });

  typewriter.start();
});
