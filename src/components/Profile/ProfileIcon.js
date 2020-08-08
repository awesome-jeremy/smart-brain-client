import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import avatar from '../../assets/images/avatar.png'


const ProfileIcon = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    return (
        <div className="pa4 tc">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                >
                    <img
                        // src="http://tachyons.io/img/logo.jpg"
                        src={avatar}
                        className="br-100 ba h3 w3 dib" alt="avatar" />
                </DropdownToggle>

                <DropdownMenu
                    right
                    className="b--transparent shadow-5 mt-3"
                >

                    <DropdownItem onClick={props.toggleModal}>View Profile</DropdownItem>
                    <DropdownItem onClick={() => props.onRouteChange('signout')}>Sign Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>

    );
}

export default ProfileIcon;