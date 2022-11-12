import {Component} from 'react'

import Emoji from '../emoji/index'

import './index.css'

class Feedback extends Component {
  render() {
    let k
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    console.log(loveEmojiUrl)
    console.log(emojis)

    return (
      <div className="bg-container">
        <div className="card">
          <div>
            <img src={loveEmojiUrl} alt="love emoji" className="image" />
            <h1>Thank You</h1>
          </div>
          <h1 className="main-heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="unorder">
            {emojis.map(pre => (
              <Emoji emojis={pre} key={pre.id} />
            ))}
          </ul>
          {k}
        </div>
      </div>
    )
  }
}

export default Feedback
