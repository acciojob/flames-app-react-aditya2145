import React, { useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');

  const relationshipMap = {
    1: "Friends",
    2: "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
    0: "Siblings",
  };

  function handleRelationship() {
    if(!name1.trim() || !name2.trim()) {
      alert('Please Enter valid input');
      return;
    }

    let str1 = name1;
    let str2 = name2;

    // Remove common letters
    for (let char of name1) {
      if (str2.includes(char)) {
        str1 = str1.replace(char, "");
        str2 = str2.replace(char, "");
      }
    }

    const totalLength = str1.length + str2.length;
    const relationshipKey = totalLength % 6;

    setRelationshipStatus(relationshipMap[relationshipKey]);
  }

  function clearInputs() {
    setName1('');
    setName2('');
    setRelationshipStatus('');
  }
    
    return(
        <div id="main">
            {/* Do not remove the main div */}
            <input type="text" placeholder='Enter first name' date-testid='input1' value={name1} onChange={(e) => setName1(e.target.value)} />
            <input type="text" placeholder='Enter second name' date-testid='input2' value={name2} onChange={(e) => setName2(e.target.value)} />
            <button data-testid="calculate_relationship" onClick={handleRelationship}>Calculate Relationship Future</button>
            <button data-testid="clear" onClick={clearInputs}>Clear</button>
            <h3 data-testid="answer">{relationshipStatus}</h3>
        </div>
    )
}


export default App;
