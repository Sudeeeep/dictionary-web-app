import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { SearchBar } from "./components/SearchBar";
import { useFetch } from "./hooks/useFetch";
import { Dictionary } from "./components/Dictionary";

function App() {
  const [userWord, setUserWord] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log(document.documentElement);
    if (localStorage.theme) {
      const localTheme = localStorage.getItem("theme");
      setTheme(localTheme);
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark:bg-[#050505]");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

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
    <div className="container pt-4 px-8 pb-6 h-screen sm:w-3/5 m-auto dark:bg-[#050505]">
      <Header theme={theme} setTheme={setTheme} />
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
