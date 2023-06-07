let suppotModalCloseBtn = document.querySelector('.support-modal__btn_js')
let suppotModalOpenBtn = document.querySelector('.banner__btn-item_js')
let supportModal = document.querySelector('.support_js')

suppotModalOpenBtn.addEventListener('click',()=>{
    supportModal.classList.remove('hiden'); 
})

suppotModalCloseBtn.addEventListener('click',()=>{
    supportModal.classList.add('hiden')
})