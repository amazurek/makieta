export class Params {
  trybPracy:string;
własciciel:string;
magazyn:string
sztolnia:string
pompy:string;
dostawca:string;
emisyjnosc:number;
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
    trybPracy:string,
własciciel:string,
magazyn:string,
sztolnia:string,
pompy:string,
dostawca:string,
emisyjnosc:number,
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
