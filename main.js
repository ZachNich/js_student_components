const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

createStudentHeaderPassing = (name) => `<h1 class='xx-large passing'>${name}</h1>`
createStudentHeaderFailing = (name) => `<h1 class='failing'>${name}</h1>`
createStudentSection = (subject) => `<section class='border dashed section--padded'>${subject}</section>`
createStudentAside = (info) => `<aside class='pushRight'>${info}</aside>`

const createStudentComponent = (student) => {
    if (student.score >= 60) {
        return `${createStudentHeaderPassing(student.name)}${createStudentSection(student.subject)}${createStudentAside(student.info)}`
    } else {
        return `${createStudentHeaderFailing(student.name)}${createStudentSection(student.subject)}${createStudentAside(student.info)}`
    }
}

for (const student of students) {
    let studentComponent = createStudentComponent(student);
    document.querySelector('#container').innerHTML += studentComponent;
}