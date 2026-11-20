// Ajuste la hauteur du cadre de l'annexe intranet à son contenu (même origine). Sans script, le cadre garde 80vh et défile.
const frame = document.querySelector('.intranet-frame');
const fit = () => {
  const doc = frame?.contentDocument;
  if (doc?.body) frame.height = String(doc.documentElement.scrollHeight);
};
frame?.addEventListener('load', () => {
  fit();
  new ResizeObserver(fit).observe(frame.contentDocument.body);
});
addEventListener('resize', fit);
