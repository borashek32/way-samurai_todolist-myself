import css from "./Pupils.module.css";
import React from "react";

export type PupilPropsType = {
  pupil: PupilType
  removePupil: (id: string) => void
}
export type PupilType = {
  id: string,
  name: string,
  age: number,
  skills: SkillType[]
}
export type SkillType = string

export const Pupil = (props: PupilPropsType) => {
  const removePupilCallback = () => {
    props.removePupil(props.pupil.id)
  }

  return (
    <li key={props.pupil.id} className={css.pupilWrapper}>
      {props.pupil.name} - {props.pupil.age} y.o.
      <button onClick={removePupilCallback} className={css.filterButton}>remove</button>
    </li>
  )
}