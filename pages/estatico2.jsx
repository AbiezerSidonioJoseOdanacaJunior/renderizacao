export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function estatico2(props) {
    return(
        <div>
            <h1>Eatatico#02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}