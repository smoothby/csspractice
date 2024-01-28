const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalButtonNo = document.querySelector(".modal__action--no");
const selectPlanButtons = document.querySelectorAll(".plan button");
const burgerButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const ctaButton = document.querySelector(".main-nav__item--cta");

// Grab all of the plan buttons
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function () {
      backdrop.classList.add("open");
    }, 10);
  });
}

// Close the modal popup if modal present
function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function () {
    backdrop.style.display = "none";
  }, 500);
}

// Close the mobile nav when backdrop clicked
backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closeModal();
});

// Close modal popup when "No" button is clicked, if modal is present
if (modalButtonNo) {
  modalButtonNo.addEventListener("click", closeModal);
}

// Open the mobile nav
burgerButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});

ctaButton.addEventListener("animationstart", function (event) {
  console.log("Animation started", event);
});

ctaButton.addEventListener("animationend", function (event) {
  console.log("Animation ended", event);
});

ctaButton.addEventListener("animationiteration", function (event) {
  console.log("Animation iterated", event);
});
