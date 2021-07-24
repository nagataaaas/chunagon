import React from 'react';
import styled from 'styled-components';

type InputFormProps = {
  type: 'text' | 'password';
  placeholder: string;
};

type StyleProps = {
  size?: 'small' | 'large';
};

const Wrapper = styled.div`
  box-sizing: border-box;
`;

const StyledInputForm = styled.input<StyleProps>`
  font-size: 16px;
  width: 100%;
  border: none;
  outline: none;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const UnderLine = styled.div`
  position: relative;
  border-top: 1px solid #c2c2c2;
`;

export const InputForm = (props: InputFormProps) => {
  const { type, placeholder } = props;
  return (
    <Wrapper>
      <StyledInputForm type={type} placeholder={placeholder} />
      <UnderLine />
    </Wrapper>
  );
};
