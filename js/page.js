import { getHeightHeader, checkScrollY } from "./modules/header.js";
import { searcBlockTab } from "./modules/tab.js";
import { toggleDropdown, firstActiveText } from "./modules/dropdown.js";
import { initModal, checkStartOpen } from "./modules/modal.js";
import { initFormValidation } from "./modules/validate.js";
import { toggleAccordeonItems } from "./modules/accordeon.js";
import { initMenu } from "./modules/menu.js";
import { checkStorage, initStorage } from "./modules/localStorage.js";

const handleGlobalClick = (e) => {
  toggleDropdown(e);
  searcBlockTab(e);
  initModal(e);
  toggleAccordeonItems(e);
  initMenu(e);
  initStorage(e);
};

const initValidate = () => {
  const forms = document.querySelectorAll("form.form");
  forms.forEach((form) => {
    initFormValidation(form);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  checkStorage();
  checkStartOpen();
  getHeightHeader();
  initValidate();
  firstActiveText();

  document.addEventListener("click", handleGlobalClick);
});

window.addEventListener("resize", getHeightHeader);

document.addEventListener("scroll", checkScrollY);
