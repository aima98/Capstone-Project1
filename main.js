const hideScrollBar = document.querySelector('body');
const hamburger = document.querySelector('.hamburger-btn');
const headerTwo = document.querySelector('.header-two');

hamburger.addEventListener('click', () => {
  headerTwo.classList.toggle('open');
  hideScrollBar.classList.toggle('hide-scrollbar');
});

const closeMenu = document.querySelector('.close-btn');
closeMenu.addEventListener('click', () => {
  headerTwo.classList.remove('open');
  hideScrollBar.classList.remove('hide-scrollbar');
});

const groupMembers = [
  {
    name: 'KIM Namjoon (RM)',
    picture: './assets/img/RM.png',
    altText: 'Member photo',
    occupation: 'Artist - HYBE Labels',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
  {
    name: 'KIM Seokjin (Jin)',
    picture: './assets/img/JIN.png',
    altText: 'Member photo',
    occupation: 'Artist - HYBE Labels',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
  {
    name: 'MIN Yoongi (Suga)',
    picture: './assets/img/SUGA.png',
    altText: 'Member photo',
    occupation: 'Artist - HYBE Labels',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
  {
    name: 'JUNG Hoseok (J-hope)',
    picture: './assets/img/jhope.png',
    altText: 'Member photo',
    occupation: 'Artist - HYBE Labels',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
  {
    name: 'PARK Jimin (JIMIN)',
    picture: './assets/img/JIMIN.png',
    altText: 'Member photo',
    occupation: 'Artist - HYBE Labels',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
  {
    name: 'KIM Taehyung (V)',
    picture: './assets/img/v.png',
    altText: 'Member photo',
    occupation: 'Artist - HYBE Labels',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
  {
    name: 'Jeon Jungkook (JUNGKOOK)',
    picture: './assets/img/jungkook.png',
    altText: 'Member photo',
    occupation: 'Artist - HYBE Labels',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat aliquam consectetur expedita esse error.',
  },
];

for (let i = 0; i < groupMembers.length; i += 1) {
  const groupMembersTemp = `
    <div class="group-member">
      <img src="${groupMembers[i].picture}" alt="${groupMembers[i].altText}">
      <div class="text-content">
        <h3>${groupMembers[i].name}</h3>
        <p class="italic-text"><em>${groupMembers[i].occupation}</em></p>
        <hr>
        <p>${groupMembers[i].description}</p>
      </div>
    </div>
    `;
  const member = document.querySelector('.gm-section');
  member.innerHTML += groupMembersTemp;
}