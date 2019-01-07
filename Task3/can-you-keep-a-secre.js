function createSecretHolder(secret) {
    return {
        getSecret: function () {
            return secret;
        },
        setSecret: function (givenSecret) {
            secret = givenSecret;
        }
    }
}