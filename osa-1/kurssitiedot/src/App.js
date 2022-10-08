const Header = (props) => {
  return (
    <>
      <p>{props.course}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.text} {props.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const totalExercises = 'Number of exercises'

  return (
    <div>
      <Header course={course} />
      <Content text={part1} exercises={exercises1} />
      <Content text={part2} exercises={exercises2} />
      <Content text={part3} exercises={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App