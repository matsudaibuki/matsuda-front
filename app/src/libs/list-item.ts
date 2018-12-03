
export class ListItem {
  constructor(private _key: string, private _value: string, private _text: string) {
  }

  static create({key, _key, value, _value, text, _text}) {
    return new ListItem(key || _key, value ||_value, text ||_text)
  }

  static getListItems(data: Array<any>): Array<ListItem> {
    return data.map((e) => ListItem.create(e))
  }

  get key(): string {return this._key}
  get value(): string {return this._value}
  get text(): string {return this._text}
}
