import * as React from 'react';
import {WrappedFieldProps} from 'redux-form';
const style = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '10px',
    padding: '10px 15px',
    width: 'calc(100% - 30px)',

};
const stylesSpan = {
    color: '777',
    fontSize: '10px',
    fontWeight: 900,
    textTransform: 'uppercase',
} as React.CSSProperties

interface IIputProps {
    placeholder?: string
    label: string
}


const Input: React.StatelessComponent<WrappedFieldProps &  IIputProps> =(props)=>{

    const {label}=props;
    

    return (
        <div>
            <span style={stylesSpan}> {label} </span>
            <input {...props} {...props.input} style={style} />

        </div>


    )


}
export default Input

/* export default class Input extends React.Component<IIputProps> {
    public render() {
        const {label}=this.props;

        return (
            <div>
                <span style={stylesSpan}> {label} </span>
                <input {...this.props} style={style} />

            </div>


        )
    }
} */
