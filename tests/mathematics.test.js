const sum = require("../mathematics");

describe("sum", () => {
   it("is defined", () => {
      expect(sum).toBeDefined();
   });

   it("1 + 1 = 2", () => {
      expect(sum(1, 1)).toEqual(2);
   });

   //vérifie un potentiel faux résultat positif
   it("1 + 0 != 2", () => {
      expect(sum(1, 0)).not.toEqual(2);
   });

   it("throw error if a or b are not numbers", () => {
      expect(() => sum("a", "b")).toThrow("a must be a number");
   });

   it("throw error if a or b are not numbers", () => {
      expect(() => sum(1, "b")).toThrow("b must be a number");
   });

   it("throw error if b is null", () => {
      expect(() => sum(1, null)).toThrow("b must be a number");
   });

   it("throw error if b is undefined", () => {
      expect(() => sum(1, undefined)).toThrow("b must be a number");
   });
});
