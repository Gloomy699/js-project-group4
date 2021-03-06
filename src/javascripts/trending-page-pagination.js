import { makesTrendingMkp } from './addTrendsMkp';
import refs from './pagination-btns-refs';

let page = 1;

refs.previousBtn.addEventListener('click', onClickPreviousBtn);
refs.nextBtn.addEventListener('click', onClickNextBtn);
refs.firstBtn.addEventListener('click', onClickFirstBtn);
refs.secondBtn.addEventListener('click', onClickSecondBtn);
refs.thirdBtn.addEventListener('click', onClickThirdBtn);
refs.fourthBtn.addEventListener('click', onClickFourthBtn);
refs.fifthBtn.addEventListener('click', onClickFifthBtn);
refs.sixthBtn.addEventListener('click', onClickSixthBtn);
refs.seventhBtn.addEventListener('click', onClickSeventhBtn);
refs.eighthBtn.addEventListener('click', onClickEighthBtn);
refs.lastBtn.addEventListener('click', onClickLastBtn);

refs.previousBtn.addEventListener('click', scrollMovies);
refs.nextBtn.addEventListener('click', scrollMovies);
refs.firstBtn.addEventListener('click', scrollMovies);
refs.secondBtn.addEventListener('click', scrollMovies);
refs.thirdBtn.addEventListener('click', scrollMovies);
refs.fourthBtn.addEventListener('click', scrollMovies);
refs.fifthBtn.addEventListener('click', scrollMovies);
refs.sixthBtn.addEventListener('click', scrollMovies);
refs.seventhBtn.addEventListener('click', scrollMovies);
refs.eighthBtn.addEventListener('click', scrollMovies);
refs.lastBtn.addEventListener('click', scrollMovies);

function scrollMovies() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function renderPagination(e, btnRef) {
  if (e !== undefined) {
    e.preventDefault();
  }

  refs.previousActiveBtn.classList.remove('current-page');
  refs.fifthBtn.classList.remove('current-page');
  page = btnRef.textContent;
  makesTrendingMkp(page);

  if (refs.secondBtn.textContent !== '...') {
    btnRef.classList.add('current-page');
    refs.previousActiveBtn = btnRef;
  } else {
    refs.fifthBtn.textContent = btnRef.textContent;
    refs.fourthBtn.textContent = Number(refs.fifthBtn.textContent) - 1;
    refs.thirdBtn.textContent = Number(refs.fifthBtn.textContent) - 2;
    refs.sixthBtn.textContent = Number(refs.fifthBtn.textContent) + 1;
    refs.seventhBtn.textContent = Number(refs.fifthBtn.textContent) + 2;

    refs.fifthBtn.classList.add('current-page');
    refs.previousActiveBtn = btnRef;
  }
  if (refs.thirdBtn.textContent == 3) {
    refs.secondBtn.textContent = 2;
  }
}

function onClickNextBtn(e) {
  e.preventDefault();
  console.log(page);

  refs.previousActiveBtn.classList.remove('current-page');

  switch (refs.previousActiveBtn) {
    case refs.firstBtn:
      onClickSecondBtn();
      break;

    case refs.secondBtn:
      onClickThirdBtn();
      break;

    case refs.thirdBtn:
      onClickFourthBtn();
      break;

    case refs.fourthBtn:
      onClickFifthBtn();
      break;

    case refs.fifthBtn:
      onClickSixthBtn();
      break;

    case refs.sixthBtn:
      onClickSeventhBtn();
      break;

    case refs.seventhBtn:
      onClickEighthBtn();
      break;

    case refs.eighthBtn:
      onClickLastBtn();
      break;
  }
  scrollMovies();
}

function onClickLastBtn(e) {
  e.preventDefault();
  if (refs.previousActiveBtn !== '') {
    refs.previousActiveBtn.classList.remove('current-page');
  }
  page = refs.lastBtn.textContent;
  makesTrendingMkp(page);
  refs.lastBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.lastBtn;
  refs.eighthBtn.textContent = page - 1;
  refs.seventhBtn.textContent = page - 2;
  refs.sixthBtn.textContent = page - 3;
  refs.fifthBtn.textContent = page - 4;
  refs.fourthBtn.textContent = page - 5;
  refs.thirdBtn.textContent = page - 6;
  refs.secondBtn.textContent = '...';
  scrollMovies();
}

function onClickPreviousBtn(e) {
  e.preventDefault();
  if (page > 1) {
    page = Number(page) - 1;
  }
  console.log(page);

  refs.previousActiveBtn.classList.remove('current-page');

  switch (refs.previousActiveBtn) {
    case refs.firstBtn:
      break;

    case refs.secondBtn:
      onClickFirstBtn();

      break;

    case refs.thirdBtn:
      onClickSecondBtn();
      break;

    case refs.fourthBtn:
      onClickThirdBtn();
      break;

    case refs.fifthBtn:
      onClickFourthBtn();
      break;

    case refs.sixthBtn:
      onClickFifthBtn();
      break;

    case refs.seventhBtn:
      onClickSixthBtn();
      break;

    case refs.eighthBtn:
      onClickSeventhBtn();
      break;
  }
  scrollMovies();
}

export function onClickFirstBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }

  if (refs.previousActiveBtn !== '') {
    refs.previousActiveBtn.classList.remove('current-page');
  }

  page = 1;

  makesTrendingMkp(page);
  refs.firstBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.firstBtn;
  refs.secondBtn.textContent = page + 1;
  refs.thirdBtn.textContent = page + 2;
  refs.fourthBtn.textContent = page + 3;
  refs.fifthBtn.textContent = page + 4;
  refs.sixthBtn.textContent = page + 5;
  refs.seventhBtn.textContent = page + 6;
  refs.eighthBtn.textContent = '...';

  scrollMovies();
}

export function onClickSecondBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }

  if (refs.secondBtn.textContent !== '...') {
    refs.previousActiveBtn.classList.remove('current-page');

    page = refs.secondBtn.textContent;
    makesTrendingMkp(page);
    refs.secondBtn.classList.add('current-page');
    refs.previousActiveBtn = refs.secondBtn;
  }

  scrollMovies();
}

export function onClickThirdBtn(e) {
  renderPagination(e, refs.thirdBtn);
  scrollMovies();
}

export function onClickFourthBtn(e) {
  renderPagination(e, refs.fourthBtn);
  scrollMovies();
}

export function onClickFifthBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  refs.previousActiveBtn.classList.remove('current-page');

  page = refs.fifthBtn.textContent;
  makesTrendingMkp(page);
  refs.fifthBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.fifthBtn;

  scrollMovies();
}

export function onClickSixthBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  refs.previousActiveBtn.classList.remove('current-page');
  refs.fifthBtn.textContent = Number(refs.sixthBtn.textContent);
  refs.fourthBtn.textContent = Number(refs.fifthBtn.textContent) - 1;
  refs.thirdBtn.textContent = Number(refs.fourthBtn.textContent) - 1;
  refs.sixthBtn.textContent = Number(refs.fifthBtn.textContent) + 1;
  refs.seventhBtn.textContent = Number(refs.sixthBtn.textContent) + 1;
  refs.secondBtn.textContent = '...';
  page = refs.fifthBtn.textContent;
  makesTrendingMkp(page);
  refs.fifthBtn.classList.add('current-page');
  refs.previousActiveBtn = refs.fifthBtn;

  scrollMovies();
}

export function onClickSeventhBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  if (refs.eighthBtn.textContent === '...') {
    refs.previousActiveBtn.classList.remove('current-page');
    refs.fifthBtn.textContent = Number(refs.seventhBtn.textContent);
    refs.fourthBtn.textContent = Number(refs.fifthBtn.textContent) - 1;
    refs.thirdBtn.textContent = Number(refs.fourthBtn.textContent) - 1;
    refs.sixthBtn.textContent = Number(refs.fifthBtn.textContent) + 1;
    refs.seventhBtn.textContent = Number(refs.sixthBtn.textContent) + 1;
    refs.secondBtn.textContent = '...';
    page = refs.fifthBtn.textContent;
    makesTrendingMkp(page);
    refs.fifthBtn.classList.add('current-page');
    refs.previousActiveBtn = refs.fifthBtn;
  }

  scrollMovies();
}

export function onClickEighthBtn(e) {
  if (e !== undefined) {
    e.preventDefault();
  }
  if (refs.eighthBtn.textContent !== '...') {
    refs.previousActiveBtn.classList.remove('current-page');

    page = refs.eighthBtn.textContent;
    makesTrendingMkp(page);
    refs.eighthBtn.classList.add('current-page');
    refs.previousActiveBtn = refs.eighthBtn;
  }

  scrollMovies();
}
