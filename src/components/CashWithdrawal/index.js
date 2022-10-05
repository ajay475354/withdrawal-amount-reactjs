import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdrawalAmount = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <div className="icon">
              <p>S</p>
            </div>
            <h1 className="name-heading">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <p className="balance-amount">
              {balance} <br />
              <span className="tail">in rupees</span>
            </p>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="paraa">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(each => (
              <DenominationItem
                eachValue={each}
                key={each.id}
                onWithDrawal={this.onWithdrawalAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
