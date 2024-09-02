const express = require("express");
const router = express.Router();
const AccountRouter = require("../routes/account.router");
const RegisterRouter = require("../routes/register");
const userRouter = require("./user.router");

const Routes = [
    {
        path: "/account",
        route: AccountRouter
    },
    {
        path: "/auth",
        route: RegisterRouter
    },
    {
        path: "/",
        route: userRouter
    }
];


Routes.forEach((route) => {
    router.use( route.path, route.route)
});


module.exports = router;

