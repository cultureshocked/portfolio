import { createSignal, createEffect, onMount, For } from "solid-js"

const GHData = () => {
  const [data, setData] = createSignal<any>(null);
  const [repos, setRepos] = createSignal<any>(null);

  onMount(async () => {
    const raw = await fetch("https://api.github.com/users/cultureshocked");
    const json = await raw.json();
    console.log(json);
    setData(json);
  });

  createEffect(async () => {
    if (!data()) return;
    const raw = await fetch(data().repos_url);
    const json = await raw.json();
    setRepos(json);
  })

  return <>
    {(data() && repos()) ?
      <>
        <h3>{data()!.name} (cultureshocked) has {data()!.public_repos} public repositories.</h3>
        <p>
          <i>{data()?.bio}</i>
        </p>
        <br></br>
        <h3>Here are some of my repositories:</h3>
        <For each={repos()}>
          {(item) => <><b>{item.full_name}</b> -- <i>{item.description}</i><br></br></>}
        </For>
      </> : ""}
  </>
}

export default GHData
