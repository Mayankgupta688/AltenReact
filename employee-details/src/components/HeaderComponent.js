export default function HeaderComponent(props) {
  function getData() {
    return 20;
  } 

  return (
    <div>
      <h1>This is Header for {props.userName}....</h1>
      <h2>The result from Function is: {getData()}</h2>
    </div>
  )
}