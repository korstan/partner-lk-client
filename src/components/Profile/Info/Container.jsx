import React, { Component } from 'react';
import Axios from 'axios';

const URL = 'http://localhost:4242/api/profiles';

export default class Container extends Component {
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
        {this.state.infoIsLoading ? (
          <div>Loading...</div>
        ) : (
          this.props.form(this.state.info)
        )}
      </>
    );
  }
}
