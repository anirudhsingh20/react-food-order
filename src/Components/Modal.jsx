import { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom"

const Modal = forwardRef(function ({ children }, ref) {
    const modalRef = useRef(ref);

    useEffect(() => {
        const modal = modalRef.current;

        () => {
            modal.close();
        }
    }, []);

    useImperativeHandle(ref, () => {
        return {
            open() {
                modalRef.current.showModal()
            },
            close() {
                modalRef.current.close();
            }
        }
    }, [])


    return createPortal(
        <dialog className="modal" ref={modalRef}>
            {children}
            <form method="dialog">
                <button className="button">close</button>
            </form>
        </dialog>
        , document.getElementById('modal'))
});

export default Modal;