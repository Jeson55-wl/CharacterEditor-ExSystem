export interface SpecialStatDataType{name: string, pointCost: number}


export class SpecialDataCenter
{
  listOfManifestations: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(
    {name: 'Vuoto', pointCost: 0},
    {name: 'Personale', pointCost: 0},
    {name: 'Contatto', pointCost: 0},
    {name: 'Oggetto', pointCost: 0},

    {name: 'Raggio 1 (corto)',        pointCost: 1},
    {name: 'Raggio 2 (vicino)',       pointCost: 2},
    {name: 'Raggio 3 (medio)',        pointCost: 3},
    {name: 'Raggio 4 (distante)',     pointCost: 4},
    {name: 'Raggio 5 (lontano)',      pointCost: 5},
    {name: 'Raggio 6 (lontanissimo)', pointCost: 6},

    {name: 'Dardo 1 (corto)',         pointCost: 0},
    {name: 'Dardo 2 (vicino)',        pointCost: 2},
    {name: 'Dardo 3 (medio)',         pointCost: 4},
    {name: 'Dardo 4 (distante)',      pointCost: 6},
    {name: 'Dardo 5 (lontano)',       pointCost: 8},
    {name: 'Dardo 6 (lontanissimo)',  pointCost: 10},

    {name: 'Bolla 1 (corto)',         pointCost: 2},
    {name: 'Bolla 2 (vicino)',        pointCost: 4},
    {name: 'Bolla 3 (medio)',         pointCost: 6},
    {name: 'Bolla 4 (distante)',      pointCost: 8},
    {name: 'Bolla 5 (lontano)',       pointCost: 10},
    {name: 'Bolla 6 (lontanissimo)',  pointCost: 12},

    {name: 'Cono 1 (corto)',          pointCost: 1},
    {name: 'Cono 2 (vicino)',         pointCost: 3},
    {name: 'Cono 3 (medio)',          pointCost: 4},
    {name: 'Cono 4 (distante)',       pointCost: 6},
    {name: 'Cono 5 (lontano)',        pointCost: 7},
    {name: 'Cono 6 (lontanissimo)',   pointCost: 9},

    {name: 'Muro 1 (2-3m)',         pointCost: 1},
    {name: 'Muro 2 (5-10m)',        pointCost: 2},
    {name: 'Muro 3 (30-40m)',       pointCost: 3},
    {name: 'Muro 4 (50-100m)',      pointCost: 4},
    {name: 'Muro 5 (150-400m)',     pointCost: 5},
    {name: 'Muro 6 (500-800)',      pointCost: 6},

    {name: 'Statica', pointCost: 0},

    {name: 'Mobile 1 (1M/rnd)',    pointCost: 1},
    {name: 'Mobile 2 (1M+1m/end)', pointCost: 2},
    {name: 'Mobile 3 (2M+1m/end)', pointCost: 3},
    {name: 'Mobile 4 (2M+2m/end)', pointCost: 4},
    {name: 'Mobile 5 (3M+2m/end)', pointCost: 5},
    {name: 'Mobile 6 (3M+3m/end)', pointCost: 6}
  );




  listOfDurata: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(
    {name: 'Vuoto', pointCost: 0},
    {name: 'Instantaneo', pointCost: 0},
    {name: 'Ritardato', pointCost: 1},
    {name: 'Attivazione', pointCost: 1},

    {name: 'Continuato (RND) 1',        pointCost: 1},
    {name: 'Continuato (RND) 2',        pointCost: 2},
    {name: 'Continuato (RND) 3',        pointCost: 3},
    {name: 'Continuato (RND) 4',        pointCost: 4},
    {name: 'Continuato (RND) 5',        pointCost: 5},
    {name: 'Continuato (RND) 6',        pointCost: 6},

    {name: 'Continuato (Min) 1',        pointCost: 1},
    {name: 'Continuato (Min) 2',        pointCost: 2},
    {name: 'Continuato (Min) 3',        pointCost: 3},
    {name: 'Continuato (Min) 4',        pointCost: 4},
    {name: 'Continuato (Min) 5',        pointCost: 5},
    {name: 'Continuato (Min) 6',        pointCost: 6},

    {name: 'Continuato (Ore) 1',        pointCost: 1},
    {name: 'Continuato (Ore) 2',        pointCost: 2},
    {name: 'Continuato (Ore) 3',        pointCost: 3},
    {name: 'Continuato (Ore) 4',        pointCost: 4},
    {name: 'Continuato (Ore) 5',        pointCost: 5},
    {name: 'Continuato (Ore) 6',        pointCost: 6},

    {name: 'Continuato (Day) 1',        pointCost: 1},
    {name: 'Continuato (Day) 2',        pointCost: 2},
    {name: 'Continuato (Day) 3',        pointCost: 3},
    {name: 'Continuato (Day) 4',        pointCost: 4},
    {name: 'Continuato (Day) 5',        pointCost: 5},
    {name: 'Continuato (Day) 6',        pointCost: 6}
  );

  listOfTipologia: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(
    {name: 'Vuoto', pointCost: 0},
    {name: 'Semplice', pointCost: 0},
    {name: 'Attacco', pointCost: 0},
    {name: 'Difesa', pointCost: 0},
    {name: 'Contratacco', pointCost: 0},
    {name: 'Creazione', pointCost: 0},
    {name: 'Evocazione', pointCost: 0},

    {name: 'Movimento 1',    pointCost: 1},
    {name: 'Movimento 2',    pointCost: 2},
    {name: 'Movimento 3',    pointCost: 3},
    {name: 'Movimento 4',    pointCost: 4},
    {name: 'Movimento 5',    pointCost: 5},
    {name: 'Movimento 6',    pointCost: 6},

    {name: 'Potenziamento 1',    pointCost: 3},
    {name: 'Potenziamento 2',    pointCost: 6},
    {name: 'Potenziamento 3',    pointCost: 9},
    {name: 'Potenziamento 4',    pointCost: 12},

    {name: 'Scudo 1',    pointCost: 2},
    {name: 'Scudo 2',    pointCost: 4},
    {name: 'Scudo 3',    pointCost: 6},
    {name: 'Scudo 4',    pointCost: 8},
    {name: 'Scudo 5',    pointCost: 10},
    {name: 'Scudo 6',    pointCost: 12}


  );
  listOfEfetto: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(
    {name: 'Vuoto', pointCost: 0},
    {name: 'Danno', pointCost: 0},
    {name: 'Difesa', pointCost: 0},
    {name: 'Modificatore', pointCost: 0},
    {name: 'Spingi', pointCost: 1},
    {name: 'Tira', pointCost: 1},

    {name: 'Cura 1',    pointCost: 2},
    {name: 'Cura 2',    pointCost: 4},
    {name: 'Cura 3',    pointCost: 6},
    {name: 'Cura 4',    pointCost: 8},
    {name: 'Cura 5',    pointCost: 10},
    {name: 'Cura 6',    pointCost: 12},

    {name: 'Condizione 1',    pointCost: 2},
    {name: 'Condizione 2',    pointCost: 4},
    {name: 'Condizione 3',    pointCost: 6},
    {name: 'Condizione 4',    pointCost: 8},
    {name: 'Condizione 5',    pointCost: 10},
    {name: 'Condizione 6',    pointCost: 12},

    {name: 'Trapasso 1',    pointCost: 1},
    {name: 'Trapasso 2',    pointCost: 2},
    {name: 'Trapasso 3',    pointCost: 3},
    {name: 'Trapasso 4',    pointCost: 4},
    {name: 'Trapasso 5',    pointCost: 5},
    {name: 'Trapasso 6',    pointCost: 6},

    {name: 'A Catena 1',    pointCost: 1},
    {name: 'A Catena 2',    pointCost: 2},
    {name: 'A Catena 3',    pointCost: 3},
    {name: 'A Catena 4',    pointCost: 4},
    {name: 'A Catena 5',    pointCost: 5},
    {name: 'A Catena 6',    pointCost: 6},

    {name: 'Tiro Extra 1',    pointCost: 2},
    {name: 'Tiro Extra 2',    pointCost: 4},
    {name: 'Tiro Extra 3',    pointCost: 6},
    {name: 'Tiro Extra 4',    pointCost: 8},
    {name: 'Tiro Extra 5',    pointCost: 10},
    {name: 'Tiro Extra 6',    pointCost: 12},

    {name: 'Danno Continuato 1',    pointCost: 2},
    {name: 'Danno Continuato 2',    pointCost: 4},
    {name: 'Danno Continuato 3',    pointCost: 6},
    {name: 'Danno Continuato 4',    pointCost: 8},
    {name: 'Danno Continuato 5',    pointCost: 10},
    {name: 'Danno Continuato 6',    pointCost: 12},

    {name: 'Danno Extra 1',    pointCost: 2},
    {name: 'Danno Extra 2',    pointCost: 4},
    {name: 'Danno Extra 3',    pointCost: 6},
    {name: 'Danno Extra 4',    pointCost: 8},
    {name: 'Danno Extra 5',    pointCost: 10},
    {name: 'Danno Extra 6',    pointCost: 12},

    {name: 'Evoca 1',    pointCost: 1},
    {name: 'Evoca 2',    pointCost: 2},
    {name: 'Evoca 3',    pointCost: 3},
    {name: 'Evoca 4',    pointCost: 4},
    {name: 'Evoca 5',    pointCost: 5},
    {name: 'Evoca 6',    pointCost: 6}

  );
  listOfIntensita: Array<SpecialStatDataType> = new Array<SpecialStatDataType>(

    {name: 'Vuoto', pointCost: 0},
    {name: 'Intensità 1',    pointCost: 1},
    {name: 'Intensità 2',    pointCost: 2},
    {name: 'Intensità 3',    pointCost: 3},
    {name: 'Intensità 4',    pointCost: 4},
    {name: 'Intensità 5',    pointCost: 5},
    {name: 'Intensità 6',    pointCost: 6},
    {name: 'Intensità 7',    pointCost: 7},
    {name: 'Intensità 8',    pointCost: 8},
    {name: 'Intensità 9',    pointCost: 9},
    {name: 'Intensità 10',    pointCost: 10},
    {name: 'Intensità 11',    pointCost: 11},
    {name: 'Intensità 12',    pointCost: 12}

  );
}
