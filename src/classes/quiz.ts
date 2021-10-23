import type ObjectGettable from "src/interfaces/ObjectGettable"
import type QuizOption from "./quiz_option"

export default class Quiz implements ObjectGettable {
  constructor(
    public readonly text: string,
    public readonly options: Array<QuizOption>
  ) {}

  getObject() {
    return {
      text: this.text,
      options: this.options.map(option => option.getObject())
    }
  }
}
