export class Params {
  dataOd:Date;
  dataDo:Date;
  autor:string;
  dataModyfikacji:Date;

  trybPracy: string;
  wlasciciel: string;
  magazyn: string;
  sztolnia: string;
  pompy: string;
  dostawca: string;
  emisyjnosc: number;
  mocMaxBrutto: number;
  mocMinBrutto: number;
  mocMaxBruttoCieplna: number;
  sredniaSprawnosc: number;
  udzialBiomasy: number;
  czescStala: number;
  czescZmienna: number;
  znacznikAktywnosci: number;
  srednieOptimumTechniczne: number;
  sredniaSprawnoscOptymalna: number;
  wolumenMaxFCRd: number;
  wolumenMaxFCRg: number;
  wolumenMaxaFRRd: number;
  wolumenMaxaFRRg: number;
  wolumenMaxmFRRd: number;
  wolumenMaxmFRRg: number;
  rampaGora: number;
  rampaDol: number;
  pozostaleKosztyZmienne: number;
  oplataPrzesylowa: number;

  public setParams(
    dataOd:Date,
    dataDo:Date,
    autor:string,
    dataModyfikacji:Date,
    trybPracy: string,
    wlasciciel: string,
    magazyn: string,
    sztolnia: string,
    pompy: string,
    dostawca: string,
    emisyjnosc: number,
    mocMaxBrutto: number,
    mocMinBrutto: number,
    mocMaxBruttoCieplna: number,
    sredniaSprawnosc: number,
    udzialBiomasy: number,
    czescStala: number,
    czescZmienna: number,
    znacznikAktywnosci: number,
    srednieOptimumTechniczne: number,
    sredniaSprawnoscOptymalna: number,
    wolumenMaxFCRd: number,
    wolumenMaxFCRg: number,
    wolumenMaxaFRRd: number,
    wolumenMaxaFRRg: number,
    wolumenMaxmFRRd: number,
    wolumenMaxmFRRg: number,
    rampaGora: number,
    rampaDol: number,
    pozostaleKosztyZmienne: number,
    oplataPrzesylowa: number
  ) {
    this.dataOd = dataOd;
    this.dataDo = dataDo;
    this.autor = autor;
    this.dataModyfikacji = dataModyfikacji;
    this.trybPracy = trybPracy;
    this.wlasciciel = wlasciciel;
    this.magazyn = magazyn;
    this.sztolnia = sztolnia;
    this.pompy = pompy;
    this.dostawca = dostawca;
    this.emisyjnosc = emisyjnosc;
    this.mocMaxBrutto = mocMaxBrutto;
    this.mocMinBrutto = mocMinBrutto;
    this.mocMaxBruttoCieplna = mocMaxBruttoCieplna;
    this.sredniaSprawnosc = sredniaSprawnosc;
    this.udzialBiomasy = udzialBiomasy;
    this.czescStala = czescStala;
    this.czescZmienna = czescZmienna;
    this.znacznikAktywnosci = znacznikAktywnosci;
    this.srednieOptimumTechniczne = srednieOptimumTechniczne;
    this.sredniaSprawnoscOptymalna = sredniaSprawnoscOptymalna;
    this.wolumenMaxFCRd = wolumenMaxFCRd;
    this.wolumenMaxFCRg = wolumenMaxFCRg;
    this.wolumenMaxaFRRd = wolumenMaxaFRRd;
    this.wolumenMaxaFRRg = wolumenMaxaFRRg;
    this.wolumenMaxmFRRd = wolumenMaxmFRRd;
    this.wolumenMaxmFRRg = wolumenMaxmFRRg;
    this.rampaGora = rampaGora;
    this.rampaDol = rampaDol;
    this.pozostaleKosztyZmienne = pozostaleKosztyZmienne;
    this.oplataPrzesylowa = oplataPrzesylowa;
  }
}
