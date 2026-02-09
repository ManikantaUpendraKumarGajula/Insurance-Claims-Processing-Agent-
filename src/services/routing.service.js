export function routeClaim(fields, missing) {
  if (missing.length > 0) {
    return {
      recommendedRoute: "Manual Review",
      reasoning: "Mandatory fields are missing.",
    };
  }

  if (/fraud|staged|inconsistent/i.test(fields.description || "")) {
    return {
      recommendedRoute: "Investigation Flag",
      reasoning: "Suspicious keywords detected in description.",
    };
  }

  if (fields.claimType?.toLowerCase() === "injury") {
    return {
      recommendedRoute: "Specialist Queue",
      reasoning: "Injury claims require specialist handling.",
    };
  }

  if (fields.estimatedDamage < 25000) {
    return {
      recommendedRoute: "Fast-track",
      reasoning: "Low estimated damage.",
    };
  }

  return {
    recommendedRoute: "Standard Processing",
    reasoning: "Default routing applied.",
  };
}
