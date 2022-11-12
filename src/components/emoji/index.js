import './index.css'

const Emoji = props => {
  const {emojis, key} = props
  const {name, imageUrl} = emojis
  const change = () => {}
  return (
    <li type="none">
      <img src={imageUrl} className="image" alt={name} onClick={change} />
      <p>{name}</p>
    </li>
  )
}
export default Emoji
