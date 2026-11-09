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
export {};
