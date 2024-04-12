const Error = ({ title }: { title: string }) => {
    return (
        <>
            <h4 style={{ margin: 0, padding: 0, color: '#000' }}>{title}</h4>
            <p style={{ margin: 0, padding: 0, color: '#797979' }}>Something went wrong unable to load data. Please try again later.</p>
        </>
    )
}

export default Error