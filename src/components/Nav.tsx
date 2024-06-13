import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.hash ? "border-sky-600" : "border-transparent hover:border-sky-600";
  return (
    <nav class="bg-slate-700 fixed w-screen flex justify-center items-center z-20">
      <ul class="container flex items-center p-3 text-gray-200 justify-center">
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
  );
}
