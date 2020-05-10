import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';
import Button from "../button/button";

export default function () {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const openModal = () => {
    const close= modal(<h1>你好
      <Button onClick={()=>close()}>close</Button>
    </h1>)
  }

  return (
    <div>
      <div>
        <h1>example 4</h1>
        <Button onClick={openModal}>
          modal
        </Button>
      </div>

      <div>
        <h1>example 3</h1>
        <Button onClick={() => alert('1')}>alert</Button>
        <Button onClick={() => confirm('1', () => {
          console.log('yes')},
          () => {
          console.log('no');
        })}>
          confirm
        </Button>
      </div>


      <div style={{position: 'relative', zIndex: 10,  color: 'red'}}>
        <h1>example 1</h1>
        <Button onClick={() => setX(!x)}>click</Button>
        <Dialog visible={x} buttons={
          [
            <Button onClick={() => {setX(false);}}>1</Button>,
            <Button onClick={() => {setX(false);}}>2</Button>
          ]
        } onClose={() => {setX(false);}}>
          <strong>hi</strong>
        </Dialog>
      </div>
      <div style={{position: 'relative', zIndex: 9}}>
        <h1>example 2</h1>
        <Button onClick={() => setY(!y)}>click</Button>
        <Dialog closeOnClickMask={true} visible={y} buttons={
          [
            <Button onClick={() => {setY(false);}}>1</Button>,
            <Button onClick={() => {setY(false);}}>2</Button>
          ]
        } onClose={() => {setY(false);}}>
          <strong>hi</strong>
        </Dialog>
      </div>

    </div>

  );
}