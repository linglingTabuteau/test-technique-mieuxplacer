import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    // get the value
    if (this.props.onSelectItem) {
      this.props.onSelectItem(value);
    }
  }

  render() {
    let list = "";
    if (this.state.isOpen) {
      list = (<ul className="List">
        {
          this.props.items.map(item =>
            <li
              key={item}
              onClick={() => this.handleSelectValue(item)}
              className="Items"
            >{item}</li>
          )
        }
      </ul>
      )
    }

    let label = this.props.placeholder;
    if (this.state.selectValue) {
      label = this.state.selectValue;
    }

    return (
      <div className="DropDownList" onClick={this.handleDropDown}>
        {label}
        <img src="/assets/drop-down.png" alt="dropdown" />
        {list}
      </div>
    )
  }

}

DropDownList.propTypes = {
  items: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  onSelectItem: PropTypes.func,
}

export default DropDownList;