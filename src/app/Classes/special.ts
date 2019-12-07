import { SpecialStatDataType } from 'src/app/Classes/specialdatacenter';

export class Special
{
  constructor(
    name: string,
    pool: string,
    punti: number,
    currency: string,
    manifestazione:  Array<SpecialStatDataType>,
    durata:  Array<SpecialStatDataType>,
    tipologia:  Array<SpecialStatDataType>,
    effetto:  Array<SpecialStatDataType>,
    intesita: number
    )
  {
    this.Name = name;
    this.Pool = pool;
    this.Punti = punti;

    this.Rango = punti / 2;
    this.Currency = currency;
    this.Manifestazione = manifestazione;
    this.Durata = durata;

    this.Tipologia = tipologia;
    this.Effetto = effetto;
    this.Intensita = intesita;
  }

  Name: string;
  Pool: string;
  Descirtion: string;
  Currency: string;

  Punti: number;
  Rango: number;

  Manifestazione: Array<SpecialStatDataType>;
  Durata:  Array<SpecialStatDataType>;

  Tipologia:  Array<SpecialStatDataType>;

  Effetto:  Array<SpecialStatDataType>;
  Intensita: number;
}
