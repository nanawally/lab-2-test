import { useState } from "react";
// ENUM - 3 different states for button
// IDLE | HOVER | CLICKED
export enum ButtonState {
  idle = "idle",
  hover = "hover",
  clicked = "clicked",
}

// You lose on: refactor capabilities, Immutability
type ButtonStateTwo = "idle" | "hover" | "clicked";

// Interface - PROPS
interface CustomButtonProps {
  buttonText: string;
}

export default function CustomButton(props: CustomButtonProps) {
  const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.idle);
  const [buttonStateTwo, setButtonStateTwo] = useState<ButtonStateTwo>("idle");

  return (
    <input
      type="button"
      value={props.buttonText}
      className={buttonState}
      onMouseLeave={() => {
        setButtonState(ButtonState.idle);
      }}
      onMouseEnter={() => {
        setButtonState(ButtonState.hover);
      }}
      onClick={() => {
        setButtonState(ButtonState.clicked);
      }}
    />
  );
}
