import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import axios from "axios";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

function Deck() {
  const [deck, setDeck] = useState(null);
  const [drawn, setDrawn] = useState([]);
  const [autoDraw, setAutoDraw] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${API_BASE_URL}/new/shuffle/`);
      setDeck(res.data);
    }
    getData();
  }, [setDeck]);

  useEffect(() => {
    async function getCard() {
      let { deck_id } = deck;

      try {
        let drawRes = await axios.get(`${API_BASE_URL}/${deck_id}/draw/`);

        if (drawRes.data.remaining === 0) {
          setAutoDraw(false);
          throw new Error("No cards remaining");
        }

        const card = drawRes.data.cards[0];

        setDrawn((d) => [
          ...d,
          {
            id: card.code,
            name: card.suit + " " + card.value,
            image: card.image,
          },
        ]);
      } catch (err) {
        alert(err);
      }
    }
    if (autoDraw && !timerRef.current) {
      timerRef.current = setInterval(async () => {
        await getCard();
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [autoDraw, setAutoDraw, deck]);

  const toggleAutoDraw = () => {
    setAutoDraw((auto) => !auto);
  };

  const cards = drawn.map((c) => (
    <Card key={c.id} name={c.name} image={c.image} />
  ));

  return (
    <div className="Deck">
      {deck ? (
        <button className="Deck-button" onClick={toggleAutoDraw}>
          {autoDraw ? "STOP" : "KEEP"} Draw for me!
        </button>
      ) : null}
      <div className="Deck-cardarea">{cards}</div>
    </div>
  );
}

export default Deck;
