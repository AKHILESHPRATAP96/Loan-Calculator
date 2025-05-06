export const useEMICalculator = (P, annualRate, years) => {
    const R = annualRate / 12 / 100;
    const N = years * 12;
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return parseFloat(emi.toFixed(2));
  };
  