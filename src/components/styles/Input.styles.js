import styled from "styled-components";
import { vars } from "../../Css Vars/vars";

export const InputCont = styled.div`
  width: ${props => props.width};
  display: flex;
  flex-flow: row wrap;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  color: ${vars.color2};
`;

export const Inp = styled.input`
  width: 100%;
  min-height: 40px;
  border: 1px solid ${vars.color2};
  border-radius: 8px;
  margin-bottom: ${props => props.bottom ? props.bottom : '20px'};
  padding-left: 10px;
  font-size: 16px;
`;