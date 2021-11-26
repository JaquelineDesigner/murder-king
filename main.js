
setTimeout(() => {

  const getComputedStyle = (element, style) => {
    return window.getComputedStyle(element)[style];
  }
  
  const getPx = (px) => {
    return parseFloat(px.replace('px', ''));
  }
  
  const getActiveValue = (number) => {
    const activeValue = (number * personagemSize) + halfPersonagemSize;
    return activeValue;
  }
  
  const setActiveValue = (number) => {
    const value = getActiveValue(number);
    elPersonagensImgLists.style.marginLeft = '-' + value + 'px';
  }

  const setActiveElem = (element, list) => {
    list.forEach((el, i) => {
      if (el.className.includes('active')) {
        el.className = el.className.replace(' active', '');
      }
    })
    element.className = element.className + ' active';
  }

  let elPersonagensLists = document.querySelector('#personagens .personagens-list');
  let elPersonagensImgLists = document.querySelector('#personagens .personagens-img-list');
  let elPersonagemImg = document.querySelector('#personagens .personagens-img-list .personagem');
  let allPersonagensImg = document.querySelectorAll('#personagens .personagens-img-list .personagem');
  let allPersonagens = document.querySelectorAll('#personagens .personagens-list .personagem');

  let halfPersonagemSize =
    (elPersonagemImg.clientWidth / 2) +
    getPx(getComputedStyle(elPersonagemImg, 'marginLeft'));

  let personagemSize =
    elPersonagemImg.clientWidth +
    getPx(getComputedStyle(elPersonagemImg, 'marginLeft')) +
    getPx(getComputedStyle(elPersonagemImg, 'marginRight'));
  
  setActiveValue(0);
  setActiveElem(allPersonagensImg[0], allPersonagensImg);
  setActiveElem(allPersonagens[0], allPersonagens);

  allPersonagensImg.forEach((el, i) => {
    el.addEventListener('click', function(e) {
      setActiveValue(i);
      setActiveElem(el, allPersonagensImg);
      setActiveElem(allPersonagens[i], allPersonagens);
    });
  })
}, 0);