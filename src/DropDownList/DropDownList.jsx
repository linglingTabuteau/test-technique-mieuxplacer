import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DropDownList.css'


class DropDownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectValue: "",
      cursor: 0,
    }
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleSelectValue = this.handleSelectValue.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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

  handleKeyDown(e) {
    const { cursor } = this.state
    const { items } = this.props;
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }));
    } else if (e.keyCode === 40 && cursor < items.length - 1) {
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }));
    } else if (e.keyCode === 13) {
      let selectItem = items[cursor];
      this.handleSelectValue(selectItem);
    }
  }

  render() {
    let list = "";
    if (this.state.isOpen) {
      list = (<ul className="List">
        {
          this.props.items.map((item, index) =>
            <li
              key={item}
              onClick={() => this.handleSelectValue(item)}
              className={`Items ${this.state.cursor === index ? 'active' : ''}`}
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
      <div
        className="DropDownList"
        onClick={this.handleDropDown}
        onKeyDown={this.handleKeyDown}
        tabIndex={-1}>
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
  cursor: PropTypes.number,
}

export default DropDownList;