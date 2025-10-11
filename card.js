 function toggleCard(card) {
            
    const parentSection = card.closest('.section');
    const allCards = parentSection.querySelectorAll('.card');
            
    allCards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('active')) {
            otherCard.classList.remove('active');
            }
        });
            
            
        card.classList.toggle('active');
    }