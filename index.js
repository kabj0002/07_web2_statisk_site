// Moving text 1, Codepen

(function () {
  var welcomeAnimationId,
    parentAnimationElementWidth,
    startPosAnimationElement,
    posAnimationElement,
    animationElement;

  function setWelcomeElement() {
    animationElement = document.querySelector(".welcome-text");
    parentAnimationElementWidth =
      animationElement.parentElement.parentElement.offsetWidth;
    startPosAnimationElement = -animationElement.offsetWidth;
    posAnimationElement = startPosAnimationElement;
    animationElement.style.right = posAnimationElement + "px";
  }

  function moveWelcomeElement() {
    posAnimationElement += 5;
    animationElement.style.right = posAnimationElement + "px";
    if (posAnimationElement > parentAnimationElementWidth)
      posAnimationElement = startPosAnimationElement;
    portfolioAnimationId = requestAnimationFrame(moveWelcomeElement);
  }

  setWelcomeElement();
  moveWelcomeElement();
  window.addEventListener("resize", refreshAnimation, false);

  var resizeTimeout;
  function refreshAnimation() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        window.cancelAnimationFrame(welcomeAnimationId);
        setWelcomeElement();
        moveWelcomeElement();
      }, 100);
    }
  }
})();
