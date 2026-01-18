export function generateReport(release, validation) {
  console.log("----- Vesting Report -----");
  console.log("Beneficiary:", release.beneficiary);
  console.log("Released Now:", release.releasedNow);
  console.log("Total Released:", release.totalReleased);
  console.log("Claim Valid:", validation.valid);
  console.log("---------------------------");
}
