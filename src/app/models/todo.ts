export class Todo {
  static i = 0;
  private _id: number;
  private _name: string;
  private _content: string;

  constructor(name: string, content: string) {
    this._id = Todo.i;
    this._name = name;
    this._content = content;
    Todo.i ++;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }
}
