import {toWords} from "./index";
test("return phrase sans car spec ", function() {
  const result = toWords("Il fait.pas,beau:.aujourd'hui!");
  expect(result).toStrictEqual(["Il", "fait", "pas", "beau", "aujourd'hui"]);
});