const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }


  });
});

const mybackground1Elements = document.querySelectorAll('.mybackground1');
mybackground1Elements.forEach((el) => observer.observe(el));


const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show2');
    }


  });
});

const mybackground2Elements = document.querySelectorAll('.my-background-text');
mybackground2Elements.forEach((el) => observer.observe(el));


