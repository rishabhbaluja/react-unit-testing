import React from "react";
import Header from "./components/Header/index";
import "./App.scss";
import Headline from "./components/Headline/index";
import Button from "./components/Button/index";
import ListItem from "./components/listItem/index";
import { connect } from "react-redux";
import { fetchPost } from "./actions";

const initialState = {
  hideBtn: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  fetch = () => {
    this.props.fetchPost();
    this.exampleFunction_hideBtn();
  };

  exampleFunction_hideBtn = () => {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn,
    });
  };

  exampleMethod_returnsAValue = (number)=>{
    return number+1;
  }

  render() {
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    };

    const { posts } = this.props;
    const { hideBtn } = this.state;
    const tempArr = [
      {
        fName: "test",
        lName: "afd",
        email: "abc@gmail.com",
        age: 24,
        onlineStatus: true,
      },
    ];
    return (
      <div className="App" data-test="appComponent">
        <Header></Header>
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          ></Headline>
          {!hideBtn && <Button {...configButton}></Button>}
          {posts.length > 0 ? (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = { title, desc: body };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          ) : null}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPost })(App);
