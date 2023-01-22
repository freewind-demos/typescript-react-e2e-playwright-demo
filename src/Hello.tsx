import React, {FC} from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <h1>Play with playwright</h1>
    </div>;
}
