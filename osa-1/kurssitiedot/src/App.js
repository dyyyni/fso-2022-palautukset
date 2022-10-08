const Header = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.course}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part content={props.part1} exercises={props.exercises1} />
      <Part content={props.part2} exercises={props.exercises2} />
      <Part content={props.part3} exercises={props.exercises3} />
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

const Part = (props) => {
  return (
    <>
      <p>{props.content} {props.exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 7
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1.name} exercises1={part1.exercises}
        part2={part2.name} exercises2={part2.exercises}
        part3={part3.name} exercises3={part3.exercises}
      />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App