import { connectRPC } from "./rpc.client.js";
import { loadVestingPlans } from "./vesting.registry.js";
import { releaseTokens } from "./release.engine.js";
import { validateClaim } from "./claim.validator.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Token Vesting Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const plans = loadVestingPlans();

const release = releaseTokens(plans[0]);
const validation = validateClaim(release);

generateReport(release, validation);
