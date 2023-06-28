import play from "../assets/play_arrow_FILL1_wght400_GRAD0_opsz48.svg";
import propTypes from "prop-types";

export const Dictionary = ({
  word,
  pronunciation,
  phoneticText,
  audio,
  meanings,
  source,
  loading,
  error,
}) => {
  const handleAudio = () => {
    if (audio) {
      const audioPronunciation = new Audio(audio[0]);
      audioPronunciation.play();
    }
  };

  if (loading) {
    return <h1 className="text-center mt-20">LOADING...</h1>;
  }

  if (error) {
    if (error.message === "Network Error") {
      return (
        <h1 className="text-center  mt-20">
          {error.message}. Please check your connection
        </h1>
      );
    }
    console.log(error.response);
    return (
      <div className="text-center mt-20">
        <h1>{error.response.data.title}</h1>
        <p>{error.response.data.message}</p>
        <p>{error.response.data.resolution}</p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-3xl">{word}</h1>
          {pronunciation && <p className="text-[#a945f8]">{pronunciation}</p>}
          {!pronunciation && phoneticText[0] && (
            <p className="text-[#a945f8]">{phoneticText[0]}</p>
          )}
        </div>
        <button
          className="bg-[#E8D0FA] rounded-full p-3 self-center"
          onClick={handleAudio}
        >
          <img src={play} className="w-8" />
        </button>
      </div>

      <div className="flex flex-col gap-5 mt-5">
        {meanings.map((item, index) => (
          <div key={index}>
            <div className="flex gap-6 items-center">
              <p>{item.partOfSpeech}</p> <hr className="w-full" />
            </div>

            <div className="mt-5">
              <div>
                <h1 className="text-[#747474] mb-4">Meaning</h1>
                <ul>
                  {item.definitions.map((def, index) => (
                    <div key={index} className=" mb-4">
                      <li className="list-disc text-[#a945f8]">
                        <span className="text-black"> {def.definition}</span>
                      </li>
                      {def.example && (
                        <p className="text-[#747474]">"{def.example}"</p>
                      )}
                    </div>
                  ))}
                </ul>
              </div>

              <div>
                {item.synonyms.length > 0 && (
                  <h1 className="text-[#747474]">Synonyms: </h1>
                )}
                {item.synonyms.map((syn, index) => (
                  <p key={index} className="text-[#a945f8]">
                    {syn}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />

      <h1 className="mt-5 text-[#747474]">Source</h1>
      <a href={source[0]} target="__blank" className="underline">
        {source[0]}
      </a>
    </div>
  );
};

Dictionary.propTypes = {
  meanings: propTypes.array,
  word: propTypes.string,
  pronunciation: propTypes.string,
  phoneticText: propTypes.array,
  audio: propTypes.array,
  source: propTypes.array,
  loading: propTypes.bool,
  error: propTypes.object,
};
