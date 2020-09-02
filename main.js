const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

function selectItem(e) {
    removeBorder()
    this.classList.add('tab-border')

    removeShowClass()
    let idItem = `#${this.id}-content`
    const tabContentItem = document.querySelector(idItem)
    tabContentItem.classList.add('show')
} 

function removeShowClass(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}


function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}


tabItems.forEach(item => item.addEventListener('click', selectItem))

