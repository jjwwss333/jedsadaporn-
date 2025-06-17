// ----- 4.1 helper: อ่าน cookie ชื่อ tasks เป็น array -----
function loadTasks() {
  const match = document.cookie.match(/(?:^|; )tasks=([^;]*)/);
  if (!match) return [];
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return [];
  }
}

// ----- 4.2 helper: บันทึก array ลง cookie -----
function saveTasks(tasks) {
  const v = encodeURIComponent(JSON.stringify(tasks));
  // path=/ เพื่อให้ cookie ใช้ได้ทั่วหน้า
  document.cookie = `tasks=${v}; path=/; max-age=${60*60*24*365}`;
}

// ----- 4.3 สร้าง div.ft_list แล้วแทรกแถวบนสุด -----
function renderTask(text) {
  const div = document.createElement('div');
  div.className = 'ft_list';
  div.textContent = text;
  // คลิกเพื่อเอาออก (confirm แล้ว remove + update cookie)
  div.onclick = () => {
    if (confirm('Do you really want to remove this TO DO?')) {
      div.remove();
      updateCookieFromDOM();
    }
  };
  // ต้นลิสต์ (prepend)
  const list = document.getElementById('ft_list');
  list.prepend(div);
}

// ----- 4.4 อ่านค่าใน #ft_list แล้วเก็บลง cookie ใหม่ -----
function updateCookieFromDOM() {
  const items = Array.from(
    document.querySelectorAll('#ft_list .ft_list')
  ).map(el => el.textContent);
  saveTasks(items);
}

// ----- 4.5 เมื่อกดปุ่ม New → prompt → render + save -----
document.getElementById('new').onclick = () => {
  const txt = prompt('Enter a new TO DO:');
  if (txt && txt.trim() !== '') {
    renderTask(txt.trim());
    updateCookieFromDOM();
  }
};

// ----- 4.6 เมื่อโหลดหน้า → โหลดจาก cookie มา render ทุกตัว -----
window.onload = () => {
  const tasks = loadTasks();
  tasks.forEach(t => renderTask(t));
};
