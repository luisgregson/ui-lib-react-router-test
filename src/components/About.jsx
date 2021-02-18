import { Pane, Heading, Paragraph } from 'evergreen-ui'

const About = () => {
  return (
    <Pane display="flex" flexDirection="column">
      <Heading flex={1} alignSelf="center" size={800} marginBottom={8}>About</Heading>
      <Pane flex={1} alignSelf="center" maxWidth={600}>
        <Paragraph>Hi, i'm Luis. This my site, built with create-react-app, react-router, and evergreen-ui.</Paragraph>
        <Paragraph>I like to built websites, mobile apps, and APIs.</Paragraph>
      </Pane>
    </Pane>
  )
}

export default About;
