function comprar(producto) {
    const numero = "50671849197";
    const mensaje = `Hola, quiero realizar un pedido de ${producto}.`;
    const enlace = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlace, "_blank");
}