
export type Outcomes = 'not_found' | 'destroyed' | 'dead' | 'out';

export interface OutcomeReponse {
  outcome: Outcomes;
}
