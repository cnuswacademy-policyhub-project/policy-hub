import { useState } from "react";
import { Modal } from "../../components";

export default {
    title: 'Components/Modal',
    component: Modal
}

export const Default = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(true)}>Show Modal</button>
            <Modal.Base visible={visible} onClose={() => setVisible(false)}>
                <h1>어서 와</h1>
                <button onClick={() => setVisible(false)}>닫기</button>
            </Modal.Base>
        </div>
    )
}