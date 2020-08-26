import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DropDownList.css'

interface MyProps {
  items: string[],
  placeholder: string,
  onSelectItem: (value: string) => void
}

type MyState = {
  isOpen: boolean,
  selectValue: string,
  cursor: number,
  isUseKeyBoard: boolean,
}

// <T, U> => Generics define types in Component
class DropDownList extends Component<MyProps, MyState>{
  // constructor(props) {
  //   super(props);
  state = {
    isOpen: false,
    selectValue: "",
    cursor: -1,
    isUseKeyBoard: false,
  }
  // }

  handleDropDown = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  handleSelectValue = (value: string) => {
    this.setState({
      selectValue: value,
    })
    // get the value
    if (this.props.onSelectItem) {
      this.props.onSelectItem(value);
    }
  }

  handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { cursor } = this.state
    const { items } = this.props;
    // update state to use keyboard
    this.setState({
      isUseKeyBoard: true
    });
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

  handleMouseOver = () => {
    this.setState({
      cursor: -1,
      isUseKeyBoard: false
    });
  }

  render() {
    const { placeholder } = this.props;
    const { isUseKeyBoard, cursor, selectValue } = this.state;
    let list: JSX.Element|undefined;
    if (this.state.isOpen) {
      list = (<ul className="List">
        {
          this.props.items.map((item, index) =>
            <li
              key={item}
              onClick={() => this.handleSelectValue(item)}
              // combine several className with space
              className={`Items ${isUseKeyBoard ? '' : 'item-hover'} ${cursor === index ? 'active' : ''}`}
            >{item}</li>
          )
        }
      </ul>
      )
    }

    let label = placeholder;
    if (selectValue) {
      label = selectValue;
    }

    return (
      <div
        className="DropDownList"
        onClick={this.handleDropDown}
        onKeyDown={this.handleKeyDown}
        // to use event onKeyDown in div
        tabIndex={-1}
        onMouseOver={this.handleMouseOver}
      >
        {label}
        <img src="/assets/drop-down.png" alt="dropdown" />
        {list}
      </div>
    )
  }

}

// DropDownList.propTypes = {
//   items: PropTypes.array.isRequired,
//   placeholder: PropTypes.string,
//   onSelectItem: PropTypes.func,
// }

export default DropDownList;