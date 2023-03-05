function Numberlist(props) {
  const numbers = props.numbers;

  const numberList = numbers.map((number,i) => <li key={i}>{number}</li>);

  return(
    <ul>{numberList}</ul>
  )
}

export default Numberlist;
