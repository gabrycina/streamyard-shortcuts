interface Shortcut {
  key: string;
  description: string;
}

export const shortcuts: Shortcut[] = [
  { key: "1", description: "Toggle solo layout for first person" },
  { key: "2", description: "Toggle solo layout for second person" },
  { key: "3", description: "Toggle solo layout for third person" }
];

document.addEventListener('DOMContentLoaded', () => {
  const shortcutList = document.getElementById('shortcutList');
  if (shortcutList) {
    shortcuts.forEach(shortcut => {
      const li = document.createElement('li');
      li.textContent = `${shortcut.key}: ${shortcut.description}`;
      shortcutList.appendChild(li);
    });
  }
});