export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      <img
        id="wd-ai-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyUOL9afbBT8OC-d3R4wxZQWEsZ6MrK5sYZVG6RVtT9Q&s=10"
        width="200px"
        alt="Sombrero Galaxy captured by the Hubble Space Telescope"
      />
      <br />
      <img
        id="wd-your-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMmf1mtyUEwvXM64fd8K1_OcWcIeQeyRMRVlIkCcupg&s=10"
        height="250px"
        alt="Golden Retriever"
      />
    </div>
  );
}