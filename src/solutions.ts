const multiplyValue = (value: number, multiplier?: number): number => {
  return value * (multiplier ?? 2);
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value === true ? "Active" : "Inactive";
  }
};
const formatCoordinate = (item: readonly [number, number, string]): string => {
  return `Location: ${item[2]} (${item[0]}, ${item[1]})`;
};
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];
  arrays.forEach((arr) => {
    arr.forEach((element) => {
      result.push(element);
    });
  });
  return result;
};
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K) => {
  return items.map((item) => item[key]);
};
