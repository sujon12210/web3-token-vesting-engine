export function loadVestingPlans() {
  console.log("Loading vesting plans...");

  return [
    {
      beneficiary: "0xUSER001",
      totalTokens: 1000,
      released: 200,
      cliffDays: 30
    }
  ];
}
