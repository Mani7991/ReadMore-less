// Write your code here
import {useState} from 'react'
import {Heading, Paragraph, Image, Paragraph1, Button} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isRead, setisRead] = useState(false)

  const onToggle = () => {
    setisRead(prevRead => !prevRead)
  }

  return (
    <div>
      <Heading>React Hooks</Heading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <div>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
      </div>
      <Paragraph1>
        {reactHooksDescription.slice(0, 170)}
        {isRead && reactHooksDescription.slice(170)}
      </Paragraph1>
      <Button type="button" onClick={onToggle}>
        {isRead ? 'Read Less' : 'Read More'}
      </Button>
    </div>
  )
}
export default ReadMore
