/**
 * Problem 649: Dota2 Senate
 *
 * Version: Original
 *
 * Constraints
 *   1. 1 <= senate.length <= 10^4
 *   2. senate[i] is either 'R' or 'D'.
 */

// TODO: Enhance code cleanliness.
// TODO: Determine algorithmic paradigm and techniques.
// TODO: Finish complexity analysis.

/**
 * Function: guessWinningParty
 * Algorithmic Paradigm: ???
 * Programming Paradigm: ???
 * Complexity:
 *   - Time: ???.
 *   - Space: ???.
 */
function predictPartyVictory(senate: string): string {
  let activeP1Members = 0;
  let activeP2Members = 0;
  let p1RoundVotes = 0;
  let p2RoundVotes = 0;
  let votingMembers: Set<number> = new Set();
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') {
      if (p2RoundVotes > 0) p2RoundVotes -= 1;
      else {
        votingMembers.add(i);
        p1RoundVotes += 1;
        activeP1Members += 1;
      }
    } else if (p1RoundVotes > 0) p1RoundVotes -= 1;
    else {
      votingMembers.add(i);
      p2RoundVotes += 1;
      activeP2Members += 1;
    }
  }
  while (
    !(activeP1Members - p2RoundVotes >= 2 * activeP2Members) &&
    !(activeP2Members - p1RoundVotes >= 2 * activeP1Members)
  ) {
    const retainedVoters: Set<number> = new Set();
    for (const member of votingMembers) {
      if (senate[member] === 'R') {
        if (p2RoundVotes > 0) p2RoundVotes -= 1;
        else {
          retainedVoters.add(member);
          p1RoundVotes += 1;
          activeP1Members += 1;
        }
      } else if (p1RoundVotes > 0) p1RoundVotes -= 1;
      else {
        retainedVoters.add(member);
        p2RoundVotes += 1;
        activeP2Members += 1;
      }
    }
    votingMembers = retainedVoters;
  }
  return activeP1Members - p2RoundVotes >= 2 * activeP2Members ? 'Radiant' : 'Dire';
}

export {};
