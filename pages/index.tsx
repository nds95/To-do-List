import type { NextPage } from 'next'
import Block from '../src/Components/Block';

const Home: NextPage = () => {
  const text: any = ['Clean room', 'Buy book'];
  return (
    <Block text={text} />
  )
}

export default Home