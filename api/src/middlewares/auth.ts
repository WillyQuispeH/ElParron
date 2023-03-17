const auth = (req: any, res: any, next: any) => {
  if (req.headers.id !== "Hola") {
    res.status(401).json({ message: "No autorizado" });
    return;
  }
  return next();
};
export {auth};
