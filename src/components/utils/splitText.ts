import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras = document.querySelectorAll(".para");
  const titles = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: any) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
    }

    // Split text into words manually
    const text = para.innerText;
    para.innerHTML = text
      .split(" ")
      .map((word: string) => `<span class="split-word" style="display: inline-block; overflow: hidden; vertical-align: top;"><span class="split-word-inner" style="display: inline-block;">${word}</span></span>`)
      .join(" ");

    const words = para.querySelectorAll(".split-word-inner");
    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });

  titles.forEach((title: any) => {
    if (title.anim) {
      title.anim.progress(1).kill();
    }
    const text = title.innerText;
    title.innerHTML = text
      .split("")
      .map((char: string) => {
        if (char === " ") return " ";
        return `<span class="split-char" style="display: inline-block; overflow: hidden; vertical-align: top;"><span class="split-char-inner" style="display: inline-block;">${char}</span></span>`;
      })
      .join("");

    const chars = title.querySelectorAll(".split-char-inner");
    title.anim = gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });
}
