const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.mainContent');

function pageTransitions(){
    //Active Button Class
    for (let i=0; i<secBtn.length; i++) {
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.activeBtn');
            currentBtn[0].className = currentBtn[0].className.replace('activeBtn', '');
            this.className += ' activeBtn';
        })
    }

    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;

        if(id) {
            secBtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    /* TOGGLE THEME */

    const themeBtn = document.querySelector('.themeBtn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('lightMode');
    })
}

pageTransitions();

document.getElementsByClassName("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    var form = event.target;
    var formData = new FormData(form);
    
    // Send form data using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Form submitted successfully
          alert("Form submitted successfully!");
          form.reset();
        } else {
          // Error submitting the form
          alert("Error submitting the form. Please try again later.");
        }
      }
    };
    xhr.send(formData);
  });
  