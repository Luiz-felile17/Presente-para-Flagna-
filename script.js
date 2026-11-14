document.addEventListener('DOMContentLoaded', () => {
  const openLetterBtn = document.getElementById('openLetter');
  const reasonsBtn = document.getElementById('reasonsButton');
  const finalBtn = document.getElementById('finalButton');
  const replayBtn = document.getElementById('replayButton');

  const letterSection = document.getElementById('letterSection');
  const reasonsSection = document.getElementById('reasonsSection');
  const finalSection = document.getElementById('finalSection');

  const reasonButtons = document.querySelectorAll('.reason');
  const reasonMessage = document.getElementById('reasonMessage');
  const toast = document.getElementById('toast');
  const heartsContainer = document.querySelector('.floating-hearts');

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(toast.hideTimeout);
    toast.hideTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  function revealSection(section, message) {
    if (!section) return;
    section.classList.remove('hidden');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (message) showToast(message);
  }

  function createHeart() {
    if (!heartsContainer) return;
    const heart = document.createElement('span');
    const symbols = ['♥', '♡', '💗', '💕'];
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 14 + 12) + 'px';
    heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }

  setInterval(createHeart, 700);

  if (openLetterBtn) {
    openLetterBtn.addEventListener('click', () => {
      revealSection(letterSection, 'Uma cartinha especial para você 💌');
    });
  }

  if (reasonsBtn) {
    reasonsBtn.addEventListener('click', () => {
      revealSection(reasonsSection, 'Toque nos cartões para ler ✨');
    });
  }

  reasonButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      reasonButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const msg = btn.getAttribute('data-message');
      if (reasonMessage && msg) {
        reasonMessage.textContent = msg;
      }
    });
  });

  if (finalBtn) {
    finalBtn.addEventListener('click', () => {
      revealSection(finalSection, 'Com muito carinho ❤️');
    });
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      if (letterSection) letterSection.classList.add('hidden');
      if (reasonsSection) reasonsSection.classList.add('hidden');
      if (finalSection) finalSection.classList.add('hidden');
      reasonButtons.forEach((b) => b.classList.remove('active'));
      if (reasonMessage) {
        reasonMessage.textContent = 'Escolha um cartão, meu bem. 💗';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast('Começando novamente ♡');
    });
  }
});
