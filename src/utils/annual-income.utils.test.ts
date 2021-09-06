import { getTaxReliefAmount, getAnnualTaxIncome } from './annual-income.utils';

describe('annual income utils test', () => {
  describe('getTaxReliefAmount', () => {
    it('should return correct amount for TK0', () => {
      const result = getTaxReliefAmount('TK0');
      expect(result).toEqual(54000000);
    });
    it('should return correct amount for K0', () => {
      const result = getTaxReliefAmount('K0');
      expect(result).toEqual(58500000);
    });
    it('should return correct amount for K1', () => {
      const result = getTaxReliefAmount('K1');
      expect(result).toEqual(63000000);
    });
    it('should return correct amount for K2', () => {
      const result = getTaxReliefAmount('K2');
      expect(result).toEqual(67500000);
    });
    it('should return correct amount for K3', () => {
      const result = getTaxReliefAmount('K3');
      expect(result).toEqual(72000000);
    });
    it('should return 0 for default', () => {
      const result = getTaxReliefAmount('');
      expect(result).toEqual(0);
    });
  });

  describe('getAnnualTaxIncome', () => {
    it('should return Annual Tax Income Amount if isTaxed true', () => {
      const value = '155000000';
      const profile = 'TK0';

      const result = getAnnualTaxIncome(value, profile);

      expect(result).toEqual({ 
        totalTaxIncome: 12700000,
        narratives:
         [ '\n      Rp. 155.000.000 - \n      Rp. 54.000.000 = \n      Rp. 101.000.000',
           '(Rp. 50.000.000 * 5%) + (Rp. 51.000.000 \n          * 15%) = Rp. 12.700.000' ] 
      });
    });

    it('should return Annual Tax Income Amount for TK0', () => {
      const value = '50000000';
      const profile = 'TK0';

      const result = getAnnualTaxIncome(value, profile);

      expect(result.totalTaxIncome).toBeFalsy();
    });
  });
});