import React from "react";
import {Box, Modal} from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 2,
};

export const Image = (props) => {
    const handleClose = () => props.setOpen(false);
    return (
        <div>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img
                        style={{maxWidth: "100%", maxHeight: "calc(100vh - 64px)"}}
                        src={props.image}/>
                </Box>
            </Modal>
        </div>
    );
};
