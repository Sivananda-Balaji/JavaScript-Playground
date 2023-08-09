const killer1 = {
  name: "John Wick",
  age: 40,
  kills: 564,
  gender: "Male",
  getKills: function () {
    console.log(`Total Kills: ${this.kills}`);
  },
};

killer1.getKills();

const killer2 = {
  name: "Amy",
  age: 36,
  kills: 698,
  gender: "Female",
};

killer2.getKills = killer1.getKills;

killer2.getKills();
