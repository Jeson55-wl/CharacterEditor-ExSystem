import { SpecialStatDataType } from 'src/app/Classes/specialdatacenter';
import { Special } from './special';
import { Abilityspec } from './abilityspec';

export class Character
{



    //Base Description
    image: string;

    Race: string;
    Sex: string;
    Origin: string;
    Age: number;

    Archetype: string;
    Affigliation: string;
    Rank: string;
    XP: number;

    CharacterName: string;
    Description: string;

    //Primary Stats
    Coordinazione: number;
    Potenza: number;
    Rapidita: number;
    Resistenza: number;
    Precezione: number;
    Intuito: number;
    Ragione: number;
    Saggezza: number;

    //Risorse
    Possedimenti: number;
    Alleati: number;
    Potere: number;
    Reputazione: number;

    //Secondary Stats
    ResistenzaFisica: number;
    ResistenzaMentale: number;
    Salute: number;
    Sanita: number;
    AzioniMaggior: number;
    AzioniMinori: number;

    CharacterID: number;

    Ability = new Array<Abilityspec>();

    specialRank1 = new Array<Special>();
    specialRank2 = new Array<Special>();
    specialRank3 = new Array<Special>();

    specialRank4 = new Array<Special>();
    specialRank5 = new Array<Special>();
    specialRank6 = new Array<Special>();


    spendedCurrencyPoints = 0;

    TechincheCurrecyPoints = 0;
    CapacitaCurrecyPoints  = 0;
    PoteriCurrencyPoints = 0;

    AddAbility(name: string, rank: number, mastery: number)
    {
      this.Ability.push(new Abilityspec(rank, name, mastery));
    }





    AddSpecialRank1(name: string,
                    pool: string,
                    punti: number,
                    currency: string,
                    manifestazione: Array<SpecialStatDataType>,
                    durata: Array<SpecialStatDataType>,
                    tipologia: Array<SpecialStatDataType>,
                    effetto: Array<SpecialStatDataType>,
                    intesita: number)
    {
      this.specialRank1.push(new Special(name, pool, punti , currency, manifestazione, durata, tipologia, effetto, intesita));
    }

    AddSpecialRank2(name: string,
                    pool: string,
                    punti: number,
                    currency: string,
                    manifestazione: Array<SpecialStatDataType>,
                    durata: Array<SpecialStatDataType>,
                    tipologia: Array<SpecialStatDataType>,
                    effetto: Array<SpecialStatDataType>,
                    intesita: number)
    {
      this.specialRank2.push(new Special(name, pool, punti , currency, manifestazione, durata, tipologia, effetto, intesita));
    }

    AddSpecialRank3(name: string,
                    pool: string,
                    punti: number,
                    currency: string,
                    manifestazione: Array<SpecialStatDataType>,
                    durata: Array<SpecialStatDataType>,
                    tipologia: Array<SpecialStatDataType>,
                    effetto: Array<SpecialStatDataType>,
                    intesita: number)
    {
      this.specialRank3.push(new Special(name, pool, punti , currency, manifestazione, durata, tipologia, effetto, intesita));
    }

    AddSpecialRank4(name: string,
                    pool: string,
                    punti: number,
                    currency: string,
                    manifestazione: Array<SpecialStatDataType>,
                    durata: Array<SpecialStatDataType>,
                    tipologia: Array<SpecialStatDataType>,
                    effetto: Array<SpecialStatDataType>,
                    intesita: number)
    {
      this.specialRank4.push(new Special(name, pool, punti , currency, manifestazione, durata, tipologia, effetto, intesita));
    }

    AddSpecialRank5(name: string,
                    pool: string,
                    punti: number,
                    currency: string,
                    manifestazione: Array<SpecialStatDataType>,
                    durata: Array<SpecialStatDataType>,
                    tipologia: Array<SpecialStatDataType>,
                    effetto: Array<SpecialStatDataType>,
                    intesita: number)
    {
      this.specialRank5.push(new Special(name, pool, punti , currency, manifestazione, durata, tipologia, effetto, intesita));
    }

    AddSpecialRank6(name: string,
                    pool: string,
                    punti: number,
                    currency: string,
                    manifestazione: Array<SpecialStatDataType>,
                    durata: Array<SpecialStatDataType>,
                    tipologia: Array<SpecialStatDataType>,
                    effetto: Array<SpecialStatDataType>,
                    intesita: number)
    {
      this.specialRank6.push(new Special(name, pool, punti , currency, manifestazione, durata, tipologia, effetto, intesita));
    }

    RemoveSpecialRank1(index: number)
    {
      this.specialRank1.splice(index);
    }

    RemoveSpecialRank2(index: number)
    {
      this.specialRank2.splice(index);
    }
    RemoveSpecialRank3(index: number)
    {
      this.specialRank3.splice(index);
    }


    RemoveSpecialRank4(index: number)
    {
      this.specialRank4.splice(index);
    }

    RemoveSpecialRank5(index: number)
    {
      this.specialRank5.splice(index);
    }
    RemoveSpecialRank6(index: number)
    {
      this.specialRank6.splice(index);
    }


}
