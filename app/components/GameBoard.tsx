import { useState } from "react";

export function GameBoard() {
    const [divElements, setDivElements] = useState(Array.from({ length: 30 }, (_, index) => ({
        key: index.toString(),
        defaultStyle: "flex items-center justify-center text-trex2xl font-semibold bg-white/30 h-16 w-16 rounded-md hover:bg-white/20",
        text: ""
      })));
      
      function setElement(id:string, input:string) {
        setDivElements((gameBoard) =>
        gameBoard.map((singleField) =>
          singleField.key === id
            ? {
                ...singleField,
                text: input,
              }
            : singleField
        )
      );
      }
      
    return(
        <div className="grid grid-cols-5 gap-2 p-2 mt-12 bg-white/20 rounded-md"> 
            {
            divElements.map((element) => (
                <div key={element.key}>
                    <div key={element.key} className={element.defaultStyle}>
                        {element.text}
                    </div>
                </ div>
            ))
            }
        <button onClick={() => setElement("0", "A")}>
            Klick me !
        </button>
        </div>
    )
    
}