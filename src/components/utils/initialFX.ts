import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const chars1 = splitElementText(".landing-info h3, .landing-intro h2, .landing-intro h1");

  gsap.fromTo(
    chars1,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const chars2 = splitElementText(".landing-h2-info");

  gsap.fromTo(
    chars2,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const chars3 = splitElementText(".landing-h2-info-1");
  const chars4 = splitElementText(".landing-h2-1");
  const chars5 = splitElementText(".landing-h2-2");

  LoopText(chars2, chars3);
  LoopText(chars4, chars5);
}

function splitElementText(selector: string): HTMLElement[] {
  const elements = document.querySelectorAll(selector);
  const allChars: HTMLElement[] = [];
  elements.forEach((el: any) => {
    const text = el.innerText;
    el.innerHTML = text
      .split("")
      .map((char: string) => {
        if (char === " ") return " ";
        return `<span class="char-span" style="display: inline-block; overflow: hidden; vertical-align: top;"><span class="char-span-inner" style="display: inline-block;">${char}</span></span>`;
      })
      .join("");
    const chars = el.querySelectorAll(".char-span-inner");
    chars.forEach((c: any) => allChars.push(c));
  });
  return allChars;
}

function LoopText(chars1: HTMLElement[], chars2: HTMLElement[]) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    chars2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      chars1,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      chars1,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      chars2,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
