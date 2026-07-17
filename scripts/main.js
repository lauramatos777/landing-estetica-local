const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observerInstance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const yearElement = document.querySelector('[data-year]');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// CTA form: abre WhatsApp com mensagem pré-preenchida
document.addEventListener('DOMContentLoaded', () => {
  const ctaForm = document.querySelector('.cta__form');
  if (!ctaForm) return;

  ctaForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('cta-name').value.trim();
    const phone = document.getElementById('cta-phone').value.trim();
    const message = document.getElementById('cta-msg').value.trim();

    let text = 'Olá, gostaria de agendar um atendimento.';
    if (name) text += `\nNome: ${name}`;
    if (phone) text += `\nTelefone: ${phone}`;
    if (message) text += `\nMensagem: ${message}`;

    const number = '5511999999999';
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  });
});
