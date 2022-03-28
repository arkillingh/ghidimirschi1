function rotateIcon() {
  const icon = document.getElementById(arguments[0]);
  let imageIsRotate = icon.classList.contains("rotate-img");

  if (imageIsRotate == false) {
    icon.classList.add("rotate-img");
  } else {
    icon.classList.remove("rotate-img");
  }
}

function underlineText() {
  const text = document.getElementById(arguments[0]);
  let textIsUnderlined = text.classList.contains("underlined");

  if (textIsUnderlined == false) {
    text.classList.add("underlined");
  } else {
    text.classList.remove("underlined");
  }
}

function extend() {
  const extend = document.getElementById(arguments[0]);
  let isHidden = extend.classList.contains("hidden");

  if (isHidden == true) {
    extend.classList.remove("hidden");
  } else {
    extend.classList.add("hidden");
  }
}
