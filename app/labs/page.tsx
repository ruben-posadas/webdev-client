import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Ruben Posadas</h2>
      <p>CS4550 Section 01</p>
      <ul>
        <li>
          <Link id="wd-lab1-link" href="/labs/lab1">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link id="wd-lab2-link" href="/labs/lab2">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link id="wd-lab3-link" href="/labs/lab3">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link id="wd-lab4-link" href="/labs/lab4">
            Lab 4
          </Link>
        </li>
        <li>
          <Link id="wd-lab5-link" href="/labs/lab5">
            Lab 5
          </Link>
        </li>
        <li>
          <Link id="wd-kambaz-link" href="/">
            Kambaz
          </Link>
        </li>
        <li>
          <a id="wd-github" href="https://github.com/ruben-posadas/webdev-client">
            My GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}