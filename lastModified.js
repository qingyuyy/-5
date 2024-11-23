// 获取当前网页的最后修改时间
function displayLastModified() {
  const lastModified = document.lastModified;  // 获取网页最后修改时间
  document.getElementById('lastmodified').textContent = `本网页最后更新的时间和日期：${lastModified}`;
}

// 调用函数显示网页最后修改时间
displayLastModified();