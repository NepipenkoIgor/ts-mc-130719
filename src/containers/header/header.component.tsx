import * as React from 'react';
import { ChangeEvent } from 'react';
import './header.component.css';

function debounce(ms: number) {
    return function (_target: Object, _propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        let timeoutId: number | null;
        const originalValue: Function = descriptor.value;
        return {
            ...descriptor,
            value(...args: unknown[]) {
                timeoutId ? clearTimeout(timeoutId) : null;
                timeoutId = setTimeout(() => {
                    // tslint:disable-next-line:no-invalid-this
                    originalValue.apply(this, args);
                }, ms);
            }
        };
    };
}

export interface IProps {
    search(term: string): void;
}


export class HeaderComponent extends React.Component<IProps> {

    @debounce(300)
    public onSearch(term: string): void {
        console.log(this)
        this.props.search(term);
    }

    public render(): JSX.Element {
        return <div className='row header'>
            Search: <input type='text'
                           onChange={(e: ChangeEvent<HTMLInputElement>) => this.onSearch.call(this, e.target.value)}/>
        </div>;
    }
}
