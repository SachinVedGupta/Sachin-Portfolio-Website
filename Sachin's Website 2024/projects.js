const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    console.log(entry);

    setTimeout(() => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    }, index * 500); // Increase the delay for each element
  });
});

const mybackground1Elements = document.querySelectorAll('.projects');
mybackground1Elements.forEach((el) => observer.observe(el));


