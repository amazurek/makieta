export class MagazynAttr {
  kod: string;
  data_od: string;
  data_do: string;
  pojemnoscMWh: number;
  zbGornyPoziomEnMin: number;
  zbGornyPoziomEnMax: number;
  zbGornyPojemnoscMax: number;
  zbDolnyPoziomEnMin: number;
  zbDolnyPoziomEnMax: number;
  zbDolnyPojemnoscMax: number;
  minIlosc: number;
  maxIlosc: number;

  constructor(
    kod: string,
    data_od: string,
    data_do: string,
    pojemnoscMWh: number,
    zbGornyPoziomEnMin: number,
    zbGornyPoziomEnMax: number,
    zbGornyPojemnoscMax: number,
    zbDolnyPoziomEnMin: number,
    zbDolnyPoziomEnMax: number,
    zbDolnyPojemnoscMax: number,
    minIlosc: number,
    maxIlosc: number
  ) {
    this.kod = kod;
    this.data_od = data_od;
    this.data_do = data_do;
    this.pojemnoscMWh = pojemnoscMWh;
    this.zbGornyPoziomEnMin = zbGornyPoziomEnMin;
    this.zbGornyPoziomEnMax = zbGornyPoziomEnMax;
    this.zbGornyPojemnoscMax = zbGornyPojemnoscMax;
    this.zbDolnyPoziomEnMin = zbDolnyPoziomEnMin;
    this.zbDolnyPoziomEnMax = zbDolnyPoziomEnMax;
    this.zbDolnyPojemnoscMax = zbDolnyPojemnoscMax;
    this.minIlosc = minIlosc;
    this.maxIlosc = maxIlosc;
  }
}
