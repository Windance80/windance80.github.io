// start - top nav fragment
const topNav = document.createDocumentFragment();

const btnGit = document.createElement('button');
btnGit.textContent = 'Git';
btnGit.setAttribute('class', 'git btn-nav');
btnGit.setAttribute('onclick', 'gitClick()');

const btnHtml = document.createElement('button');
btnHtml.textContent = 'Html'
btnHtml.className = 'html btn-nav';
btnHtml.setAttribute('onclick', 'htmlClick()');

topNav.appendChild(btnGit);
topNav.appendChild(btnHtml);

document.querySelector('header').appendChild(topNav);
// end - top nav fragment

// show git page
function gitClick() {
    const gitPage = document.getElementById('git-content-page');
    gitPage.style.display = 'block';    

    const htmlPage = document.getElementById('html-content-page');
    htmlPage.style.display = 'none';       
    
}

// show html page
function htmlClick() {
    const gitPage = document.getElementById('git-content-page');
    gitPage.style.display = 'none';    

    const htmlPage = document.getElementById('html-content-page');
    htmlPage.style.display = 'block';    
}