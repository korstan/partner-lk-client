import React, { Component } from 'react';
import Axios from 'axios';
import ProfileEditForm from 'components/Profile/EditForm/EditForm';
import ProfileTabsContainer from 'components/Profile/Tabs/Container';
import ProfileTabsElement from 'components/Profile/Tabs/Element';

const URL = 'http://localhost:4242/api/profiles';

export default class ProfileEditFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoIsLoading: true,
      info: {},
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    Axios.get(URL)
      .then(res => {
        this.setState({ info: res.data });
      })
      .then(() => this.setState({ infoIsLoading: false }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(previousState => ({
      info: {
        ...previousState.info,
        [name]: value,
      },
    }));
  }

  render() {
    return (
      <>
        <ProfileTabsContainer>
          <ProfileTabsElement
            title="Cохранить"
            onClick={this.props.routeToProfile}
          />
          <ProfileTabsElement
            title="Отмена"
            onClick={this.props.routeToProfile}
          />
        </ProfileTabsContainer>
        {this.state.infoIsLoading ? (
          <div>Loading...</div>
        ) : (
          <ProfileEditForm
            info={this.state.info}
            handleChange={this.handleChange}
          />
        )}
      </>
    );
  }
}
