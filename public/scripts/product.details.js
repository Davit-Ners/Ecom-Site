const showFormBtn = document.getElementById('showCommentForm');
const addCommentForm = document.querySelector('.commentForm');
let show = false;

showFormBtn.addEventListener('click', function() {
    addCommentForm.classList.toggle('hidden');
    show = !show;

    if (show) showFormBtn.textContent = 'X';
    else {
        showFormBtn.textContent = 'Ajouter un commentaire';
    }
});