let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalButtonNo = document.querySelector(".modal__action--no");
let selectPlanButtons = document.querySelectorAll(".plan button");
let burgerButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

// Grab all of the plan buttons
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

// Close the modal popup if modal present
function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
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
  backdrop.classList.add("open");
});

// console.log(selectPlanButtons);
