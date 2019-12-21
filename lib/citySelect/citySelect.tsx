import React, {useState} from 'react';
import './citySelect.scss';
import ReactDOM from 'react-dom';

interface Props {

}

const CitySelect: React.FC<Props> = (props) => {
  const [dialogVisible, setDialogVisible] = useState(false)
  const onClick = () => {
    setDialogVisible(true)
  }
  return (
    <>
      <div onClick={onClick}>{props.children}</div>
      {dialogVisible && <Dialog onClose={() => setDialogVisible(false)}/>}
    </>
  );
};

const Dialog: React.FC<{ onClose: () => void }> = (props) => {
  return ReactDOM.createPortal((
    <div className="tutu-citySelect-dialog"
         onClick={props.onClose}
    >弹出内容</div>), document.body);
}

export default CitySelect;