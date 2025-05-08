// Important steps
/** Does:
 * describe exist?
 * it exist
 * test exist
 * getByText
 * render()
 * expect().toBe()
 */

import CustomButton, { ButtonState } from "./CustomButton";
// Isn't found, must be manually imported
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// DisplayName() JUNIT == Collection of Tests
describe("Easy Examples", () => {
  // Test #1
  test("2 + 2 = 4", () => {
    expect(2 + 2).toBe(4);
  });

  // Test #2
  test("is 2+4 greater than 0", () => {
    expect(2 + 4).toBeGreaterThan(0);
  });

  // Test #3
  test("is 2-2 equals 0", () => {
    expect(2 - 2).toBe(0);
  });
});

// cusotmbutton

describe("CustomButton component states", () => {
  // Idle
  test("Check if Button Component starts w Idle", () => {
    const buttonText: string = "signup";
    const { getByText } = render(<CustomButton buttonText={buttonText} />);
    const customButtonComponent = getByText(buttonText);

    expect(customButtonComponent).toHaveClass(ButtonState.idle);
  });

  // Hover
  test("Check if Button Component on hover state changes", () => {
    const buttonText: string = "signup";
    const { getByText } = render(<CustomButton buttonText={buttonText} />);
    const customButtonComponent = getByText(buttonText);

    expect(customButtonComponent).toHaveClass(ButtonState.idle);
    fireEvent.mouseEnter(customButtonComponent);
    expect(customButtonComponent).toHaveClass(ButtonState.hover);
  });

  // Clicked
  test("Custom Button Component on click state change", () => {
    const buttonText: string = "signup";
    const { getByText } = render(<CustomButton buttonText={buttonText} />);
    const customButtonComponent = getByText(buttonText);

    expect(customButtonComponent).toHaveClass(ButtonState.idle);
    fireEvent.click(customButtonComponent);
    expect(customButtonComponent).toHaveClass(ButtonState.clicked);
  });

  test("This test should fail for my github aciton training", ()=>{
    expect(2+22).toBe(999)
  })
});

//it("", () => {});
