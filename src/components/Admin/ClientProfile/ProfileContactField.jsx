import React from 'react';

class ProfileContactField extends React.Component {
  state = {
    editMode: false,
    contactFieldValue: this.props.contacts[this.props.contact],
    contactTitle: this.props.contact
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contactFieldValue !== this.props.contactFieldValue) {
      this.setState({
        contactFieldValue: this.props.contactFieldValue,
      });
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    
    this.props.updateContactFieldThunkCreator(
      this.props.clientId,
      this.state.contactTitle,
      this.state.contactFieldValue
    );
  }

  onStatusChange = (e) => {
    this.setState({
      contactFieldValue: e.currentTarget.value,
    });
  }

  render() {
    return (
      <li>
        <span>{this.state.contactTitle}:&nbsp;</span>
        {!this.state.editMode &&
          <span onDoubleClick={this.activateEditMode}>
            {this.props.contacts[this.state.contactTitle] || "-------"}
          </span>
        }

        {this.state.editMode &&
          <div>
            <input
              onChange={this.onStatusChange}
              value={this.state.contactFieldValue}
              autoFocus={true}
              onBlur={this.deactivateEditMode} />
          </div>
        }
      </li>
    );
  }
}

export default ProfileContactField;
