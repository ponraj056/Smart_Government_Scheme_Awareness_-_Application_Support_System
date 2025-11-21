import { Scheme } from '../types';
import { UserProfile } from '../types/profile';

export const getMatchedSchemes = (schemes: Scheme[], profile: UserProfile) => {
  const today = new Date();

  return schemes.filter((scheme) => {
    if (!scheme.isActive) return false;
    if (scheme.deadline && new Date(scheme.deadline) < today) return false;

    // ✅ Age range
    if (scheme.minAge && profile.age < scheme.minAge) return false;
    if (scheme.maxAge && profile.age > scheme.maxAge) return false;

    // ✅ Income check
    if (scheme.incomeLimit && profile.income > scheme.incomeLimit) return false;

    // ✅ Gender eligibility
    if (
      scheme.genderEligibility &&
      !scheme.genderEligibility.includes(profile.gender)
    )
      return false;

    // ✅ Category check
    if (
      scheme.categoryEligibility &&
      !scheme.categoryEligibility.includes(profile.category)
    )
      return false;

    // ✅ State eligibility
    if (
      scheme.targetStates &&
      !scheme.targetStates.includes('All India') &&
      !scheme.targetStates.includes(profile.state)
    )
      return false;

    return true;
  });
};
