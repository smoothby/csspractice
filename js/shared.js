let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalButtonNo = document.querySelector('.modal__action--no');
let selectPlanButtons = document.querySelectorAll('.plan button');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

backdrop.addEventListener('click', closeModal);

modalButtonNo.addEventListener('click', closeModal);



// console.log(selectPlanButtons);
