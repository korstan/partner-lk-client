import React, { Component } from 'react';
import Axios from 'axios';
import ProfileTabsContainer from 'components/Profile/Tabs/Container';
import ProfileTabsElement from 'components/Profile/Tabs/Element';
import ProfileReadForm from 'components/Profile/ReadForm/ReadForm';

const URL = 'http://localhost:4242/api/profiles';

export default class ProfileReadFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoIsLoading: true,
      info: {},
    };
  }

  componentDidMount() {
    Axios.get(URL)
      .then(res => {
        this.setState({ info: res.data });
      })
      .then(() => this.setState({ infoIsLoading: false }));
  }

  render() {
    return (
      <>
        <ProfileTabsContainer>
          <ProfileTabsElement
            title="Редактировать"
            onClick={this.props.routeToProfileEdit}
          />
        </ProfileTabsContainer>
        {this.state.infoIsLoading ? (
          <div>Loading...</div>
        ) : (
          <ProfileReadForm info={this.state.info} />
        )}
      </>
    );
  }
}
