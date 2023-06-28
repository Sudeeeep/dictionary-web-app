import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url, UserWord) => {
  const [loading, setLoading] = useState(false);
  const [word, setWord] = useState(null);
  const [pronunciation, setPronunciation] = useState(null);
  const [phoneticText, setPhoneticText] = useState([]);
  const [audio, setAudio] = useState(null);
  const [meanings, setMeanings] = useState([]);
  const [source, setSource] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (UserWord) {
      console.log("fetch");
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          setWord(res.data[0].word);
          setPronunciation(res.data[0].phonetic);
          setPhoneticText(
            res.data[0].phonetics
              .filter((item) => item.text)
              .map((item) => item.text)
          );
          setAudio(
            res.data[0].phonetics
              .filter((item) => item.audio)
              .map((item) => item.audio)
          );
          setMeanings(res.data[0].meanings);
          setSource(res.data[0].sourceUrls);
          setError(null);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => setLoading(false));
    }
  }, [url, UserWord]);

  return {
    loading,
    word,
    error,
    phoneticText,
    pronunciation,
    audio,
    meanings,
    source,
  };
};
