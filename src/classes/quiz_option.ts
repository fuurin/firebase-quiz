import type ObjectGettable from "src/interfaces/ObjectGettable";

export default class QuizOption implements ObjectGettable {
  constructor(
    public readonly text: string,
    public readonly isAnswer: boolean
  ) {}

  getObject() {
    return {
      text: this.text,
      isAnswer: this.isAnswer
    }
  }
}
