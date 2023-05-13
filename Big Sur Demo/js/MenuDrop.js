/* 点击按钮，下拉菜单在 显示/隐藏 之间切换 */
function menuFunction() {
    document.getElementById("logoDropdown").classList.toggle("show");
}

// 点击下拉菜单以外区域隐藏
window.onclick = function(event) {
 if (!event.target.matches('.apple-logo')) {

    var dropdowns = document.getElementsByTagName('ul');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* 点击按钮，下拉菜单在 显示/隐藏 之间切换 */
/* function menuFunction() {
    document.getElementById("finderDropdown").classList.toggle("show");
} */

// 点击下拉菜单以外区域隐藏
/* window.onclick = function(event) {
 if (!event.target.matches('.Finder')) {

    var dropdowns = document.getElementsByTagName('ul');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} */
