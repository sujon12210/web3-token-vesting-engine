export function releaseTokens(plan) {
  console.log("Releasing tokens for:", plan.beneficiary);

  const releasable = plan.totalTokens - plan.released;

  return {
    beneficiary: plan.beneficiary,
    releasedNow: releasable,
    totalReleased: plan.totalTokens
  };
}
