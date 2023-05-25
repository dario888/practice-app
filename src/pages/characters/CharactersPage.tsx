import React, { useEffect, useState } from "react";
import styles from "./Chracters.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  ICharacter,
  getPaginatedCharacters,
  setCharacter,
} from "../../features";
import { getStateFromCharReducer } from "../../store";
import { PAGE_NUMBER, CHARACTERS_SPECIES } from "../../utils";
import { useNavigate } from "react-router-dom";
import DropDownBtn from "../../components/common/DropDownBtn/DropDownBtn";

const CharactersPage = () => {
  const [page, setPage] = useState(PAGE_NUMBER);
  const [filterValue, setFilterValue] = useState("");
  const [isAscendingOrder, setIsAscendingOrder] = useState<
    boolean | undefined
  >();
  const [charaModifyList, setCharaModifyList] = useState<ICharacter[]>([]);
  const { charactersList, isCharLoading, errorChar } = useAppSelector(
    getStateFromCharReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerScroll = () => {
    if (
      Math.round(window.innerHeight + document.documentElement.scrollTop) >=
      document.documentElement.scrollHeight
    )
      setPage((prevPage) => prevPage + 1);
  };

  const handleSortAndFilterChars = () => {
    const sortedCharsList = [...charactersList];

    if (isAscendingOrder) {
      sortedCharsList.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortedCharsList.sort((a, b) => b.name.localeCompare(a.name));
    }

    setCharaModifyList(sortedCharsList);
  };

  const handleClickMenuItem = (value: string) => {
    setFilterValue(value);
  };

  useEffect(() => {
    if (page < 5) {
      dispatch(getPaginatedCharacters(page));
    }
  }, [page, dispatch]);

  useEffect(() => {
    if (isAscendingOrder !== undefined) {
      handleSortAndFilterChars();
    } else {
      setCharaModifyList([...charactersList]);
    }
    // eslint-disable-next-line
  }, [charactersList, isAscendingOrder]);

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <div className={styles.sortBtnsDiv}>
          <button
            className={styles.ascBtn}
            type="button"
            onClick={() => setIsAscendingOrder(true)}
          >
            A-Z
          </button>
          <button
            className={styles.descBtn}
            type="button"
            onClick={() => setIsAscendingOrder(false)}
          >
            Z-A
          </button>
        </div>
        <h2>Rick & Mory Characters</h2>
        <div className={styles.filterBtnsDiv}>
          <DropDownBtn
            content={CHARACTERS_SPECIES}
            btnName="Filter Characters"
            onClickItemCB={handleClickMenuItem}
          />
        </div>
      </div>
      <div className={styles.galeryContainer}>
        {charaModifyList?.map((char) => (
          <div
            key={char.id}
            className={styles.card}
            onClick={() => {
              setCharacter(char);
              navigate("/details-character");
            }}
          >
            <div className={styles.cardImg}>
              <img src={char.image} alt="img" />
            </div>
            <p>{char.name}</p>
          </div>
        ))}
      </div>
      <div>
        {isCharLoading ? <p>Loading...</p> : null}
        {page > 4 ? (
          <p className={styles.endOfCardsMsg}>End of cards!</p>
        ) : null}
        {errorChar ? <p className={styles.errorMsg}>Error: {errorChar}</p> : ""}
      </div>
    </div>
  );
};

export default CharactersPage;
