document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  const loadborder = document.getElementById("loadborder");
  const percentage = document.getElementById("percentage");
  const loadbar = document.getElementById("loadbar");


  const setParallax = (el, speed) => {
    el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  };

  setParallax(loadborder, 14);
  setParallax(percentage, 10);
  setParallax(loadbar, 0);





});
