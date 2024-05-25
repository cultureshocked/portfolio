import { createSignal, onMount, Show } from "solid-js"

const GHData = () => {
  const [data, setData] = createSignal<any>(null);

  onMount(async () => {
    const raw = await fetch("https://api.github.com/users/cultureshocked");
    const json = await raw.json();
    console.log(json);
    setData(json);
  });

  return (
    <Show when={data()} fallback={<div>Loading GitHub stats...</div>}>
      <>
        <h3>{data().name} ({data().login}) has {data().public_repos} public repositories.</h3>
        <br></br>
        <i>{data().bio}</i>
      </>
    </Show>
  );
}

export default GHData
