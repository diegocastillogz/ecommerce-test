import { setCurrencyFormat } from "../";

describe("setCurrencyFormat tests", () => {
  test("should return currency format correctly", () => {
    expect(setCurrencyFormat(2000)).toEqual("$ 2.000");
    expect(setCurrencyFormat(3500)).toEqual("$ 3.500");
    expect(setCurrencyFormat(44405)).toEqual("$ 44.405");
    expect(setCurrencyFormat(980407)).toEqual("$ 980.407");
    expect(setCurrencyFormat(1960402)).toEqual("$ 1.960.402");
    expect(setCurrencyFormat(21960402)).toEqual("$ 21.960.402");
    expect(setCurrencyFormat(821960402)).toEqual("$ 821.960.402");
    expect(setCurrencyFormat(1821960402)).toEqual("$ 1.821.960.402");
  });
});
