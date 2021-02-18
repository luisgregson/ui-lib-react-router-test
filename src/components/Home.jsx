import { Pane, Heading, Paragraph } from 'evergreen-ui'

const Home = () => {
  return (
    <Pane display="flex" flexDirection="column">
      <Heading flex={1} alignSelf="center" size={800} marginBottom={8}>Home</Heading>
      <Paragraph flex={1} alignSelf="center">This is the homepage.</Paragraph>
    </Pane>
  )
}

export default Home;
