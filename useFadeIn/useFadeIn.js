const useFadeIn = (duration = 3, delay = 0) => {
  if (typeof duration !== "number" || typeof duration !== "number") {
    return;
  }
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return element;
};
