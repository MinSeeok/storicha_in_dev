import cookie from "cookie";

export default (req, res) => {
    console.log('123111');
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", req.body.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60,
            sameSite: "strict",
            path: "/",
        })
    );
    res.setHeader(
        "Set-Cookie",
        cookie.serialize('.stori_cookie', req.body.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60,
            sameSite: "strict",
            path: "/",
        })
    )
    res.statusCode = 200;
    res.json({ success: true });
};

