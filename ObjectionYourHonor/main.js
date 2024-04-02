class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Prosecutor extends Person{
    constructor(name, age){
        super(name, age);
    }
    prosecute(defendant, caseTitle){
        defendant.case = caseTitle;
    }
}

class Defendant extends Person {
    constructor(name, age){
        super(name, age);
        this.case
    }
}

class Case {
    constructor(title, years, months, days, minAge, maxAge){
        this.title = title;
        this.ageLimit = {
            'min' : minAge,
            'max' : maxAge
        };
        this.imprisonmentTerm = {
            'years' : years,
            'months' : months,
            'days' : days
        }
        this.verdict;
    }
    computeReleaseDate(){
        const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = 24 * 60 * 60 * 1000;
        let numDays = (this.imprisonmentTerm.years * 365 * day) + (this.imprisonmentTerm.months * 31 * day) + (this.imprisonmentTerm.days * day); 
        let dateRelease = new Date(Date.now() + numDays);
        return `${dateRelease.getDay()} ${monthName[dateRelease.getMonth()]} ${dateRelease.getFullYear()}`;
    }
}

class Trialcourt {
    initiateTrial(defendant, prosecutor){

        if(defendant.age > defendant.case.ageLimit.min && defendant.age < defendant.case.ageLimit.max){
            defendant.verdict = "GUILTY";
        }
        else{
            defendant.verdict = "NOT GUILTY";
        }
        console.log("Name: ", defendant.name);
        console.log("Age: ", defendant.age, " years old");
        console.log("Case Title: ", defendant.case.title);
        console.log("Filed by: ", prosecutor.name);
        console.log("Verdict: ", defendant.verdict);
        (defendant.verdict == "GUILTY") ? console.log("Release Date: ", defendant.case.computeReleaseDate()) : console.log("");
    }
}

let case1 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor = new Prosecutor ("John", 30);
//let defendant1 = new Defendant ("Girlie", 5);
let defendant2 = new Defendant ("Onel", 25);
prosecutor.prosecute(defendant2, case1);

let TrialCourt = new Trialcourt();
TrialCourt.initiateTrial(defendant2, prosecutor);
