// index.html design javascript file 
const registerTab = document.querySelector('#tab-register').addEventListener('click', ()=>{
    console.log('register Tab clicked')
    document.querySelector('#tab-register').classList.add('tab-design')
    const loginTab = document.querySelector('#tab-login')
    loginTab.classList.remove('tab-design')
  })

  const loginTab = document.querySelector('#tab-login').addEventListener('click', ()=>{
    console.log('login tab clicked')
    document.querySelector('#tab-login').classList.add('tab-design')
    const registerTab = document.querySelector('#tab-register')
    registerTab.classList.remove('tab-design')
  })