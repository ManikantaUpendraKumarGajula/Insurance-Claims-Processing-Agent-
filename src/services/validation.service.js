export function validateFields(fields) {
  const missing = [];

  if (!fields.policyInformation.policyNumber)
    missing.push("Policy Number");

  if (!fields.policyInformation.policyHolderName)
    missing.push("Policyholder Name");

  if (!fields.incidentInformation.date)
    missing.push("Incident Date");

  if (!fields.assetDetails.estimatedDamage)
    missing.push("Estimated Damage");

  if (!fields.otherMandatoryFields.claimType)
    missing.push("Claim Type");

  return missing;
}
