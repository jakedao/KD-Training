import React, {createRef} from "react";
import styled from "styled-components";
import { Dog } from "../../components";
import BarkContext from '../../context/bark'

class Dogs extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      dogVisible: false,
      isBarked : false,
      dogs : [
      { name: "Đần", breed: "Golden", age: 1 },
      { name: "Ngáo", breed: "Huskey", age: 1 },
      { name: "Mông to", breed: "Corgi", age: 1 },
      ],
    }

  }

  render() {
    let dogs = [
      { name: "Đần", breed: "Golden", age: 1 },
      { name: "Ngáo", breed: "Huskey", age: 1 },
      { name: "Mông to", breed: "Corgi", age: 1 },
    ];
    
    
    return (
      <BarkContext.Provider value={{bark: this.state.isBarked}} >
        <Wrapper>
          <button  onClick={() => this.setState( prev =>  ({dogVisible: !prev.dogVisible}))}
          > Show Dog</button>
          <button onClick={() => this.setState( prev =>  ({isBarked: !prev.isBarked}))}
          > Go Bark !!!</button>
          {this.state.dogVisible && <Dog data={dogs} />}
        </Wrapper>
      </BarkContext.Provider>
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
