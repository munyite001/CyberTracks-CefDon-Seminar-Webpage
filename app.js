const data = [
  {
    title: 'Alfred Hassan',
    desc: 'Founder of Sequre CyberSecurity Firm',
    image: './assets/speaker2.jpg',
    brief: `Alfred has been a security veteran for the last 10 years
        He has written a couple of books on penetration testing techniques which
        are widely adopted worldwide`,
  },

  {
    title: 'Dr Cleophas Oneal',
    desc: 'Havard Professor',
    image: './assets/speaker1.jpg',
    brief: `Dr Oneal is a well renown Security expert in the industry.
        He teaches Network Security and Administration at the Havard University.
        He is often the go-to guy for various explanations on how certain cyber attacks occured`,
  },

  {
    title: 'Mia Arhley',
    desc: 'Security Consultant BillionEra Bank',
    image: './assets/speaker4.jpg',
    brief: `Mia is a Security Consultant at the BillionEra bank.
        She has worked in the field for over 5 years, with knowledge in various
        attack methodologies. She is also the founder of GirlSecure, A TechEd firm 
        that teaches cyber skills to young girls`,
  },

  {
    title: 'Emmanuel Munyite',
    desc: 'Top Hacker @Hacker101',
    image: './assets/speaker3.jpg',
    brief: `Emmanuel is the top ranking Hacker at hacker101, 
        a bug bounty platform that rewards hackers to look for vulnerabilities
        in Companies website. He is well versed in over 7 programming languages. He is also 
        self-taught, without any previous university degrees.`,
  },
];

const openMenu = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const speakersBtn = document.querySelector('.speakers-btn');
const speakers = document.querySelector('.speakers-section');
const arrow = document.querySelector('.arrow-icon');
const btnText = document.querySelector('.btn-text');
const menuLinks = document.querySelectorAll('.menu-link');
const x = data.length;

//Functions
function loadSpeakers(n) {
  for (let i = 0; i < n; i+=1) {
    speakers.innerHTML += `
        <div class='speaker'>
            <div class='image-section'>
               <img src='${data[i].image}' alt='Image of a speaker'>
            </div>
            <div class='text-section'>
                <h3>${data[i].title}</h3>
                <p class='speaker-desc'>
                    ${data[i].desc}
                </p>
                <hr class='line2'/>
                <p class='brief-info'>
                    ${data[i].brief}
                </p>
            </div>
        </div>
        `;
  }
}

function loadMore(n) {
  for (let i = 2; i < n; i+=1) {
    speakers.innerHTML += `
        <div class='speaker added-speaker'>
            <div class='image-section'>
               <img src='${data[i].image}' alt='Image of a speaker'>
            </div>
            <div class='text-section'>
                <h3>${data[i].title}</h3>
                <p class='speaker-desc'>
                    ${data[i].desc}
                </p>
                <hr class='line2'/>
                <p class='brief-info'>
                    ${data[i].brief}
                </p>
            </div>
        </div>
        `;
  }
}

function removeSpeakers() {
  const moreSpeakers = document.querySelectorAll('.added-speaker');
  moreSpeakers.forEach((elem) => {
    elem.remove();
  });
}

openMenu.addEventListener('click', () => {
  mobileMenu.classList.add('show-menu');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show-menu');
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    mobileMenu.classList.remove('show-menu');
  });
});

window.addEventListener('DOMContentLoaded', loadSpeakers(2));

speakersBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (!speakersBtn.classList.contains('more')) {
    speakersBtn.classList.add('more');
    btnText.textContent = 'Less';
    arrow.style.rotate = '180deg';
    loadMore(x);
  } else {
    speakersBtn.classList.remove('more');
    btnText.textContent = 'More';
    arrow.style.rotate = '0deg';
    removeSpeakers();
  }
});
