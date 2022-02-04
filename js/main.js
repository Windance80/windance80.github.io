// start - top nav fragment
const topNav = document.createDocumentFragment();

const btnGit = document.createElement('button');
btnGit.textContent = 'Git';
btnGit.setAttribute('class', 'btn-nav git');
btnGit.setAttribute('onclick', 'gitClick()');

const btnHtml = document.createElement('button');
btnHtml.textContent = 'Html'
btnHtml.className = 'html btn-nav';
btnHtml.setAttribute('onclick', 'htmlClick()');

const btnSomething = document.createElement('button');
btnSomething.textContent = '.....................'
btnSomething.className = 'something btn-nav';
btnSomething.setAttribute('onclick', 'somethingClick()');

topNav.appendChild(btnGit);
topNav.appendChild(btnHtml);
topNav.appendChild(btnSomething);

document.querySelector('header').appendChild(topNav);
// end - top nav fragment

// show git page
function gitClick() {
    const gitPage = document.getElementById('git-content-page');
    gitPage.style.display = 'block';    
    btnGit.style.backgroundColor = 'lightblue';

    const htmlPage = document.getElementById('html-content-page');
    htmlPage.style.display = 'none';       
    btnHtml.style.backgroundColor = 'white';
}

// show html page
function htmlClick() {
    const gitPage = document.getElementById('git-content-page');
    gitPage.style.display = 'none';    
    btnGit.style.backgroundColor = 'white';

    const htmlPage = document.getElementById('html-content-page');
    htmlPage.style.display = 'block';    
    btnHtml.style.backgroundColor = 'lightblue';
}