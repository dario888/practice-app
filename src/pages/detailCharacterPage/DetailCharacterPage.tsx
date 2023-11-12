import React from "react";
import { getStateFromCharReducer } from "../../store";
import { useAppSelector } from "../../hooks";
import styles from "./DetailsCharacter.module.css";
import isEmpty from "lodash.isempty";

const DetailCharacterPage = () => {
  const { character } = useAppSelector(getStateFromCharReducer);

  return !isEmpty(character) ? (
    <div className={styles.mainContainer}>
      <div className={styles.divImg}>
        <img src={character.image} alt="details-img" />
      </div>
      <p>Name: {character.name} </p>
      <p>Gender: {character.gender}</p>
      <p>Location: {character.location.name}</p>
    </div>
  ) : null;
};

export default DetailCharacterPage;
