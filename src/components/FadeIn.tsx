import { createSignal, createEffect } from "solid-js"

const FadeIn = (props) => {
  const [visible, setVisible] = createSignal<Boolean>(false);
  let elementRef!: HTMLDivElement;

  createEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(visible() || entry.isIntersecting);
    });

    observer.observe(elementRef);
    return () => {
      observer.disconnect();
    }
  });

  return (
    <div class={`transition-all duration-1000 ${visible() ? 'is-visible' : 'not-visible'}`} ref={elementRef!}>
      {props.children}
    </div>
  )

}

export default FadeIn
