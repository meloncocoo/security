export class Domain {
  constructor(
    public id?: number,
    public name?: string,
    public registrar?: string,
    public dnsServer?: string,
    public alexaRank?: string
  ) { }
}
