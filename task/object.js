const student = {
    name: "Arvind",
    age: 26,
    subjects: ["Math", "Physics", "Computer Science"],
    scores: {
      Math: 85,
      Physics: 78,
      ComputerScience: 92
    },
    isGraduated: false
  };
  
  student.name = "Ram";
  console.log("Updated student name:", student.name);
  
  student.subjects.push("Biology");
  console.log("Updated subjects:", student.subjects);
  
  const highestScore = Math.max(...Object.values(student.scores));
  console.log("Highest score:", highestScore);
  
  delete student.scores.Physics;
  console.log("Updated scores:", student.scores);
  
  console.log("Contains Biology:", student.subjects.includes("Biology"));