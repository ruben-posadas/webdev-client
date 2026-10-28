export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  const sampleSum = functionScoped + blockScoped;
  let name = "Ruben Posadas";
  const greeting = "Hello, welcome!";
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1} <br />
      name = {name} <br />
      greeting = {greeting} <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}