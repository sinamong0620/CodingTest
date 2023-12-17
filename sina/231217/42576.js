function solution(participants, completions) {
  let map = new Map();

  for (let participant of participants) {
    if (!map.get(participant)) {
      map.set(participant, 1);
    } else {
      map.set(participant, map.get(participant) + 1);
    }
  }

  for (let completion of completions) {
    if (map.get(completion)) {
      map.set(completion, map.get(completion) - 1);
    }
  }

  for (let parcitipant of participants) {
    if (map.get(parcitipant) && map.get(parcitipant) >= 1) {
      return parcitipant;
    }
  }
}
