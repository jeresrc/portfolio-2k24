import Link from "next/link";

function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <ul className="flex gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
