export class Abilityspec
{
  Rank: number;
  Name: string;

  Mastery: number;

  specials = new Array<Abilityspec>();

  constructor(rank: number, name: string, mastery: number)
  {
    this.Rank = rank;
    this.Name = name;
    this.Mastery = mastery;
  }


  public RemoveSpecia(index: number)
  {
    this.specials.splice(index, 1);
  }





  AddSpecial(rank: number, name: string, mastery: number)
  {
    this.specials.push(new Abilityspec(rank, name, mastery));
  }

  getSpecialList()
  {
    return this.specials;
  }





}
