const toggleBtn = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");
const removeBtn = document.querySelector(".close-btn")

toggleBtn.addEventListener("click", function () {
      sideBar.classList.toggle("show-sidebar")
    })
removeBtn.addEventListener("click" , function () {
sideBar.classList.remove("show-sidebar")
})