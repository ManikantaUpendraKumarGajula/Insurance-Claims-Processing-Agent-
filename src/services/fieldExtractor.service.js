export function extractFields(text) {
  return {
    policyInformation: {
      policyNumber: /POLICY NUMBER[:\s]*([A-Z0-9-]+)/i.exec(text)?.[1],
      policyHolderName:
        /NAME OF INSURED.*?:\s*([A-Z\s]+)/i.exec(text)?.[1]?.trim(),
      effectiveDates:
        /EFFECTIVE DATES?[:\s]*([A-Z0-9\s-]+)/i.exec(text)?.[1],
    },

    incidentInformation: {
      date: /DATE OF LOSS[:\s]*([0-9/]+)/i.exec(text)?.[1],
      time: /(AM|PM)/i.exec(text)?.[1],
      location:
        /LOCATION OF LOSS([\s\S]*?)DESCRIPTION/i.exec(text)?.[1],
      description:
        /DESCRIPTION OF ACCIDENT([\s\S]*?)LOSS/i.exec(text)?.[1],
    },

    involvedParties: {
      claimant:
        /DRIVER'S NAME AND ADDRESS([\s\S]*?)OWNER/i.exec(text)?.[1],
      thirdParties:
        /OTHER VEHICLE \/ PROPERTY DAMAGED([\s\S]*?)REMARKS/i.exec(text)?.[1],
      contactDetails:
        /PHONE # CELLHOME BUSPRIMARY([\s\S]*?)EMAIL/i.exec(text)?.[1],
    },

    assetDetails: {
      assetType: /TYPE[:\s]*([A-Z]+)/i.exec(text)?.[1],
      assetId: /V\.I\.N\.[:\s]*([A-Z0-9]+)/i.exec(text)?.[1],
      estimatedDamage:
        Number(/ESTIMATE AMOUNT[:\s]*\$?(\d+)/i.exec(text)?.[1]),
    },

    otherMandatoryFields: {
      claimType:
        /LINE OF BUSINESS[:\s]*(.*)/i.exec(text)?.[1] || "auto",
      attachments: "FNOL Document",
      initialEstimate:
        Number(/ESTIMATE AMOUNT[:\s]*\$?(\d+)/i.exec(text)?.[1]),
    },
  };
}
