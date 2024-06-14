import { useLocation } from "@solidjs/router";
import { createSignal, onMount, onCleanup } from "solid-js"

const Nav = () => {
  const [isScrolled, setScrolled] = createSignal<Boolean>(false);

  const handleScroll = (event: any) => {
    setScrolled(window.scrollY > 0);
  }

  let paddingWidth: number;

  onMount(() => {
    "use client";
    document.addEventListener('scroll', handleScroll);
    paddingWidth = Math.floor(window.innerWidth / 2);
    console.log(paddingWidth);
  });

  const revealScrolledNav = () => {
    return isScrolled() ? "transform-none" : "-translate-y-16"; 
  }

  const hideStaticNav = () => {
    return isScrolled() ? "-translate-y-12" : "translate-y-0"; 
  }

  const location = useLocation();
  const active = (path: string) =>
    path == location.hash ? "border-sky-600" : "border-transparent hover:border-sky-600";
  return (
    <>
      <nav onscroll={handleScroll} class={`duration-200 bg-slate-100 fixed flex justify-center items-center z-20 inter-font shadow-md shadow-gray-700 left-1/2 -translate-x-1/2 rounded-lg border-slate-400 border w-1/2 m-auto top-2 h-14 ${hideStaticNav()}`}>
        <ul class="container flex items-center p-3 text-gray-900 justify-center">
          <li class={`border-b-2 mx-1.5 sm:mx-6 ${location.hash == "" ? active("") : active("#")} transition-colors`}>
            <a href="#">Home</a>
          </li>
          <li class={`border-b-2 mx-1.5 sm:mx-6 ${active("#projects")} transition-colors`}>
            <a href="#projects">Projects</a>
          </li>
          <li class={`border-b-2 mx-1.5 sm:mx-6 ${active("#tech")} transition-colors`}>
            <a href="#tech">Technologies</a>
          </li>
        </ul>
      </nav>
      <nav class={`bg-slate-100 fixed flex justify-center items-center z-20 inter-font shadow-md shadow-gray-700 ${revealScrolledNav()} duration-200 border w-screen m-auto h-16`}>
        <ul class="container flex items-center p-3 text-gray-900 justify-center">
          <li class={`border-b-2 mx-1.5 sm:mx-6 ${location.hash == "" ? active("") : active("#")} transition-colors`}>
            <a href="#">Home</a>
          </li>
          <li class={`border-b-2 mx-1.5 sm:mx-6 ${active("#projects")} transition-colors`}>
            <a href="#projects">Projects</a>
          </li>
          <li class={`border-b-2 mx-1.5 sm:mx-6 ${active("#tech")} transition-colors`}>
            <a href="#tech">Technologies</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav
