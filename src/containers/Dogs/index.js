import React from "react";
import styled from "styled-components";
import { Dog } from "../../components";

class Dogs extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      dogVisible: false,
    }
  }

  render() {
    let dogs = [
      { name: "Đần", breed: "Golden", age: 1 },
      { name: "Ngáo", breed: "Huskey", age: 1 },
      { name: "Mông to", breed: "Corgi", age: 1 },
    ];

    return (
      <Wrapper>
        <button 
          onClick={() => this.setState( prev =>  ({dogVisible: !prev.dogVisible}))}
        > Show Dog</button>
        {this.state.dogVisible && <Dog data={dogs} />}
      </Wrapper>
    );
  }
}

export default Dogs;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
