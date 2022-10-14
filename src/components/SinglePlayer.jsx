import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { fetchPuppyById, deletePuppyById } from "../ajaxHelpers/puppies";

import styles from "../styles/SingleDog.module.css";

function SingleDog() {
  const navigate = useNavigate();

  const { dogId } = useParams();

  const [singleDog, setSingleDog] = useState({});

  useEffect(() => {
    async function getPuppyById() {
      // fetchPuppyById(params.dogId)
      const puppy = await fetchPuppyById(dogId);
      setSingleDog(puppy);
    }

    getPuppyById();
  }, []);

  async function handleDelete() {
    const result = await deletePuppyById(singleDog.id);
    console.log(result);
    navigate("/");
  }

  return (
    <div className={styles.background}>
      <h4>{singleDog.name}</h4>
      <h5>{singleDog.email}</h5>
      <h5>{singleDog.isCute}</h5>
      <button onClick={handleDelete}>Delete Puppy</button>
    </div>
  );
}

export default SingleDog;
