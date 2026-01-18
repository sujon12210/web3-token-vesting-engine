export function validateClaim(release) {
  return {
    beneficiary: release.beneficiary,
    valid: release.releasedNow > 0
  };
}
