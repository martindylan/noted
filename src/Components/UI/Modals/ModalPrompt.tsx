import WindowedSection from 'Components/UI/WindowedSection/WindowedSection';
import ButtonText from 'Components/UI/ButtonText/ButtonText';

interface IConfirmActionProps {
  title?: string;
  prompt?: string;
  acceptText?: string;
  cancelText?: string;
  isOpen: boolean;
  background?: string;
  close: () => void;
  onAccept: () => void;
}

const ModalPrompt = (props: IConfirmActionProps) => {
  const { title, prompt, acceptText, cancelText, isOpen, background, close, onAccept } = props;

  return (
    <WindowedSection title={title} isOpen={isOpen} close={close} background={background}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>{prompt || ''}</div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <ButtonText onClick={(e) => onAccept()}>
            {acceptText || 'Accept'}
          </ButtonText>
          <ButtonText onClick={(e) => close()}>
            {cancelText || 'Cancel'}
          </ButtonText>
        </div>
      </div>
    </WindowedSection>
  )
}

export default ModalPrompt;