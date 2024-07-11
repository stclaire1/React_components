function Title(props) {
    return (
        <div className="title">
            <h2>{props.mainTitle}</h2>
            <p>{props.informative}</p>
        </div>
    );
}

export default Title;