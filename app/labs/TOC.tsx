import Link from "next/link";

export default function TOC() {
  return (
    <nav id="wd-labs-toc">
        <h4>Ruben Posadas</h4>
      <ul>

      <li>
        <Link href="/labs" id="wd-home-link">
          Home
        </Link>
      </li>

        <li>
          <Link id="wd-toc-book-link" href="/book/ch1">Chapter 1</Link>
        </li>

      <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      
      </ul>
    </nav>
  );
}
