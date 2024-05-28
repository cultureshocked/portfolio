import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
  return (
    <nav class="bg-slate-700 fixed w-screen">
      <ul class="container flex items-center p-3 text-gray-200">
        <li class={`border-b-2 mx-1.5 sm:mx-6`}>
          <a href="#">Home</a>
        </li>
        <li class={`border-b-2 mx-1.5 sm:mx-6 scroll-smooth`}>
          <a href="#projects">Projects</a>
        </li>
        <li class={`border-b-2 mx-1.5 sm:mx-6 scroll-smooth`}>
          <a href="#tech">Technologies</a>
        </li>

      </ul>
    </nav>
  );
}
