export default function PassingFunctions({
  message,
  theFunction,
  myName,
  theOtherFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  myName: () => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        onClick={myName}
        id="wd-pass-functions-my-name-click"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke My Name
      </button>
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="rounded bg-purple-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Other Function
      </button>
      <hr />
    </div>
  );
}