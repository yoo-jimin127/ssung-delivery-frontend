import { useState, memo } from 'react';
import { Button, ComponentContainer, Flex, SubTitle} from '@common/ssung-ui/components';
import styled from '@emotion/styled';

interface ShipState {
    value: string,
    disabled?: boolean,
    name: string
}

/**
 * SelectBox options
 */
const OPTIONS: ShipState[] = [
    {value: "default", name:"배송 상태를 선택해주세요."},
    {value: "sending", name:"발송"},
    {value: "collecting", name:"집하"},
    {value: "shipping", name:"배송 중"},
    {value: "arrival", name:"배송 완료"},
];

const Form = () => {
    return (
        <FormContainer>
            <Flex>
                <FlexForm>
                    <label style={{"marginTop":"10px"}}>이름</label>
                    <InputForm type="text" 
                        id='name'
                        name='name'
                        placeholder='이름' 
                    />
                </FlexForm>
                <FlexForm>
                    <label style={{"marginTop":"10px"}}>전화번호</label>
                    <InputForm type="tel" 
                        id='tel'
                        name='tel'
                    placeholder='전화번호' />
                </FlexForm>
                <FlexForm>
                    <label style={{"marginTop":"10px"}}>라벨지</label>
                    <InputForm type="text" 
                        id='identifier'
                        name='identifier'
                    placeholder='식별자를 입력해주세요' />
                </FlexForm>
            </Flex>
            <Flex>
                <FlexForm style={{"width":"40rem"}}>
                    <label style={{"marginTop":"0.7rem", "marginRight":"1.3rem", "marginLeft":"0.5rem"}}>날짜</label>
                    <InputForm type="date" 
                        name='start_data'
                        required
                        aria-required="true"
                        style={{"width":"15.5rem"}} />
                    <InputForm type="date" 
                        name='end_data'
                        required
                        aria-required="true"
                        style={{"width":"15.5rem"}} />
                </FlexForm>
                <FlexForm>
                    <label style={{"marginTop":"10px"}}>배송 상태</label>
                    <SelectBox options={OPTIONS} defaultValue="default"></SelectBox>
                </FlexForm>
            </Flex>
            <ButtonBox>
                <Flex flexDirection={'column'} justifyContent={'space-between'}>
                    <Button text={'초기화'} color={'#7b7b7b'} bgcolor={'#ffffff'} />
                    <Button text={'검색'} color={'#ffffff'} bgcolor={'#07d39f'} />
                </Flex>
            </ButtonBox>
        </FormContainer>
    )
}

const SelectBox = (props: ShipState) => {
    return (
        <Select>
            {props.options.map((option) => (
                <option
                    value={option.value}
                    defaultValue={props.defaultValue === option.value}
                >
                    {option.name}
                </option>
            ))}
        </Select>
    );
};

const FormContainer = styled.div`
    width: 70rem;
    height: 7rem;
    padding: 10px;
    margin: 0 auto;
    background-color: #f3f3f3;
    border-radius: 0.5rem;
`;

const FlexForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 20rem;
    height: 3rem;
    margin: 0.375rem 0;
    font-size: 1rem;
    font-weight: 500;
`;

const InputForm = styled.input`
    width: 12rem;
    height: 2rem;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 3px 3px 10px lightgray;

    &::placeholder {
        color: #bababa;
    }
`;

const Select = styled.select`
    width: 12rem;
    height: 2rem;
    border: none;
    color: #bababa;
    border-radius: 0.25rem;
    box-shadow: 3px 3px 10px lightgray;

    &::placeholder {
        color: #bababa;
    }

    &:focus {
        outline: none;
    }
`;

const ButtonBox = styled.div`
    position: absolute;
    top: 20vh;
    right: 6vw;
`;


export default memo(Form);