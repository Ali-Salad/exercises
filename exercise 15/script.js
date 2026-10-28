const students = [
    { name: "abdi", age: 27, school: "mohamud harbi", city: "mogadishu" },
    { name: "jaamac", age: 17, school: "omar samatar", city: "gaalkacyo" },
    { name: "khalid", age: 18, school: "suldam ahmed nur", city: "adado" },
];

for (const student of students) {
    console.log(`Name: ${student.name}, Age: ${student.age}, School: ${student.school}, City: ${student.city}`);
}