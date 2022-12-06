import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterValuesType} from "../../App";
import css from './Pupils.module.css'
import {Button} from "../utils/Button";
import {Input} from "../utils/Input";
import {Pupil, PupilType} from "./Pupil";

export type PropsType = {
  title: string
  pupils: Array<PupilType>
  filter: FilterValuesType
  changeFilter: (filter: FilterValuesType) => void
  removePupil: (id: string) => void
  addPupil: (name: string) => void
}

export const Pupils = (props: PropsType) => {
  const [name, setName] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const [clickedFilter, setClickedFilter] = useState<FilterValuesType>("all")
  const [filledInput, setFilledInput] = useState<boolean>(false)

  const mappedPupils = props.pupils.map(p => {
    const removePupil = () => props.removePupil(p.id)

    return <Pupil pupil={p} removePupil={removePupil} />
    // (
    //   // <li key={k.id} className={css.pupilWrapper}>
    //   //   {k.name} - {k.age} y.o.
    //   //   <button onClick={removePupil} className={css.filterButton}>remove</button>
    //   // </li>
    // )
  })

  const filterAllHandler = () => {
    props.changeFilter("all")
    setClickedFilter("all")
  }
  const filterOlder14Handler = () => {
    props.changeFilter("older then 14")
    setClickedFilter("older then 14")
  }
  const filterYounger13Handler = () => {
    props.changeFilter("younger then 13")
    setClickedFilter("younger then 13")
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
    setError(false)
    setFilledInput(true)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      addPupil();
    }
  }
  const addPupil = () => {
    if (name.trim() !== '') {
      props.addPupil(name.trim())
    } else {
      setError(true)
    }
    setName("")
  }

  return (
    <div>
      <h1 className={css.pupilsTitle}>{props.title}</h1>
      {error && <p className={css.errorClass}>The name is required</p>}
      <div className={css.inputWrapper}>
        <Input value={name} onChangeCallback={onChangeHandler} onKeyPressCallback={onKeyPressHandler} />
        <Button
          name={"Add"}
          callback={addPupil}
          class={filledInput ? css.filterButton : (css.filterButton + ' ' + css.disabled)}
        />
      </div>
      <ol className={css.mappedPupils}>
        {mappedPupils}
      </ol>
      <div className={css.buttonsWrapper}>
        <Button
          name={"All"}
          callback={filterAllHandler}
          class={clickedFilter === "all" ? css.filterButton : (css.filterButton + ' ' + css.disabled)}
        />
        <Button
          name={"Older then 14"}
          callback={filterOlder14Handler}
          class={clickedFilter === "older then 14" ? css.filterButton : (css.filterButton + " " + css.disabled)}
        />
        <Button
          name={"Younger then 13"}
          callback={filterYounger13Handler}
          class={clickedFilter === "younger then 13" ? css.filterButton : (css.filterButton + " " + css.disabled)}
        />
      </div>
    </div>
  )
}