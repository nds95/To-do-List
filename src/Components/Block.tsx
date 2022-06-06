import React, { useState } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import CheckBox from './CheckBox';

const ToDoBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px;
`;

interface Props {
  text: [];
}

const Block: React.FC<Props> = ({ text }) => {
  const renderCheckbox = (text: string, index: number) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const onChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!isChecked);
    }

    return <CheckBox key={index} text={text} index={index} type='checkbox' id='checkBox' onChange={onChange} isChecked={isChecked}/>
  }

  return (
    <ToDoBlock>
      {!text
        ? null
        : text.map(( text, index ) => renderCheckbox(text, index))
      }
    </ToDoBlock>
  )
}

export default Block;