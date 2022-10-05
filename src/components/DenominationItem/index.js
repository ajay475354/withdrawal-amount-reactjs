import './index.css'

const DenominationItem = props => {
  const {eachValue, onWithDrawal} = props
  const {value} = eachValue

  const onDeleteTodo = () => {
    onWithDrawal(value)
  }

  return (
    <li className="button-container">
      <button type="button" className="button" onClick={onDeleteTodo}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
