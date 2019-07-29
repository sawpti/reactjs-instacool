import * as React from 'react';
const style={
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px 15px',
  
};
export default class Card extends React.Component {
    public render() {
        const {children}=this.props;
        return (

            <div style={style}>
                {children}
            </div>
        )
    }
}
