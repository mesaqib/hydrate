
let tl = gsap.timeline()



tl.from("nav .logo, .menu, nav .btn", {
    opacity: 0,
  y: -100,
  delay: 0.2,
  stagger: 0.2
});


tl.from(".bottle_img", {
  opacity: 0,
  y: 280,
  duration: 0.5,
  stagger: 0.5,
});



tl.to(
  "nav",
  {
    scrollTrigger: {
      trigger: "header",
      scroller: "body",
      start: "top 0%",
      end: "top -20%",
      // markers: true,
      pin: "nav",
    },
  },
  "home-page"
);


tl.to(
  ".bottle_cap",
  {
    y: -130,

    scrollTrigger: {
      trigger: "header",
      scroller: "body",
      scrub: 3,
      start: "top -1%",
      end: "top 5%",
      // markers: true,
    },
  },
  "home-page"
);

tl.to(
  ".bottle_down",
  {
    y: 180,
    scrollTrigger: {
      trigger: "header",
      scroller: "body",
      scrub: 3,
      start: "top -2%",
      end: "top 5%",
      // markers: true,
    },
  },
  "home-page"
);


tl.to(
  ".header_section h1, .header_section .content .btn, .header_section .content p",
  {
    opacity: 1,
    scale: 1,

    scrollTrigger: {
      trigger: "header",
      scroller: "body",
      scrub: 2,
      start: "top -2%",
      end: "top 10%",
      // markers: true,
    },
  },
  "home-page"
);




// section2

tl.to(
  ".bottle_cap",
  {
    y: 500,
    

    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      scrub: 4,
      start: "top 93%",
      end: "bottom 140%",
      // markers: true,
    },
  }
);

tl.to(".bottle_down", {
  y: 500,
  

  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    scrub: 4,
    start: "top 93%",
    end: "bottom 140%",
    // markers: true,
  },
});
