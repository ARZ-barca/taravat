// index of the current section
let sectionIndex = 0;

// defferent available section
const section1 = document.querySelector(".section.index-1");
const section2 = document.querySelector(".section.index-2");
const section3 = document.querySelector(".section.index-3");
const sections = [section1, section2, section3];

// next and back buttons for changint the section
const next = document.querySelector(".next");
const back = document.querySelector(".back");

// selection of different sections
const selection1 = document.querySelector(".selection li:nth-child(1)");
const selection2 = document.querySelector(".selection li:nth-child(2)");
const selection3 = document.querySelector(".selection li:nth-child(3)");
const selections = [selection1, selection2, selection3];

// address and number
const addressButton = document.querySelector(".header .address-button");
const numberButton = document.querySelector(".header .number-button");
const address = document.querySelector(".address");
const number = document.querySelector(".number");

// checks if next and back buttons should be displayed
function checkNextAndBack(sectionIndex, sectionsLength) {
  if (sectionIndex === 0) {
    next.classList.add("active");
    back.classList.remove("active");
  } else if (sectionIndex === sectionsLength - 1) {
    next.classList.remove("active");
    back.classList.add("active");
  } else {
    next.classList.add("active");
    back.classList.add("active");
  }
}

// change the selection section with next and back buttons
function changeSelection(newIndex) {
  selections[sectionIndex].classList.remove("active");
  selections[newIndex].classList.add("active");
}

// changes the section to next section
function goNext(sectionIndex) {
  if (sectionIndex >= sections.length - 1) {
    return sectionIndex;
  }
  sections[sectionIndex].classList.remove("active");
  const newIndex = sectionIndex + 1;
  sections[newIndex].classList.add("active");
  checkNextAndBack(newIndex, sections.length);
  changeSelection(newIndex);
  return newIndex;
}

// changes the section to perviuos section
function goBack(sectionIndex) {
  if (sectionIndex <= 0) {
    return sectionIndex;
  }
  sections[sectionIndex].classList.remove("active");
  const newIndex = sectionIndex - 1;
  sections[newIndex].classList.add("active");
  checkNextAndBack(newIndex, sections.length);
  changeSelection(newIndex);
  return newIndex;
}

// selections
selections.forEach((selection, selectionIndex) => {
  selection.addEventListener("click", () => {
    if (sectionIndex === selectionIndex) {
      return;
    }
    sections[sectionIndex].classList.remove("active");
    checkNextAndBack(selectionIndex, sections.length);
    changeSelection(selectionIndex);
    sectionIndex = selectionIndex;
    sections[sectionIndex].classList.add("active");
  });
});

next.addEventListener("click", () => {
  sectionIndex = goNext(sectionIndex, sections);
});

back.addEventListener("click", () => {
  sectionIndex = goBack(sectionIndex, sections);
});

// show and hide address and number
addressButton.addEventListener("click", () => {
  addressButton.classList.toggle("active");
  address.classList.toggle("active");
});

numberButton.addEventListener("click", () => {
  numberButton.classList.toggle("active");
  number.classList.toggle("active");
});
