import * as React from 'react';
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
export default class Input extends React.Component<IIputProps> {
    public render() {
        const {label}=this.props;

        return (
            <div>
                <span style={stylesSpan}> {label} </span>
                <input {...this.props} style={style} />

            </div>




        )
    }
}
