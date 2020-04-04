import React from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 10% auto;
`;

class React_Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <RingLoader
          css={override}
          size={200}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default React_Loader