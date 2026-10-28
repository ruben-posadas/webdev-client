export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let name = "Bruce Wayne";
  let isNameString = typeof name;
  let myNumber = 67;
  let isMyNumberNumber = typeof myNumber;
  let sampleCount = 42;
  let isSampleCountNumber = typeof sampleCount;
  let sampleLabel = "Lab 3";
  let isSampleLabelString = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      name = {name}                               <br />
      isNameString = {isNameString}               <br />
      myNumber = {myNumber}                       <br />
      isMyNumberNumber = {isMyNumberNumber}       <br />
      sampleCount = {sampleCount}                 <br />
      isSampleCountNumber = {isSampleCountNumber} <br />
      sampleLabel = {sampleLabel}                 <br />
      isSampleLabelString = {isSampleLabelString} <br />

      <hr />
    </div>
  );
}