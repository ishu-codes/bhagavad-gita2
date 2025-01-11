import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="./chapters">Chapters</Link>
      <br />
      <Link to="./chapters/03">Chapter 3</Link>
    </div>
  );
}
