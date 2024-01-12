export class Pokemon {

  id: number;
  public hp: number;
  public cp: number;
  public name: string;
  public picture: string;
  public types: Array<string>;
  public created: Date;

  constructor(
    hp: number = 100,
    cp: number = 10,
    name: string = 'name',
    picture: string = 'http://...',
    types: Array<string> = ['Normal'],
    created: Date = new Date()
  ) {
    this.hp = hp;
    this.cp = cp;
    this.name = name;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
}
