import { Component, Prop, h, EventEmitter, Event, Listen } from "@stencil/core";

@Component({
  tag: "otc-input",
  styleUrl: "otc-input.scss",
  shadow: true,
})
export class MyComponent {
  @Prop() characterCount: number;

  @Event() codeChanged: EventEmitter<string>;

  @Listen("resize")
  todoCompletedHandler(event: DocumentEvent) {
    debugger;
    console.log(event);
  }

  inputRefs: HTMLInputElement[] = [];

  onKeyUp(event: KeyboardEvent, inputNumber: number) {
    if (event.key === "Backspace" || event.key === "ArrowLeft") {
      let input = this.inputRefs[inputNumber - 2];

      if (input) {
        input.focus();
      }
    } else if (
      (event.keyCode >= 48 && event.keyCode <= 57) ||
      (event.keyCode >= 65 && event.keyCode <= 90) ||
      (event.keyCode >= 96 && event.keyCode <= 105) ||
      event.keyCode === 39
    ) {
      if (event.key !== "ArrowRight") {
        let currentInput = this.inputRefs[inputNumber - 1];
        currentInput.value = event.key;
      }

      let input = this.inputRefs[inputNumber];
      if (input) {
        input.focus();
      }
    }

    this.buildCodeFromInputs();
  }

  buildCodeFromInputs() {
    let code = "";
    for (const input of this.inputRefs) {
      code += input.value;
    }

    this.codeChanged.emit(code);
  }

  render() {
    const inputArray = [
      <input
        type="text"
        ref={(input) => {
          this.inputRefs[0] = input;
        }}
        maxLength={1}
        onKeyUp={(event: KeyboardEvent) => {
          this.onKeyUp(event, 1);
        }}
      />,
    ];

    for (let i = 2; i < this.characterCount + 1; i++) {
      inputArray.push(
        <input
          type="text"
          maxLength={1}
          onKeyUp={(event: KeyboardEvent) => {
            this.onKeyUp(event, i);
          }}
          ref={(input) => {
            this.inputRefs[i - 1] = input;
          }}
        />
      );
    }

    return <div class="digit-group">{inputArray}</div>;
  }
}
