import React, { Component } from 'react';
import './DropDownList.css'


class DropDownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectValue: "",
    }
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleSelectValue = this.handleSelectValue.bind(this);
  }

  handleDropDown = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  handleSelectValue = (value) => {
    this.setState({
      selectValue: value,
    })
  }

  render() {
    let list = "";
    if (this.state.isOpen) {
      list = (<ul>
        {
          this.props.items.map(item =>
            <li
              key={item}
              onClick={() => this.handleSelectValue(item)}
            >{item}</li>
          )
        }
      </ul>
      )
    }

    let label = "select your choices"
    if (this.state.selectValue) {
      label = this.state.selectValue;
    }

    return (
      <div className="DropDownList" onClick={this.handleDropDown}>
        {label}
        <i className="arrow down"></i>
        {list}
      </div>
    )
  }

}

export default DropDownList;