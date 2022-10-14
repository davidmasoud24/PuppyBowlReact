import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { fetchPuppies } from "../ajaxHelpers/puppies";

import styles from "../styles/Dogs.module.css";

function Dogs() {
  const navigate = useNavigate();

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getAllPuppies() {
      const puppies = await fetchPuppies();
      setDogs(puppies);
    }

    getAllPuppies();
  }, []);

  return (
    <div
      className={styles.background}
      style={{
        backgroundColor: "green",
      }}
    >
      {dogs.map((dog) => {
        console.log(dog);
        return (
          <div key={dog.id}>
            <h3>{dog.name}</h3>
            <label>Age:</label>
            <h4>{dog.age}</h4>
            <Button
              variant="primary"
              onClick={() => {
                navigate(`/dogs/${dog.id}`);
              }}
            >
              See Details
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default Dogs;
