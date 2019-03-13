import { ReactNode, ReactElement } from 'react';
import { TriggerEvent } from '../types';
export declare function cloneItem(children: ReactNode, props: {
    nativeEvent: TriggerEvent;
    propsFromTrigger?: object;
}): ReactElement<any, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>[];
