import jwt from "jsonwebtoken";

export const authenticateToken = async (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) {
		return res.status(401).json({
			status: "error",
			message: "Token non fornito",
		});
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (error) {
		res.status(403).json({
			status: "error",
			message: "Token non valido",
		});
	}
};
