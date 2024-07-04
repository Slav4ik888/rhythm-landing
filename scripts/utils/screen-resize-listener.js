/**
 * Возвращает ширину экрана
 */
const getScreenSize = () => document.documentElement.clientWidth;


/** Listener on resize display */
export const screenResizeListener = (setScreenFormats) => {

  window.addEventListener("resize", resizeThrottler, false);
  // log(`START LISTENER RESIZE`);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (! resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
      }, 200);
    }
  }

  // Получаем текущий размер экрана и сохраняем в store
  function actualResizeHandler() {
    const screenSize = getScreenSize();
    setScreenFormats(screenSize);
  }

  // Один раз запускаем в самом начале
  actualResizeHandler();
};
