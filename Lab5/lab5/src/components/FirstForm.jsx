import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";


export default function FirstForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, topic, message);
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const isEmailValid = () => {
        const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        return regex.test(email) || email === "";
    }
    const isTopicValid = () => {
        return topic.length > 3 || topic === "";
    }

    return (
        <Box>
            <Typography variant="h6">Задай своє запитання, або повідом про порушення під час вступної
                кампанії</Typography>
            <form onSubmit={handleFormSubmit}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <TextField label={"Ім'я"} type={"text"}
                               value={name} onChange={handleNameChange} sx={{marginY: 2, width: 500}}/>
                    <TextField label={"E-mail"} type={"email"} required
                               error={!isEmailValid()} helperText={!isEmailValid() ? "Некоректний email" : ""}
                               value={email} onChange={handleEmailChange} sx={{marginY: 2, width: 500}}/>
                    <TextField label={"Тема"}
                               required error={!isTopicValid()}
                               helperText={!isTopicValid() ? "Повідомлення має бути довшим за 3 символів" : ""}
                               type={"text"} value={topic} onChange={handleTopicChange} sx={{marginY: 2, width: 500}}/>
                    <TextField label={"Повідомлення"} type={"textarea"} multiline minRows={4} maxRows={6}
                               value={message} onChange={handleMessageChange} sx={{marginY: 2, width: 500}}/>
                    <Typography variant="h6" color={"grey"}>Поля відмічені * мають бути обов'язково заповненими</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', width: 500}}>
                        <Button variant="contained" color="success" type={"submit"}>Відправити</Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
}