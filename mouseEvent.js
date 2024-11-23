// 创建一个包含鼠标按下坐标的 data 对象
const mouseData = {
  mouseX: 0,
  mouseY: 0,
  updateMousePosition: function(event) {
      this.mouseX = event.clientX;  // 获取鼠标相对于视口的水平坐标
      this.mouseY = event.clientY;  // 获取鼠标相对于视口的垂直坐标
  },
  formatMousePosition: function() {
      // 格式化鼠标坐标信息为一个字符串
      return `鼠标点击地点的坐标: (${this.mouseX}, ${this.mouseY})`;
  }
};

// 鼠标点击时更新坐标并显示
document.addEventListener('click', function(event) {
  mouseData.updateMousePosition(event);  // 更新鼠标坐标
  document.getElementById('mouseEvent').textContent = mouseData.formatMousePosition();  // 更新鼠标坐标显示
});