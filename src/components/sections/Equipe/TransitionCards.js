function TransitionCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('transition'));
    setTimeout(() => cards.forEach(card => card.classList.remove('transition')), 501);
  }

  export default TransitionCards