function formatMessage(message, maxLength) {
    if(message.length <= maxLength){
        return message;
    }else if (message.length > maxLength) {
        const modifiMessage = message.slice(0, maxLength);
        console.log(modifiMessage);
    }
}