import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import styles from "../styles/PlayerCard.module.css";

function PlayerCard({ player }) {
  const navigate = useNavigate();

  return (
    <div className={styles.card} key={player.id}>
      <h3>{player.name}</h3>
      <label>Age:</label>
      <h4>{player.age}</h4>
      <Button
        variant="primary"
        onClick={() => {
          navigate(`/players/${player.id}`);
        }}
      >
        See Details
      </Button>
    </div>
  );
}

export default PlayerCard;
