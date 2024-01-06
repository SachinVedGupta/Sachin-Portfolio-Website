const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }


  });
});

const mybackground1Elements = document.querySelectorAll('.module');
mybackground1Elements.forEach((el) => observer.observe(el));




const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show2');
    }


  });
});

const mybackground2Elements = document.querySelectorAll('.module2');
mybackground2Elements.forEach((el) => observer2.observe(el));

