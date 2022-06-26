const contextMenu = document.querySelector(".wrapper");
const shareMenu = document.querySelector(".share-menu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  let x = e.offsetX;
  let y = e.offsetY;

  minWidth = window.innerWidth;
  contextMenuWidth = contextMenu.offsetWidth;
  minHeight = window.innerHeight;
  contextMenuHeight = contextMenu.offsetHeight;

  if (x > minWidth - contextMenuWidth - shareMenu.offsetWidth) {
    shareMenu.style.left = "-200px";
  } else {
    shareMenu.style.left = "";
    shareMenu.style.right = "-200px";
  }

  if (x > minWidth - contextMenuWidth) {
    x = minWidth - contextMenuWidth;
  } else {
    x = x;
  }
  if (y > minHeight - contextMenuHeight) {
    y = minHeight - contextMenuHeight;
  } else {
    y = y;
  }

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});

document.addEventListener("click", () => {
  contextMenu.style.visibility = "hidden";
});
