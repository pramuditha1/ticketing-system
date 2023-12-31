import express from "express";
import { currentUserRouter } from "./routes/current-user";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";
import { signUpRouter } from "./routes/signup";

import { erorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
const port = 3000;

app.use(express.json()); // Use built-in JSON middleware

app.use(currentUserRouter),
app.use(signInRouter),
app.use(signOutRouter),
app.use(signUpRouter),

app.all('*', () => {
    throw new NotFoundError
})

app.use(erorHandler);

app.listen(port, () => console.log(`Listening on port ${port}!`));
