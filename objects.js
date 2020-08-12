 const team = {
     0: {
         name: "Carlos",
         edad: 35
     },
     1: {
         name: "Felipe",
         edad: 35,
     },
     2: {
         name: "Mali",
         edad: 23,
     },
 }

 console.log(team[1].name)
 console.log(Object.keys(team));
 const teamKeys = Object.keys(team)
 for (let i = 0; i < teamKeys.length; i++) {
     const currentKey = teamKeys[i];
     console.log(team[currentKey].name);
 }

 console.log("Values ----->", Object.values(team));
 const teamValues = Object.values(team);

 teamValues.forEach((element) => {
     console.log("miembro del team ------>", element.name)
 });

 //  Entries

 console.log("Entries ---->", Object.entries(team));

 const teamEntries = Object.entries(team);

 for (const entrie of teamEntries) {
     const [numMember, member] = entrie;
     console.log(`${numMember}, ${member.name}`);
 }