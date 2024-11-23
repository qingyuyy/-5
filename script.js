// JavaScript 添加事件处理器（onclick、onmouseout、onmouseover）
document.addEventListener("DOMContentLoaded", function() {
  // 选择所有书籍项
  const bookItems = document.querySelectorAll(".employee-card");

  // 添加点击事件（onclick）
  bookItems.forEach(function(item) {
      item.onclick = function() {
          const name = this.querySelector("p:first-child").textContent.split("：")[1];
          const rating = this.querySelector("p:nth-child(3)").textContent.split("：")[1];
          alert("你点击了：" + name + " - " + rating);
      };
  });

  // 添加鼠标移出事件（onmouseout）
  bookItems.forEach(function(item) {
      item.onmouseout = function() {
          this.style.backgroundColor = ""; // 鼠标移出时恢复原样
      };
  });

  // 添加鼠标悬停事件（onmouseover）
  bookItems.forEach(function(item) {
      item.onmouseover = function() {
          this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
      };
  });
});