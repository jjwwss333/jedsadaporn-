function loadTasks() {
  const match = document.cookie.match(/(?:^|; )tasks=([^;]*)/);
  if (!match) return [];
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  const v = encodeURIComponent(JSON.stringify(tasks));
  
  document.cookie = `tasks=${v}; path=/; max-age=${60*60*24*365}`;
}

function renderTask(text) {
  const div = document.createElement('div');
  div.className = 'ft_list';
  div.textContent = text;

  div.onclick = () => {
    if (confirm('Do you really want to remove this TO DO?')) {
      div.remove();
      updateCookieFromDOM();
    }
  };
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

document.getElementById('new').onclick = () => {
  const txt = prompt('Enter a new TO DO:');
  if (txt && txt.trim() !== '') {
    renderTask(txt.trim());
    updateCookieFromDOM();
  }
};

window.onload = () => {
  const tasks = loadTasks();
  tasks.forEach(t => renderTask(t));
};
