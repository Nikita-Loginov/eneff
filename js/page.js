import { getHeightHeader, checkScrollY } from "./modules/header.js";
import { searcBlockTab } from "./modules/tab.js";
import { initModal, checkStartOpen } from "./modules/modal.js";
import { initFormValidation } from "./modules/validate.js";

const handleGlobalClick = (e) => {
  searcBlockTab(e)
  initModal(e);
};

const initValidate = () => {
  const forms = document.querySelectorAll("form.form");
  forms.forEach((form) => {
    initFormValidation(form);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  checkStartOpen();
  getHeightHeader();
  initValidate();

  document.addEventListener("click", handleGlobalClick);
});

window.addEventListener("resize", getHeightHeader);

document.addEventListener("scroll", checkScrollY);
