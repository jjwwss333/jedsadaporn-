$(function(){
  // ทุก 30 วิ เตือนให้ใช้
  setInterval(function(){
    alert('Please, use me...');
  }, 30000);

  // ฟังก์ชันสุ่มสี
  function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
  }

  // เมื่อคลิกปุ่ม → เปลี่ยนสีพื้นหลัง
  $('#changeColorBtn').on('click', function(){
    $('body').css('background-color', randomColor());
  });
});
