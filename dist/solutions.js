const multiplyValue = (value, multiplier) => {
    return value * (multiplier ?? 2);
};
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLocaleLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value === true ? "Active" : "Inactive";
    }
};
const formatCoordinate = (item) => {
    return `Location: ${item[2]} (${item[0]}, ${item[1]})`;
};
const concatenateArrays = (...arrays) => {
    const result = [];
    arrays.forEach((arr) => {
        arr.forEach((element) => {
            result.push(element);
        });
    });
    return result;
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished === true && course.students >= minStudents);
};
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = async (age) => {
    const myPromise = new Promise((resolve, rejects) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            rejects(new Error("Access Denied: Must be 18 or older"));
        }
    });
    try {
        const res = await myPromise;
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
    return myPromise;
};
export {};
