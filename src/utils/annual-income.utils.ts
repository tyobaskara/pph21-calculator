import { formatRupiah } from '.';

const taxSchemes = [{
  maxAmount: 50000000,
  percent: 0.05
}, {
  maxAmount: 250000000,
  percent: 0.15
}, {
  maxAmount: 500000000,
  percent: 0.25
}, {
  maxAmount: 9999999999999999999,
  percent: 0.3
}];

export const getTaxReliefAmount = (profile: string): number => {
  switch (profile) {
    case 'TK0':
      return 54000000;
    case 'K0':
      return 58500000;
    case 'K1':
      return 63000000;
    case 'K2':
      return 67500000;
    case 'K3':
      return 72000000;
    default:
      return 0;
  };
};

interface AnnualTaxIncome {
  totalTaxIncome?: number;
  narratives?: string[];
}

export const calculateAnnualTaxIncome = (
  annualIncome: number, 
  taxReliefAmount: number, 
  taxableIncome: number): AnnualTaxIncome => {
    let annualTaxableIncome = taxableIncome;
    let totalTaxIncome = 0;
    let index = 0;
    let narativeHeader = `
      ${formatRupiah(annualIncome.toString())} - 
      ${formatRupiah(taxReliefAmount.toString())} = 
      ${formatRupiah(annualTaxableIncome.toString())}`;
    let narratives = [narativeHeader];
    let narativeBody = '';

    do {
      const { maxAmount, percent } = taxSchemes[index];
      
      if (annualTaxableIncome > maxAmount) {
        const taxIncome = annualTaxableIncome * percent;
        narativeBody += `(${formatRupiah(maxAmount.toString())} * ${percent*100}%) + `;
        
        totalTaxIncome += taxIncome;
        annualTaxableIncome -= maxAmount;
        index += 1;
      }
      else {
        const taxIncome = annualTaxableIncome * percent;
        
        totalTaxIncome += taxIncome;
        narativeBody += `(${formatRupiah(annualTaxableIncome.toString())} 
          * ${percent*100}%) = ${formatRupiah(totalTaxIncome.toString())}`;
        annualTaxableIncome = 0;
      }
    } while (annualTaxableIncome > 0);

    narratives.push(narativeBody);

    return {
      totalTaxIncome,
      narratives
    };
};

export const getAnnualTaxIncome = (value: string, profile: string): AnnualTaxIncome => {
  const taxReliefAmount = getTaxReliefAmount(profile);
  const annualIncome = parseInt(value);
  const annualTaxableIncome = annualIncome - taxReliefAmount;
  const isTaxed = annualTaxableIncome > 0;

  if (isTaxed) {
    return calculateAnnualTaxIncome(annualIncome, taxReliefAmount, annualTaxableIncome);
  }

  return {};
}