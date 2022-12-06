type ButtonType = {
  name: string
  class: string
  callback: () => void
}

export const Button = (props: ButtonType) => {
  return <button className={props.class} onClick={props.callback}>{props.name}</button>
}