import React from "react";
import "./Definitions.css";

const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subTitle">
          Start by typing a word in the search bar
        </span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <b>{def.definition}</b>
                <br />
                {def.example && (
                  <span>
                    <i>Example: </i>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <br />
                    <i>Synonyms: </i>
                    {def.synonyms.map((s) => `${s}, `)}
                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
