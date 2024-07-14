document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('animated-text');
    const text = textElement.innerText;
    const typingSpeed = 100; 
    const pauseTime = 1000; 
  
    let index = 0;
    let isDeleting = false;
    let pause = false;
  
    function type() {
      if (pause) {
        setTimeout(type, pauseTime);
        pause = false;
        return;
      }
  
      if (isDeleting) {
        if (index > 0) {
          textElement.innerText = text.substring(0, index);
          index--;
        } else {
          isDeleting = false;
          pause = true;
        }
      } else {
        if (index < text.length) {
          textElement.innerText = text.substring(0, index + 1);
          index++;
        } else {
          isDeleting = true;
          pause = true;
        }
      }
  
      setTimeout(type, typingSpeed);
    }
  
    type(); 
  });