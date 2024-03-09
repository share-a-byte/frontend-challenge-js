/* eslint-disable */
import Flex from '../../layout/flex';
import * as Styled from './styles';

function Confirm({ name }) {
    return (
        <Styled.Confirm className="confirm-div">
            <Flex flexDirection="row">
                <img src='/assets/katie.png' />
                <Styled.ConfirmBlurb>
                    Hi, {name}, thank you for submitting the form. We will check and get back to you within 2 business days.
                </Styled.ConfirmBlurb>
            </Flex>
        </Styled.Confirm>
    );
}

export default Confirm;
