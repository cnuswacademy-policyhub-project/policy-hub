import { Toast } from "../../components"

export default {
    title: 'Components/Toast'
}

export const Default = () => {
    return (
        <button onClick={() => Toast.show("안녕!", 3000)}>Show Toast</button>
    );
}