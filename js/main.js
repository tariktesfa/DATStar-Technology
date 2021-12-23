const navigation = document.querySelector('.mobile-nav');
const expandMenu = () => {
  navigation.classList.remove('animate-left');
  navigation.classList.add('animate-right');
};

const closeMenu = () => {
  navigation.classList.remove('animate-right');
  navigation.classList.add('animate-left');
};

document.querySelector('.open').addEventListener('click', expandMenu);

const closeClass = document.querySelectorAll('.close');
closeClass.forEach(((element) => element.addEventListener('click', closeMenu)));

const header = document.querySelector('.page-header');

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    if (!header.classList.contains('white-bg')) {
      header.classList.add('white-bg');
    }
  } else {
    header.classList.remove('white-bg');
  }
});

const supportList = [
  {
    name: 'Alex Abewa',
    postion: 'CTO at DATStar Technology',
    imagePath: './images/avator.png',
    description: 'Alex is one of a dedicated support team who solves any issue related to GSP and speedlimeter. He has a long time experice in this domain.',
  },
  {
    name: 'Alex Abewa',
    postion: 'CTO at DATStar Technology',
    imagePath: './images/avator.png',
    description: 'Alex is one of a dedicated support team who solves any issue related to GSP and speedlimeter. He has a long time experice in this domain.',
  },
  {
    name: 'Alex Abewa',
    postion: 'CTO at DATStar Technology',
    imagePath: './images/avator.png',
    description: 'Alex is one of a dedicated support team who solves any issue related to GSP and speedlimeter. He has a long time experice in this domain.',
  },
  {
    name: 'Daniel Getachew',
    postion: 'CTO at DATStar Technology',
    imagePath: './images/avator.png',
    description: 'Alex is one of a dedicated support team who solves any issue related to GSP and speedlimeter. He has a long time experice in this domain.',
  },
  {
    name: 'Daniel Getachew',
    postion: 'CTO at DATStar Technology',
    imagePath: './images/avator.png',
    description: 'Alex is one of a dedicated support team who solves any issue related to GSP and speedlimeter. He has a long time experice in this domain.',
  },
  {
    name: 'Daniel Getachew',
    postion: 'CTO at DATStar Technology',
    imagePath: './images/avator.png',
    description: 'Alex is one of a dedicated support team who solves any issue related to GSP and speedlimeter. He has a long time experice in this domain.',
  },
];

const expandSupport = (start, end) => {
  if (start === 0) {
    document.querySelector('#support-list').innerHTML = '';
  }
  for (let i = start; i < end; i += 1) {
    document.querySelector('#support-list').innerHTML += `
        <li class="support-item">
          <div class="avator">
            <img src="${supportList[i].imagePath}" alt="">
          </div>
          <div class="biography">
            <h3 class="names">${supportList[i].name}</h3>
            <p class="job-title">${supportList[i].postion}</p>
            <hr class="support-info-separator">
            <p class="experience">${supportList[i].description}</p>
          </div>
        </li>
      `;
  }
};

if (window.screen.width < 768) {
  expandSupport(0, 2);
} else {
  expandSupport(0, supportList.length);
}

document.querySelector('.more').addEventListener('click', (e) => {
  if (!e.target.classList.contains('show-more')) {
    e.target.classList.add('show-more');
    expandSupport(2, supportList.length);
    e.target.innerHTML = 'Less <i class="fa fa-angle-up"></i>';
  } else {
    e.target.innerHTML = 'More <i class="fa fa-angle-down"></i>';
    e.target.classList.remove('show-more');
    expandSupport(0, 2);
  }
});

window.addEventListener('resize', () => {
  if (window.screen.width < 768) {
    expandSupport(0, 2);
  } else {
    expandSupport(0, supportList.length);
  }
});
