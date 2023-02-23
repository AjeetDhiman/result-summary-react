import { useState } from "react";
import reaction from "./assets/images/icon-reaction.svg";
import memory from "./assets/images/icon-memory.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";

import "./App.css";

function App() {
  const data = [
    {
      category: "Reaction",
      score: 80,
      icon: reaction,
    },
    {
      category: "Memory",
      score: 92,
      icon: memory,
    },
    {
      category: "Verbal",
      score: 61,
      icon: verbal,
    },
    {
      category: "Visual",
      score: 72,
      icon: visual,
    },
  ];

  return (
    <div class="container">
      <div class="box">
        <div class="inner-block-1">
          <p>Your Result</p>
          <div class="score">
            <span>76</span>
            <span>of 100</span>
          </div>
          <div class="remarks">
            <span>Great</span>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div class="inner-block-2">
          <h4>Summary</h4>
          <div class="summary">
            <ul>
              {data.map((item, i) => (
                <li key={i}>
                  <p>
                    <img src={`${item.icon}`} />
                    {item.category}
                  </p>
                  <div>
                    <span>{item.score}</span> <span>/ 100</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button class="btn">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
