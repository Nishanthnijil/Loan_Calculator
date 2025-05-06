import { useMemo } from "react";

export default function useEMICalculator(P, annualRate, years) {
  return useMemo(() => {
    const N = years * 12;
    const R = annualRate / 12 / 100;
    const emi = Math.round((P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1));

    const schedule = [];
    let balance = P;

    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principal = emi - interest;
      balance -= principal;
      schedule.push({
        month: i,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: Math.max(balance, 0).toFixed(2),
      });
    }

    return { emi, schedule };
  }, [P, annualRate, years]);
}