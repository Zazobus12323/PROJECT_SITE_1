document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const signForm = document.querySelector('.signIn')
    const button = document.querySelector('button[class="signBut"]')
    document.addEventListener('click', (event) =>{
        if (event.target === overlay) {
            overlay.style.display = 'none';
            signForm.style.display = 'none';
          }
    })
    button.addEventListener('click', (event) =>{
        overlay.style.display = 'block';
        signForm.style.display = 'block';
    })

})