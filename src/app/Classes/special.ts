import { SpecialStatDataType } from 'src/app/Classes/specialdatacenter';

export class Special
{
  constructor(
    name: string,
    pool: string,
    punti: number,
    currency: string,
    description: string,
    manifestazione:  Array<SpecialStatDataType>,
    durata:  Array<SpecialStatDataType>,
    tipologia:  Array<SpecialStatDataType>,
    effetto:  Array<SpecialStatDataType>,
    intesita: SpecialStatDataType
    )
  {
    this.Name = name;
    this.Pool = pool;
    this.Punti = punti;
    this.Descirtion = description;

    this.Rango = punti / 2;
    this.Currency = currency;
    this.Manifestazione = manifestazione;
    this.Durata = durata;

    this.Tipologia = tipologia;
    this.Effetto = effetto;
    this.Intensita = intesita;
  }

  public Name: string;
  public Pool: string;
  public Descirtion: string;
  public Currency: string;

  public Punti: number;
  public Rango: number;

  public Manifestazione: Array<SpecialStatDataType>;
  public Durata:  Array<SpecialStatDataType>;

  public Tipologia:  Array<SpecialStatDataType>;

  public Effetto:  Array<SpecialStatDataType>;
  public Intensita: SpecialStatDataType;
}
