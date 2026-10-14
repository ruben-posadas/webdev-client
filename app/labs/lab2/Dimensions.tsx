export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div className="wd-dimension-square-big wd-bg-color-yellow">Big Square</div>
      </div>
      <div id="wd-ai-dimension" className="wd-ai-dimension">
        This is a deliberately long sentence that cannot fit inside a box that is
        only 120 pixels wide and 60 pixels tall, so it spills past the yellow area.
      </div>
    </div>
  );
}