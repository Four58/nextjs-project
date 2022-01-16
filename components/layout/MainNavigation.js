import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>My Meetup</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All meetup</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add new meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
