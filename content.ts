interface Shortcut {
  key: string;
  description: string;
  action: () => void;
}

const shortcuts: Shortcut[] = [
  {
    key: "1",
    description: "Toggle solo layout for first person",
    action: () => {
      console.log("Attempting to toggle solo layout for first person");
      const soloButtons = document.querySelectorAll('button[aria-label="Solo layout"], button[aria-label="Exit solo layout"]') as NodeListOf<HTMLButtonElement>;
      if (soloButtons.length > 0) {
        soloButtons[0].click();
        console.log("Toggled solo layout for first person");
      } else {
        console.log("No solo layout button found for first person");
      }
    }
  },
  {
    key: "2",
    description: "Toggle solo layout for second person",
    action: () => {
      console.log("Attempting to toggle solo layout for second person");
      const soloButtons = document.querySelectorAll('button[aria-label="Solo layout"], button[aria-label="Exit solo layout"]') as NodeListOf<HTMLButtonElement>;
      if (soloButtons.length > 1) {
        soloButtons[1].click();
        console.log("Toggled solo layout for second person");
      } else {
        console.log("No solo layout button found for second person");
      }
    }
  },
  {
    key: "3",
    description: "Toggle solo layout for third person",
    action: () => {
      console.log("Attempting to toggle solo layout for third person");
      const soloButtons = document.querySelectorAll('button[aria-label="Solo layout"], button[aria-label="Exit solo layout"]') as NodeListOf<HTMLButtonElement>;
      if (soloButtons.length > 2) {
        soloButtons[2].click();
        console.log("Toggled solo layout for third person");
      } else {
        console.log("No solo layout button found for third person");
      }
    }
  }
];

document.addEventListener('keydown', (event) => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
    return;
  }

  const shortcut = shortcuts.find(s => s.key === event.key);

  if (shortcut) {
    event.preventDefault();
    console.log(`Shortcut pressed: ${shortcut.description}`);
    shortcut.action();
  }
});

console.log("Streamyard Shortcuts extension loaded");