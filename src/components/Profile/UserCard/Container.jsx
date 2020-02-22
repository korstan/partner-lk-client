import React, { Component } from 'react';
import ProfileService from 'services/profile';
import ProfileUserCard from 'components/Profile/UserCard/UserCard';

export default class ProfileUserCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoIsLoading: true,
      info: { lastname: '', firstname: '', patronymic: '', email: '' },
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
    const { lastname, firstname, patronymic, email } = this.state.info;
    return (
      <ProfileUserCard
        lastname={lastname}
        firstname={firstname}
        patronymic={patronymic}
        email={email}
      />
    );
  }
}
