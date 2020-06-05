import React, { Component } from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import './DropdownButton.scss';
import remove from "../../assets/Icons/SVG/Icon-kebab-default.svg";

class DropdownButton extends Component {
    removeButton = (
        <Menu className="inventory__dropdown-menu">
            <MenuItem className="inventory__dropdown-menuItem" option="remove">Remove</MenuItem>
        </Menu>
    );

    render() {
        return (
            <div className="inventory__dropdown">
                <Dropdown overlay={this.removeButton} trigger={["click"]} animation="slide-up" placement="bottomRight">
                    <img
                        src={remove}
                        className={this.props.removeButtonClassName}
                        alt='click here to remove item'
                    />
                </Dropdown>
            </div>
        )  
    }
}

export default DropdownButton;