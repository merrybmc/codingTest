function solution(hp) {
  let answer = [hp, 0];
  answer = commanderAnt(answer);

  return answer;
}

const commanderAnt = (hpCount) => {
  for (let i = 0; ; i++) {
    if (hpCount[0] >= 5) {
      hpCount[0] -= 5;
      hpCount[1]++;
    }

    if (hpCount[0] < 5) break;
  }

  soldierAnt(hpCount);

  return hpCount[1];
};

const soldierAnt = (hpCount) => {
  for (let i = 0; ; i++) {
    if (hpCount[0] >= 3) {
      hpCount[0] -= 3;
      hpCount[1]++;
    }

    if (hpCount[0] < 3) break;
  }

  scvAnt(hpCount);
};

const scvAnt = (hpCount) => {
  for (let i = 0; ; i++) {
    if (hpCount[0] >= 1) {
      hpCount[0] -= 1;
      hpCount[1]++;
    }

    if (hpCount[0] <= 0) break;
  }
};