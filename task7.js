function averageSalary(salaries) {
  let values = Object.values(salaries);
  if (values.length === 0) return 0;
  let sum = values.reduce((acc, salary) => acc + salary, 0);
  return sum / values.length;
}

