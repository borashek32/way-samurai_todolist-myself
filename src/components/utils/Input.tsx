import {ChangeEvent, KeyboardEvent} from "react";

type InputType = {
  value: string
  onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyPressCallback: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const Input = (props: InputType) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChangeCallback(e)
  }
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    props.onKeyPressCallback(e)
  }

  return <input type="text" value={props.value} onChange={onChangeCallback} onKeyPress={onKeyPressCallback} />
}