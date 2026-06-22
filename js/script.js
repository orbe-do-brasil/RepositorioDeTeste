const container = document.getElementById('carousel');

function scrollCarousel(direction) {
  if (!container) return;

  const scrollAmount = 430; 
  
  
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  
  if (direction === 1 && container.scrollLeft >= maxScrollLeft - 5) {
    container.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  } 

  else if (direction === -1 && container.scrollLeft <= 5) {
    container.scrollTo({
      left: maxScrollLeft,
      behavior: 'smooth'
    });
  } 

  else {
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
}