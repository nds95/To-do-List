import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  margin: 0px 4px;
  border-radius: 50%;
  align-items: center;
`;

const InputBox = styled.input`
  display: none;
`;

const Label = styled.label<{ isChecked: boolean }>`
  width: 12px;
  height: 12px;
  background-color: ${({isChecked}) => isChecked ? 'transparent' : 'red'};
  border: 1px solid black;
  border-radius: 50%;
  margin: 0px 8px 16px 0px;
`;

const SpanContainer = styled.div`

`;

const Span = styled.span`
`;

const Divider = styled.hr`
  width: 450px;
`;

interface Props {
  text: string;
  index: number;
  type: 'checkbox' | 'number';
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

const CheckBox: React.FC<Props> = ({ text, index, type, id, onChange, isChecked }) => {

  return (
    <InputContainer>
      <InputBox type={type} id={id} onChange={onChange}></InputBox>
      <Label htmlFor={id} isChecked={isChecked}></Label>
      <SpanContainer>
        <Span>{text}</Span>
        {text.length === index + 1}<Divider></Divider>
      </SpanContainer>
    </InputContainer>
  )
}

export default CheckBox;