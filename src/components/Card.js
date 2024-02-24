export default function Card(props) {
    let name = props.name;
    let email = props.email;
    return (
        <div className="col-3 mx-auto m-3">
            <div className="card">
                <div className="card-header bg-dark text-white">{name}</div>
                <div className="card-body">{email}</div>
                <div className="btn btn-secondary">Visit Profile</div>
            </div>
        </div>
    );
}