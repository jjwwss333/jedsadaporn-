// เริ่มเมื่อ DOM พร้อม
$(function(){
  // 1) ทุก 30 วินาที เตือนให้ใช้
  setInterval(function(){
    alert('Please, use me...');
  }, 30000);

  // 2) สร้างฟังก์ชันสุ่มสี
  function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
  }

  // 3) จับ click ที่ปุ่ม ด้วย jQuery
  $('#changeColorBtn').on('click', function(){
    $('body').css('background-color', randomColor());
  });
});
