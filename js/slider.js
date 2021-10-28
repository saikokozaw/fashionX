const sliderOne = document.getElementById('glide_1');

if (sliderOne) {
    new Glide(sliderOne, {
      type: "carousel",
      startAt: 0,
      autoplay: 3000,
      hoverpause: true,
      perView: 1,
      animationDuration: 800,
      animationTimingFunc: "linear",
    }).mount();
  }