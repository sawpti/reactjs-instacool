import * as React from 'react';
import { Media } from 'react-bootstrap/';



export interface IProfileProps {
    urlfoto?: string
    trigger?: any
}

export default class Profile extends React.Component<IProfileProps> {
    public render() {
        const { urlfoto = "http://lorempixel.com/200/200" } = this.props
        return (



            <div  className="container">

                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={urlfoto}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Media Heading</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
    </p>
                    </Media.Body>
                </Media>
            </div>
        );
    }
}
