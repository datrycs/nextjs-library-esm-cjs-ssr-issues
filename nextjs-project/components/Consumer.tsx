import { useAuthContext } from "sample-lib";


export default function ExampleConsumer() {
    const context = useAuthContext()
    return <h3>Consumer data: {context.value}</h3>
}