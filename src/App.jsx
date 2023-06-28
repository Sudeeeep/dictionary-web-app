import { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { SearchBar } from "./components/SearchBar";
import { useFetch } from "./hooks/useFetch";
import { Dictionary } from "./components/Dictionary";

function App() {
  const [userWord, setUserWord] = useState(null);

  const {
    word,
    pronunciation,
    phoneticText,
    audio,
    meanings,
    source,
    loading,
    error,
  } = useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`,
    userWord
  );

  const handleSearch = (inputWord) => {
    setUserWord(inputWord);
  };

  return (
    <div className="container pt-4 px-8 pb-6 sm:w-3/5 m-auto">
      <Header />
      <SearchBar handleSearch={handleSearch} />
      {!userWord && <Home />}
      {(word || error || loading) && (
        <Dictionary
          loading={loading}
          word={word}
          pronunciation={pronunciation}
          phoneticText={phoneticText}
          audio={audio}
          meanings={meanings}
          source={source}
          error={error}
        />
      )}
    </div>
  );
}

export default App;
