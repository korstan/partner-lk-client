import React, { Component } from 'react';
import ProfileService from 'services/profile';
import ProfileTabsContainer from 'components/Profile/Tabs/Container';
import ProfileTabsElement from 'components/Profile/Tabs/Element';
import ProfileReadForm from 'components/Profile/ReadForm/ReadForm';

export default class ProfileReadFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoIsLoading: true,
      info: {},
    };
  }

  componentDidMount() {
    ProfileService.getProfile()
      .then((data) => {
        this.setState({ info: data });
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
