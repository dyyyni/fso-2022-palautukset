const Header = (props) => {
  return (
    <>
      <h2>{props.course.name}</h2>
    </>
  );
};

const Course = ({ course }) => {
  const initialValue = 0;
  const exercises = course.parts
    .map((part) => part.exercises)
    .reduce(
      (prevValue, currentValue) => prevValue + currentValue,
      initialValue
    );
  return (
    <div>
      <Header course={course} />
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p>Total of {exercises} exercises</p>
    </div>
  );
};

export default Course;
