const modal = document.querySelector('dialog')
const modalBox = document.getElementById('profile_box')
const showProfile = document.getElementById('profile')
const closeModalBtn = document.getElementById('close-modal-btn')

let isModalOpen = false

showProfile.addEventListener('click', (e) => {
  modal.showModal()
  isModalOpen = true
  e.stopPropagation()
})

closeModalBtn.addEventListener('click', () => {
  modal.close()
  isModalOpen = false
})

document.addEventListener('click', (e) => {
  if (isModalOpen && !modalBox.contains(e.target)) {
    modal.close()
  }
})