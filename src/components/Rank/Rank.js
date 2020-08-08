import React, { Component } from 'react';

class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji_rank: ''
    }
  }

  componentDidMount() {
    this.getRankEmoji()
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.entries === this.props.entries) {
      return
    }
    this.getRankEmoji()
  }

  getRankEmoji = () => {
    const { entries } = this.props;
    fetch(`https://cecietuom8.execute-api.ap-southeast-2.amazonaws.com/prod/rank?rank=${entries}`)
      .then(res => res.json())
      .then(data => {
        if (data.emoji_rank) {
          this.setState({ emoji_rank: data.emoji_rank })
        }
      })
      .catch(err => console.log(err))
  }



  render() {
    const { name, entries } = this.props;
    return (
      <div>
        <div className='white f3'>
          {`${name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {entries}
        </div>
        <div className='white f3'>
          Rank Badge: {this.state.emoji_rank}
        </div>

      </div>

    )
  }
}

export default Rank;