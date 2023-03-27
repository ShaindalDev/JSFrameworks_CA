import { SecondButtonStyle } from './styles';

export default function SecondButton({ text, onClick}) {
    return (
        <SecondButtonStyle onClick={onClick}>{text}</SecondButtonStyle>
    );
}