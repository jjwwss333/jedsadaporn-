// ฟังก์ชันสุ่มสีแบบ RGB
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const btn = document.getElementById('changeColorBtn');

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = randomColor();
});
