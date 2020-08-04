import React, { Component } from 'react';
import './Profile.css'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.user.name,
            age: props.user.age,
            pet: props.user.pet,
        }
    }

    onFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    //we pass data as a argument, instead of deal with state inside of the function
    //pure function
    onProfileUpdate = (data) => {
        fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ formInput: data })
        }).then(res => {
            this.props.toggleModal();
            this.props.loadUser({ ...this.props.user, ...this.state })
        }).catch(err => console.log(err))

    }

    render() {
        const { user, toggleModal } = this.props;
        const { name, age, pet } = this.state;
        return (
            <div className="profile-modal">
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
                    <main className="pa4 black-80 w-80">

                        <img
                            src="http://tachyons.io/img/logo.jpg"
                            className="br-100 ba h3 w3 dib" alt="avatar" />
                        <h1>{name}</h1>
                        <h4>Images Submitted: {user.entries}</h4>
                        <p>Member since: {new Date(user.joined).toLocaleDateString()}</p>
                        <label className="mt2 fw6" htmlFor="user-name">Name:</label>
                        <input
                            onChange={this.onFormChange}
                            className="pa2 ba w-100"
                            placeholder={user.name}
                            type="text"
                            name="name"
                            id="name"
                        />
                        <label className="mt2 fw6" htmlFor="user-age">Age:</label>
                        <input
                            onChange={this.onFormChange}
                            className="pa2 ba w-100"
                            placeholder={user.age}
                            type="text"
                            name="age"
                            id="age"
                        />
                        <label className="mt2 fw6" htmlFor="pet">Pet:</label>
                        <input
                            onChange={this.onFormChange}
                            className="pa2 ba w-100"
                            placeholder={user.pet}
                            type="text"
                            name="pet"
                            id="pet"
                        />
                        <div className='mt4' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <button onClick={() => this.onProfileUpdate({ name, age, pet })} className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'>
                                Save
                        </button>
                            <button
                                className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
                                onClick={toggleModal}
                            >
                                Cancel
                        </button>

                        </div>

                    </main>
                    <div className='modal-close' onClick={toggleModal}>&times;</div>
                </article>
            </div>
        )
    }
}

// ({ isProfileOpen, toggleModal, user }) => {

// }

export default Profile;