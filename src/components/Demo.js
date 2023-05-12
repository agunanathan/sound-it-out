import React, { useState } from "react";
const APIURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export default function Demo() {
  const [word, setWord] = useState("");
  const [soundToPlay, setSoundToPlay] = useState("");
  const [playDisabled, setPlayDisabled] = useState(true);

  const handleSubmit = (e) => {
    // prevent default behavior of reloading forms
    e.preventDefault();
  };

  async function checkSound(anyWord) {
    try {
      const response = await fetch(APIURL + anyWord);
      const data = await response.json();
      if (data?.[0]?.phonetics?.[0]?.audio !== "") {
        setSoundToPlay(data?.[0]?.phonetics?.[0]?.audio);
        setPlayDisabled(false);
      }
    } catch (err) {}
  }

  function playSound() {
    const sound = new Audio(soundToPlay);
    sound.play();
  }

  return (
    <div style={{ textAlign: "center" }} className="demo-content">
      <form className="DemoForm" onSubmit={handleSubmit}>
        <label>Type a Word</label>
        <span>: </span>
        <input
          type="text"
          placeholder="Type a word"
          id="demo-word"
          onClick={(e) => {
            setPlayDisabled(true);
          }}
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
        ></input>
        <button style={{ margin: "10px" }} onClick={() => checkSound(word)}>
          Check Word
        </button>
        <button
          disabled={playDisabled}
          style={{ margin: "10px" }}
          onClick={() => playSound(word)}
        >
          Play
        </button>
      </form>
    </div>
  );
}
