import { useParams } from "react-router-dom";

export default function Chapter() {
  const { chId, lang } = useParams();
  return (
    <div>
      <h2>Current chId: {chId}</h2>
      <h2>Current lang: {lang}</h2>
    </div>
  );
}
