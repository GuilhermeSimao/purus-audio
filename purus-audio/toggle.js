function toggle(){
    var a = document.getElementById('nav');
    a.classList.toggle('active');
    
};

function toggleServices(){
    var services = document.getElementById('service');
    var contacts = document.getElementById('contacts');
    var about = document.getElementById('aboutt');

    services.classList.toggle('active');
    
    if(about.className === 'nav-item active')
        {about.classList.toggle('active');}
    else if(contacts.className === 'nav-item active')
        {contacts.classList.toggle('active');}
};

function toggleContacts(){
    var services = document.getElementById('service');
    var contacts = document.getElementById('contacts');
    var about = document.getElementById('aboutt');

    contacts.classList.toggle('active');

    if(about.className === 'nav-item active')
        {about.classList.toggle('active');}
    else if(services.className === 'nav-item active')
        {services.classList.toggle('active');}
};
function toggleAbout(){
    var services = document.getElementById('service');
    var contacts = document.getElementById('contacts');
    var about = document.getElementById('aboutt');

    about.classList.toggle('active');

    if(services.className === 'nav-item active')
        {services.classList.toggle('active');}
    else if(contacts.className === 'nav-item active')
        {contacts.classList.toggle('active');}
};

function toggleClean(){
    var services = document.getElementById('service');
    var contacts = document.getElementById('contacts');
    var about = document.getElementById('aboutt');

    if(services.className === 'nav-item active')
        {services.classList.toggle('active');}
    else if(contacts.className === 'nav-item active')
        {contacts.classList.toggle('active');}
    else if(about.className === 'nav-item active')
        {about.classList.toggle('active');}
};