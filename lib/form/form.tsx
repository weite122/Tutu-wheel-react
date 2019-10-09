import * as React from 'react';
import {ReactFragment} from 'react';
import Input from '../input/input';
import classes from '../helpers/classes';
import './form.scss';

export interface FormValue {
  [K: string]: any
}

interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] }
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value};
    props.onChange(newFormValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <table>
        {props.fields.map(f =>
          <tr key={f.name} className={classes('tutu-form-tr')}>
            <td className="tutu-form-td">
              <span className="tutu-form-label">
                {f.label}
              </span>
            </td>
            <td className="tutu-form-td">
              <Input className={classes('tutu-form-input')}
                     type={f.input.type}
                     value={formData[f.name]}
                     onChange={(e) => onInputChange(f.name, e.target.value)}
              />
            </td>
            <div>{props.errors[f.name]}</div>
          </tr>
        )}
        <tr className="tutu-form-tr">
          <td className="tutu-form-td"/>
          <td className="tutu-form-td">
            {props.buttons}
          </td>
        </tr>
      </table>
    </form>
  );
};

export default Form;