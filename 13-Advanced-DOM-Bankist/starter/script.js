'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const header = document.querySelector('.header');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Page Nav

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//1. Add event listener to common parent element
//2. Determine where the event originated

document.querySelector('.nav__links').addEventListener('click', function (e) {
  //Matching Strategy
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

//Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes

const logo = document.querySelector('.nav__logo');
logo.setAttribute('company', 'Bankist');
const link = document.querySelector('.twitter-link');

//Data Attributes

//Classes

//Smooth Scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

const newColor = randomColor(0, 255);

document
  .querySelector('.nav__links')
  .addEventListener('click', function (e) {});

document.querySelector('.nav').addEventListener('click', function (e) {});

const h1 = document.querySelector('h1');

//Downward: child
// h1.firstElementChild.style.color = newColor;
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

//Tabbed Component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  //Guard Clause
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //active tab
  clicked.classList.add('operations__tab--active');
  //Activate Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky Menu
// const initialCoordinates = section1.getBoundingClientRect();

// window.addEventListener('scroll', e => {
//   if (window.scrollY > initialCoordinates.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//Sticky Menu Intersection Api
// const observerCallback = (entries, observer) => {
// entries.forEach(entry => {

// })
// }
// const observerOptions = {
// root: null,
// threshold: [0, 0.2]
// }
// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = entries => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//Revealing elements on scroll
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//lazy loading images
const imgTargets = document.querySelectorAll('img[data-src');

const loadImg = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => {
  imgObserver.observe(img);
});

//Slider Component

const slider = () => {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.5)';
  // slider.style.overlay = 'visible';

  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = slide => {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide ="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = slide => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = () => {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = () => {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = () => {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  init();

  btnRight.addEventListener('click', () => {
    nextSlide();
  });

  btnLeft.addEventListener('click', () => {
    prevSlide();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    }
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', e => {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();