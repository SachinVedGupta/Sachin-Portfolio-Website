const afirst = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('before1');
    }


  });
});

const first = document.querySelectorAll('.view');
first.forEach((el) => afirst.observe(el));





const asecond = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('before2');
    }


  });
});

const second = document.querySelectorAll('.download');
second.forEach((el) => asecond.observe(el));








const athird = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('before3');
    }


  });
});

const third = document.querySelectorAll('.divv');
third.forEach((el) => athird.observe(el));



const afourth = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('before4');
    }


  });
});

const fourth = document.querySelectorAll('.divv2');
fourth.forEach((el) => afourth.observe(el));
