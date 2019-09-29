import * as React from 'react';
import {ReactFragment} from 'react';

interface Props {
  value: { [K: string]: any };
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler;
}

const Form: React.FunctionComponent<Props> = (props) => {
  return (
    <form>
      {props.fields.map(f =>
        <div key={f.name}>
          {f.label}
        </div>
      )}
      <div>
        {props.buttons}
      </div>
    </form>
  );
};

export default Form;