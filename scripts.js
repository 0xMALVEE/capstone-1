const phoneMenu = document.querySelector('.phone-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-btn');

phoneMenu.addEventListener('click', (e) => {
  e.preventDefault();
  mobileNav.style.display = 'block';
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mobileNav.style.display = 'none';
});

const mobileNavLinks = document.querySelector('.mobile-navs-links');
const navLinks = mobileNavLinks.querySelectorAll('li');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.style.display = 'none';
  });
});

const solosistsData = [
  {
    imgSrc: 'https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/2952568/image/74737f8eff334f61d4cecad0177e733d',
    name: 'Maurice Ravel',
    instruments: ['Piano', 'Orchestra'],
    quote: 'The only love affair I have ever had was with music. Ravel was a French composer of the early 20th century, known for his impressionistic style and orchestral works such as Boléro and Daphnis et Chloé.',
  },
  {
    imgSrc: 'https://english-national-opera-live.s3.amazonaws.com/wp-content/uploads/2018/11/Jacques-Offenbach.jpg',
    name: 'Jacques Offenbach',
    instruments: ['Cello'],
    quote: 'The music of the people is like a rare and lovely flower growing amidst encroaching weeds. Offenbach was a German-French composer and cellist of the Romantic era, best known for his operettas such as Orpheus in the Underworld and La belle Hélène.',
  },
  {
    imgSrc: 'https://i1.sndcdn.com/avatars-ObMbnMAzqi3evjAV-swiAbA-t500x500.jpg',
    name: 'Claude Debussy',
    instruments: ['Piano'],
    quote: 'Music is the space between the notes. Debussy was a French composer of the late Romantic era and one of the most prominent figures associated with Impressionist music.',
  },
  {
    imgSrc: 'https://www.dallassymphony.org/wp-content/uploads/2022/05/Camille-Saint-Saens-666x375.jpg',
    name: 'Camille Saint-Saëns',
    instruments: ['Piano', 'Organ'],
    quote: 'Art is intended to create beauty and character. If art does not do this, it is nothing. Saint-Saëns was a French composer, organist, and pianist of the Romantic era. He is best known for his works The Carnival of the Animals and his Third Symphony.',
  },
  {
    imgSrc: 'https://cdn.britannica.com/16/142316-050-6EDD440F/Georges-Bizet-cigarette-trading-card.jpg?w=300&h=169&c=crop',
    name: 'Georges Bizet',
    instruments: ['Piano'],
    quote: "I am a musician who cannot write a single note. Bizet was a French composer of the Romantic era, best known for his opera Carmen and his incidental music to the play L'Arlésienne.",
  },
  {
    imgSrc: 'https://www.dallassymphony.org/wp-content/uploads/2022/05/Hector-Berlioz.jpg',
    name: 'Hector Berlioz',
    instruments: ['Orchestra', 'Voice'],
    quote: 'Time is a great teacher, but unfortunately it kills all its pupils. Berlioz was a French Romantic composer, best known for his compositions Symphonie fantastique and Grande messe des morts.',
  },
];

// loop through solosistsData
let solosistsHtml = '';
for (let i = 0; i < solosistsData.length; i += 1) {
  // create HTML for each soloist
  solosistsHtml += `
    <div class="solosist">
      <div>
        <img src="${solosistsData[i].imgSrc}" alt="${solosistsData[i].name}">
      </div>
      <div class="solosist-info">
        <h3>${solosistsData[i].name}</h3>
        <p class="ins">${solosistsData[i].instruments[0]}</p>
        <p class="quote">
          "${solosistsData[i].quote}"
          <br>
          ${solosistsData[i].description}
        </p>
      </div>
    </div>
  `;
}

// insert HTML into solosists-list div
const solosistsListDiv = document.querySelector('.solosists-list');
solosistsListDiv.innerHTML = solosistsHtml;
