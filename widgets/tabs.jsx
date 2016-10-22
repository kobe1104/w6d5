import React from 'react';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({selectedPane: num});
  }

  makeHeaders() {
    return this.props.panes.map ((el, i) => {
      return <Header key={i} title={el.title} index={i} selectTab={this.selectTab}></Header>
    });
  }

  render() {
    // iterate over tabs and for each tab make a list element
    // store this into a tabs variable
    // put tabs variable into a <ul>
    return (
      <div className="wholeTab">
        <h1>Tabs</h1>
        <div className="tabs">
          {this.makeHeaders()}
        </div>
        <article>{this.props.panes[this.state.selectedPane].content}</article>
      </div>
    );
  }

}


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        onClick = {this.props.selectTab.bind(null, this.props.index)}
        >{this.props.title}
      </div>

    );
  }

}

export default Tabs;
