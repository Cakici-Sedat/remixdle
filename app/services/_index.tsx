import type { V2_MetaFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { useRef, useState } from "react";
import { makeGuess } from "./wordleLogic";

export const meta: V2_MetaFunction = () => {
  return [{ title: "App" }];
};

export default function Index() {
  const inputRef = useRef<HTMLInputElement>(null);
  const messageDiv = useRef<HTMLDivElement>(null);
  const [answer, setAnswer] = useState("");
  const [chances, setChances] = useState<number>(0) // numeric value
  const [message, setMessage] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);


    const [divElements, setDivElements] = useState(Array.from({ length: 30 }, (_, index) => ({
      id: index.toString(),
      backgroundColor: "grey",
      text: ""
    })));
  
  function abcOnly() {
    // whenever trying to enter a numeric character, the system will throw a warning message
    if (inputRef.current && messageDiv.current) {
      const i = inputRef.current;
      const m = messageDiv.current;
      i.addEventListener("keypress", function (event) {
        const key = event.key;
        const regex = /^[a-zA-Z]+$/.test(key);
        if (!regex) {
          event.preventDefault();
          m.classList.remove("hidden");
          setMessage(
            "[WARNING] - The input should only contain Alphabetical characters!"
          );
          console.log("");
        } else {
          setMessage("");
        }
      });
    }
  }

  function closeMessageTab() {
    // nothing, just a function to close the warning message box
    if (messageDiv.current) {
      const m = messageDiv.current;
      m.classList.toggle("hidden");
    }
  }

  function getAnswer(event: React.FormEvent<HTMLFormElement>) {
    if(chances >= 5){
      setMessage("YOU LOST LOSER!")
    }
    // checks if the typed answer is correct and if it is, jumps to the next screen
    event.preventDefault();
    
    const inputValue = inputRef.current?.value ? inputRef.current.value : "";
    if(!inputValue){
      throw new Error("Hello something went wrong!");
      
    }
    const guess = makeGuess(inputValue)
    if(typeof guess === "string"){
// ----------------------------------

      setMessage(guess)
      if(guess === "Congratulations, you guessed right! 🎉"){
        for (let i = 0; i < inputValue.length; i++) {
          manipulateDiv((i + (chances*5)).toString() ,inputValue.charAt(i).toUpperCase(), "green")
        }
      }

// ---------------------------------
    }
    else{

      console.log(guess)
      console.log(inputValue.length)
    for (let i = 0; i < inputValue.length; i++) {
      let currentColor = guess.scores[i][1] === '🟥' ? "grey" 
                        : guess.scores[i][1] === '🟨' ? "yellow"
                        : "green"
      manipulateDiv( (i + (chances*5)).toString() , inputValue.charAt(i).toUpperCase(), currentColor)
    }
    setChances(chances+1)
  }
  }

  if (correctAnswer) {
    // returned screen after the answer matches any of the words from the 'answers' array
    return (
      <div className="bg-slate-800 text-trextrex h-screen flex items-center justify-center flex-col gap-6">
        {answer}
        <Link
          to={""}
          onClick={(event) => {
            event.preventDefault()
            setCorrectAnswer(false);
          }}
        >
          Back
        </Link>
      </div>
    );
  }

  const manipulateDiv = (divId: string, character: string, color:string) => {
    setDivElements((prevElements) =>
      prevElements.map((el) =>
        el.id === divId
          ? {
              ...el,
              backgroundColor: color,
              text: character,
            }
          : el
      )
    );
  };

  return (
    <Form
      onSubmit={getAnswer}
      className="h-screen bg-slate-800 flex items-center gap-12 flex-col justify-center border-4 border-slate-900"
    >
      <input
        className="w-[350px] h-[44px] rounded-md bg-white/20 text-trextrex outline-0 focus:ring-4 focus:ring-white/10 border border-white/20 focus:border-white/40 transition pl-4"
        tabIndex={-1}
        ref={inputRef}
        maxLength={5}
        type="text"
        onFocus={() => {
          abcOnly();
        }}
      />

        {/*  HERE STARTS  */}
        <div className="grid grid-cols-5 gap-2 p-2 bg-white/20 rounded-md">
          {divElements.map((el) => (
            <div key={el.id}> 
                <div key={el.id} style={{ backgroundColor: el.backgroundColor }} className="flex items-center justify-center text-trex2xl font-semibold bg-white/30 h-16 w-16 rounded-md hover:bg-white/20">
                  {el.text}
                </div>
            </div>
          ))}
        </div>

            
      <button
        type="submit"
        className="bg-green-500 hover:bg-white/50 text-trextrex py-2 px-6 rounded-sm transition"
      >
        submit
      </button>
      <div
        ref={messageDiv}
        className={`mt-4 ${
          message ? "p-3 bg-yellow-600/10 text-trexyellow-600 rounded-md" : "hidden"
        }`}
      >
        {message}
        <button
          onClick={closeMessageTab}
          className="p-2 bg-white/20 text-trextrex rounded-sm ml-2"
        >
          Close
        </button>
      </div>
    </Form>
  );
}

