import React, { Fragment, useMemo } from 'react';

interface IProps<T> {
    data: Array<T>;
    tag: string | any;
    itemTag: string | any;
    className?: string;
    isWrapper?: boolean;
    itemClassName?: string;
    setKey: (props: T, idx: number) => number | string;
    component: (props: T, idx: number) => React.ReactNode;
}

const FlatList: React.FC<IProps<any>> = ({ data, setKey, component, className, itemClassName, isWrapper, tag: Tag, itemTag: ItemTag, ...rest }) => {
    
    console.log('rendeg-list');

    const dataMemo = useMemo(
        () => data.map((props, idx) => {
            const Component = component(props, idx)
            return  <Fragment key={setKey(props, idx)}>
                {isWrapper ? <ItemTag className={itemClassName}>{Component}</ItemTag> :  Component}
            </Fragment>
        }),[])

    return <Tag className={className} {...rest}>{dataMemo}</Tag>
}

FlatList.defaultProps = {
    tag: 'div',
    itemTag: 'div'
}

export default FlatList 