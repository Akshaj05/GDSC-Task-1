const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function()
{
    this.classList.toggle('bi-brightness-high-fill');

    if(this.classList.toggle('fa-moon'))
    {
        var r = document.querySelector(':root');
        r.style.setProperty('--black-color', '#000');
        r.style.setProperty('--background-color', '#FFF');
        r.style.setProperty('--card-color', '#EDF7FA');
        r.style.setProperty('--button-color', '#FF6464');
        r.style.setProperty('--text-color', '#21243D');
        r.style.setProperty(' --lighttext-color', '#8695A4');
        r.style.setProperty('--viewall-color', '#00A8CC');
        r.style.setProperty('--line-color', '#e0e0e0');
        r.style.setProperty('--date-color', '#21243D');
        r.style.setProperty('--logo-color', '#21243D');

    }
    else
    {
        var r = document.querySelector(':root');
        {

            r.style.setProperty('--black-color', '#FFF');
            r.style.setProperty('--background-color', '#1B3F54');
            r.style.setProperty('--card-color', '#396680');
            r.style.setProperty('--button-color', '#FF6464');
            r.style.setProperty('--text-color', '#D5E2F6');
            r.style.setProperty(' --lighttext-color', '#A1D3E8');
            r.style.setProperty('--viewall-color', '#00A8CC');
            r.style.setProperty('--line-color', '#E0E0E0');
            r.style.setProperty('--date-color', '#759DED');
            r.style.setProperty('--logo-color', '#D5E2F6');
        }
    }
})

const toggleMobile = document.getElementById('toggleDarkMobile');

toggleMobile.addEventListener('click', function()
{
    this.classList.toggle('bi-brightness-high-fill');

    if(this.classList.toggle('fa-moon'))
    {
        var r = document.querySelector(':root');
        r.style.setProperty('--black-color', '#000');
        r.style.setProperty('--background-color', '#FFF');
        r.style.setProperty('--card-color', '#EDF7FA');
        r.style.setProperty('--button-color', '#FF6464');
        r.style.setProperty('--text-color', '#21243D');
        r.style.setProperty(' --lighttext-color', '#8695A4');
        r.style.setProperty('--viewall-color', '#00A8CC');
        r.style.setProperty('--line-color', '#e0e0e0');
        r.style.setProperty('--date-color', '#21243D');
        r.style.setProperty('--logo-color', '#21243D');

    }
    else
    {
        var r = document.querySelector(':root');
        {

            r.style.setProperty('--black-color', '#FFF');
            r.style.setProperty('--background-color', '#1B3F54');
            r.style.setProperty('--card-color', '#396680');
            r.style.setProperty('--button-color', '#FF6464');
            r.style.setProperty('--text-color', '#D5E2F6');
            r.style.setProperty(' --lighttext-color', '#A1D3E8');
            r.style.setProperty('--viewall-color', '#00A8CC');
            r.style.setProperty('--line-color', '#E0E0E0');
            r.style.setProperty('--date-color', '#759DED');
            r.style.setProperty('--logo-color', '#D5E2F6');
        }
    }
})

