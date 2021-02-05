const useFullscreen = (callback) => {
  const element = useRef();

  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFullscreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCb(true);
    }
  };

  const exitFullscreen = () => {
    document.exitFullscreen();
    runCb(false);
  };

  return { element, triggerFullscreen, exitFullscreen };
};
