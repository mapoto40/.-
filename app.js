window.addEventListener('scroll', () => {
    const scroll_value = window.scrollY
    document.querySelector('#word1').style.transform = `translateX(-${scroll_value}px)`;
    document.querySelector('#word2').style.transform = `translateX(${scroll_value - 100}px)`;
    document.querySelector('#word3').style.transform = `translateX(-${scroll_value - 200}px)`;
    document.querySelector('#project_background').style.transform = `translateX(-${scroll_value + 175}px)`
})

document.querySelector('#click_cryptest').addEventListener('click', () => {
    document.querySelectorAll('div').forEach(e => { e.classList.remove('here') })
    document.querySelector('#cryptest').classList.add('here')
    document.querySelectorAll('#cache').forEach(e => { e.style.display = "none" })
    document.querySelector('.cryptest').style.display = "flex"
})

document.querySelector('#click_codons').addEventListener('click', () => {
    document.querySelectorAll('div').forEach(e => { e.classList.remove('here') })
    document.querySelector('#codons').classList.add('here')
    document.querySelectorAll('#cache').forEach(e => { e.style.display = "none" })
    document.querySelector('.codons').style.display = "flex"

})
document.querySelector('#click_utopia').addEventListener('click', () => {
    document.querySelectorAll('div').forEach(e => { e.classList.remove('here') })
    document.querySelector('#utopia').classList.add('here')
    document.querySelectorAll('#cache').forEach(e => { e.style.display = "none" })
    document.querySelector('.utopia').style.display = "flex"

})
document.querySelector('#click_avadress').addEventListener('click', () => {
    document.querySelectorAll('div').forEach(e => { e.classList.remove('here') })
    document.querySelector('#avadress').classList.add('here')
    document.querySelectorAll('#cache').forEach(e => { e.style.display = "none" })
    document.querySelector('.avadress').style.display = "flex"

})