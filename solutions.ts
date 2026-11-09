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
class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  const myPromise: Promise<string> = new Promise((resolve, rejects) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      rejects(new Error("Access Denied: Must be 18 or older"));
    }
  });

  try {
    const res = await myPromise;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  return myPromise;
};
