const overlay = document.querySelector(".overlay");
const showOverlayBtn = document.querySelector(".btn-show-modal");

let displayModal = () => {
  overlay.style.display = "block";
  showOverlayBtn.style.display = "none";
};

let hideModal = () => {
  overlay.style.display = "none";
};

let displayOverlayBtn = () => {
  showOverlayBtn.style.display = "block";
};

let hideOverlayBtn = () => {
  showOverlayBtn.style.display = "none";
};

let playPartySound = () => {
  let song = new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/gonna-make-you-sweat.mp3"
  );
  song.play();
};

document.querySelector(".btn-show-modal").addEventListener("click", () => {
  displayModal();
  playPartySound();
});

window.addEventListener("click", (event) => {
  if (event.target == overlay) {
    hideModal();
    displayOverlayBtn();
  }
});

document.querySelector(".modal__close").addEventListener("click", () => {
  hideModal();
  displayOverlayBtn();
});

document.querySelector(".btn__modal").addEventListener("click", () => {
  hideModal();
  displayOverlayBtn();
});
