import React, {useState} from 'react';
import './App.css';
import {Pupils} from "./components/pupils/Pupils";
import {pupils} from "./state/state";
import {v1} from "uuid";
import {PupilType} from "./components/pupils/Pupil";

export type FilterValuesType = "all" | "older then 14" | "younger then 13"

function App() {
  const [kids, setKids] = useState<Array<PupilType>>(pupils)
  const [filter, setFilter] = useState<FilterValuesType>('all')

  const changeFilter = (filter: FilterValuesType) => {
    setFilter(filter)
  }
  let filteredPupils = kids
  if (filter === "older then 14") {
    filteredPupils = kids.filter(k => k.age >= 14)
  } else if (filter === "younger then 13") {
    filteredPupils = kids.filter(k => k.age <= 13)
  }

  const removePupil = (id: string) => {
    setKids(kids.filter(p => p.id !== id))
  }

  const addPupil = (name: string) => {
    let newPupil = {id: v1(), name: name, age: 13, skills: ["css"]}
    setKids([newPupil, ...kids])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Pupils
          pupils={filteredPupils}
          title={"My class"}
          filter={filter}
          changeFilter={changeFilter}
          removePupil={removePupil}
          addPupil={addPupil}
        />
      </header>
    </div>
  );
}

export default App;
