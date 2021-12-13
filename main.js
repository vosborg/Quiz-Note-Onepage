
var Quiz_Content = document.getElementById("Quiz");
var Quiz_CheckBox = document.getElementById("cb_quiz");
var Quiz_CheckIt = document.getElementById("switch_quiz");

Quiz_CheckIt.onclick = function() {

    if (Quiz_CheckBox.checked == true) {
        Quiz_Content.classList.add("showElement");

        ToDo_CheckBox.checked = false;
        ToDo_Content.classList.remove("showElement");
    }

    else {
        Quiz_Content.classList.remove("showElement");
    }
};

var ToDo_Content = document.getElementById("ToDo");
var ToDo_CheckBox = document.getElementById("cb_todo");
var ToDo_CheckIt = document.getElementById("switch_todo");

ToDo_CheckIt.onclick = function() {

    if (ToDo_CheckBox.checked == true) {
        ToDo_Content.classList.add("showElement");

        Quiz_CheckBox.checked = false;
        Quiz_Content.classList.remove("showElement");
    }

    else {
        ToDo_Content.classList.remove("showElement");
    }
};

/********** Quiz Program **********/

const checkAnswers = document.getElementById('check');
const reset = document.getElementById('reset');

const CorrectAnswers = ['A', 'C', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const heading = document.querySelectorAll('.intro');

var questionsCheck = document.getElementsByClassName('questionsCheck');
var radio = document.getElementsByClassName('radio');
var radioDef = document.getElementsByClassName('default');

// Checking radio buttons

const q1Error = document.getElementById('q1_error');
const q11 = document.getElementById('q11');
const q12 = document.getElementById('q12');
const q13 = document.getElementById('q13');

const q2Error = document.getElementById('q2_error');
const q21 = document.getElementById('q21');
const q22 = document.getElementById('q22');
const q23 = document.getElementById('q23');

const q3Error = document.getElementById('q3_error');
const q31 = document.getElementById('q31');
const q32 = document.getElementById('q32');
const q33 = document.getElementById('q33');

const q4Error = document.getElementById('q4_error');
const q41 = document.getElementById('q41');
const q42 = document.getElementById('q42');
const q43 = document.getElementById('q43');

checkAnswers.addEventListener('click', e => {

    e.preventDefault();

    if(q11.checked == false && q12.checked == false && q13.checked == false) {
        q1_error.style.display = 'block';
        q2_error.style.display = 'none';
        q3_error.style.display = 'none';
        q4_error.style.display = 'none';

        document.getElementById("q1").scrollIntoView();
    }

    else if(q21.checked == false && q22.checked == false && q23.checked == false) {
        q1_error.style.display = 'none';
        q2_error.style.display = 'block';
        q3_error.style.display = 'none';
        q4_error.style.display = 'none';

        document.getElementById('q2').scrollIntoView();
    }

    else if(q31.checked == false && q32.checked == false && q33.checked == false) {
        q1_error.style.display = 'none';
        q2_error.style.display = 'none';
        q3_error.style.display = 'block';
        q4_error.style.display = 'none';

        document.getElementById('q3').scrollIntoView();
    }

    else if(q41.checked == false && q42.checked == false && q43.checked == false) {
        q1_error.style.display = 'none';
        q2_error.style.display = 'none';
        q3_error.style.display = 'none';
        q4_error.style.display = 'block';

        document.getElementById('q4').scrollIntoView();
    }
    
    else {
        q1_error.style.display = 'none';
        q2_error.style.display = 'none';
        q3_error.style.display = 'none';
        q4_error.style.display = 'none';

        let score = 0;

        // q is the name from the input fields (One of the 3 checkbox)
        const UserAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
        // Checking answers
        UserAnswers.forEach((answer, index) => {
    
            // CorrectAnswers[index] --> position of the answer
            if(answer === CorrectAnswers[index]) {
                score += 25; // Adding 25 points for each correct question (100 / 4 = 25)
    
                questionsCheck[index].classList.remove('d-none');
                questionsCheck[index].classList.add('alert', 'alert-success');
            }
    
            else {
                questionsCheck[index].classList.remove('d-none');
                questionsCheck[index].classList.add('alert', 'alert-danger');
            }
        });
    
        scrollTo(0,0);
        result.classList.remove('d-none');
    
        setTimeout(function () {
            let output = 0;
            const timer = setInterval(() => {
        
                result.querySelector('span').textContent = `${output}%`;
        
                if(output === score) {
                    clearInterval(timer);
    
                    for (let i = 0; i < radio.length; i++) {
                        radio[i].disabled = true;
                    }
    
                    checkAnswers.classList.add('disabled');
                    reset.classList.remove('disabled');
                }
        
                else {
                    output++;
                }
            }, 30);
        }, 500);
    }
});

reset.addEventListener('click', e => {

    e.preventDefault();

    scrollTo(0,0);

    for(let i = 0; i < questionsCheck.length; i++) {
        questionsCheck[i].className = 'questionsCheck d-none';
    }

    for (let i = 0; i < radio.length; i++) {
        radio[i].disabled = false;
        radio[i].checked = false;
    }

    result.classList.add('d-none');
    checkAnswers.classList.remove('disabled');
    reset.classList.add('disabled');
});

/********** To-Do List **********/

// ADDING NOTES

const addForm = document.querySelector('.add');
const addToDoBtn = document.getElementById('add_todo');
const list = document.querySelector('.todos');
const addInput = document.getElementById('addValue');
const msg = document.getElementById('msg');

const generateNote = todo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="title">${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
};

addToDoBtn.addEventListener('click', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();

    if(todo.length) {

        generateNote(todo);

        addForm.reset();

        msg.style.display = 'block';
        msg.innerText = `Added: ${todo}`;

        setTimeout(function () {
            msg.style.display = 'none';
        }, 2500);
    }

    else {
        msg.style.display = 'block';
        msg.innerText = 'Please enter a note name';
    }
});

// DELETE NOTES

list.addEventListener('click', e => {

    var target = e.target;

    if(target.classList.contains('delete')) {

        e.target.parentElement.remove();

        if (target.parentElement.nodeName == "LI") {

            var title = target.parentElement.getElementsByClassName('title');

            msg.style.display = 'block';
            msg.innerText = 'Deleted: ' + title[0].textContent;

            setTimeout(function () {
                msg.style.display = 'none';
            }, 2500);
        }
    }
});

// SEARCHING NOTES

NoneResults.style.display = 'none';

const searchForm = document.querySelector('.search input');

const filterTodos = (textUser) => {

    // Adding class "filtered" to the notes which doesn't contain the search value
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(textUser))
        .forEach((todo) => todo.classList.add('filtered'));

    // Remove the class "filtered" again
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(textUser))
        .forEach((todo) => todo.classList.remove('filtered'));
};

searchForm.addEventListener('keyup', () => {

    const textUser = searchForm.value.trim().toLowerCase();

    filterTodos(textUser);

    let items = document.querySelectorAll('li');
    let itemsClass = document.querySelectorAll('li.list-group-item.d-flex.justify-content-between.align-items-center.filtered');

    let NoneResults = document.getElementById('NoneResults');
    
    if (items.length === itemsClass.length) {
        NoneResults.style.display = 'block';
    }

    else {
        NoneResults.style.display = 'none';
    }
});

