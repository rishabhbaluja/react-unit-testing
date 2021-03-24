import React from "react";
import Header from "./components/Header/index";
import "./App.scss";
import Headline from "./components/Headline/index";
import Button from "./components/Button/index";
import ListItem from "./components/listItem/index";
import { connect } from "react-redux";
import { fetchPost } from "./actions";

class App extends React.Component {
  fetch = () => {
    this.props.fetchPost();
  };

  render() {
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    };

    const { posts } = this.props;

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
      <div className="App">
        <Header></Header>
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          ></Headline>
          <Button {...configButton}></Button>
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
