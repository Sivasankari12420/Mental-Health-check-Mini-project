const jwt = require('jsonwebtoken');

const secret = 'graduation';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // ["Bearer", "<token value>"]
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret);
            req.user = data;
        } catch (e) {
            console.log('Invalid token ' + e);
        }

        return req;
    },
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
