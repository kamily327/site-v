

document.addEventListener('DOMContentLoaded',() => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menuList');
  const menuClose =document.getElementById('menu-close')
  const menuItems = document.querySelectorAll('a')

  menuToggle.addEventListener('click', function (){
    menuList.classList.toggle('active');
  });
    menuClose.addEventListener('click', function (){
      menuList.classList.remove('active');

});
  menuItems.forEach(item =>{
    item.addEventListener('click',() =>{
      menuList.classList.remove('active')
    })
  })
});


