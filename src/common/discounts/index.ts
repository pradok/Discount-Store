import { DiscountRuleEngine } from './DiscountRuleEngine';
import { discountRulesFactory } from './discountRulesFactory';

const discountRulesEngine = new DiscountRuleEngine();
const rules = discountRulesFactory();
rules.forEach(rule => discountRulesEngine.registerRule(rule));

export { discountRulesEngine };