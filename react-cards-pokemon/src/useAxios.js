import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = (URL) => {
  const [cards, setCards] = useState([]);
  const addCards = async () => {
    const response = await axios.get(URL);
    setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  };
  const clearResponses = () => setCards([]);

  return [cards, addCards, clearResponses];
};

export default useAxios;
