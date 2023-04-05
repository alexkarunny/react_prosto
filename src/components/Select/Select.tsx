import {SelectItemsType} from '../../App';

type SelectPropsType = {
    isSelectCollapsed: boolean
    titleSelect: string
    selectItems: SelectItemsType
    collapseSelectHandler: () => void
    titleSelectHandler: (id: number) => void
}

export const Select = (props: SelectPropsType) => {

    return (
        <div>
            <h1 onClick={props.collapseSelectHandler}>{props.titleSelect}</h1>
            {!props.isSelectCollapsed &&
                <SelectBody selectItems={props.selectItems} titleSelectHandler={props.titleSelectHandler}/>}
        </div>
    )
}

type SelectBodyPropsType = {
    selectItems: SelectItemsType
    titleSelectHandler: (id: number) => void
}

const SelectBody = (props: SelectBodyPropsType) => {
    return (
        <div>
            <ul>
                {props.selectItems.map(i => <li key={i.id}
                                                onClick={() => props.titleSelectHandler(i.id)}>{i.title}</li>)}
            </ul>
        </div>
    )
}