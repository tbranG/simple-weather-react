import "./textField.css"

interface Props {
    id: string,
    name: string,
    placeholder: string
}

export default function TextField(prop: Props) {
    return (
        <input type="text" className="textField" id={prop.id} name={prop.name} placeholder={prop.placeholder} />
    );
}