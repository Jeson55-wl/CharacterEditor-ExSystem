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


  RemoveSpecia(index: number)
  {
    this.specials.splice(index);
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
