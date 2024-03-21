document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('click', function () {
      // 클릭된 카드의 이미지와 설명창 가져오기
      const image = card.querySelector('.card-image');
      const description = card.querySelector('.card-description');
      
      // 카드 확대하기
      card.classList.toggle('zoomed');
      
      // 설명창 보이거나 숨기기
      description.classList.toggle('show');
    });
  });
});