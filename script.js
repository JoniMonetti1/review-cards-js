const reviews = [
    {
        name: 'Joe Down',
        area: 'Devops',
        description: 'Esta app de tareas es un game-changer en gestión de proyectos. La interfaz es intuitiva y la sincronización en tiempo real es impresionante. Como DevOps, aprecio especialmente la robustez del sistema y su capacidad de escalar. Sin embargo, sugeriría implementar una integración más sólida con herramientas de CI/CD para optimizar el flujo de trabajo de los desarrolladores. En general, una aplicación sobresaliente que simplifica enormemente la organización del trabajo.',
        photoUrl: 'img/pexels-italo-melo-881954-2379005.jpg'
    },
    {
        name: 'Bob Hates It',
        area: 'Frontend',
        description: 'Debo admitir que estoy gratamente sorprendido por esta app de tareas. La UI es limpia y responsive, algo que no siempre se logra en aplicaciones de productividad. La paleta de colores y la disposición de los elementos facilitan la navegación. Sin embargo, creo que hay margen de mejora en la animación de las transiciones entre vistas. También sugeriría añadir más opciones de personalización para el usuario. En general, un trabajo sólido que demuestra un buen entendimiento de las necesidades del usuario.',
        photoUrl: 'img/pexels-nkhajotia-1516680.jpg'
    },
    {
        name: 'Alice Loves It',
        area: 'Backend',
        description: 'Como desarrolladora backend, estoy impresionada con la estructura y eficiencia de esta aplicación de tareas. La velocidad de respuesta es excelente y la gestión de datos parece robusta. Sin embargo, creo que podríamos mejorar la escalabilidad implementando un sistema de caché más avanzado y optimizando algunas consultas a la base de datos. También sugeriría añadir más endpoints para análisis de datos. Estas mejoras podrían llevar la aplicación al siguiente nivel. En general, un trabajo excepcional que demuestra una sólida arquitectura backend.',
        photoUrl: 'img/pexels-pixabay-415829.jpg'
    },
    {
        name: 'Smith Lucas',
        area: 'Web Developer',
        description: 'Como desarrollador web full-stack, puedo apreciar tanto el frontend como el backend de esta aplicación de tareas. La integración entre ambas partes es fluida, proporcionando una experiencia de usuario coherente y eficiente. Me impresiona especialmente la funcionalidad de arrastrar y soltar para reorganizar tareas. Para futuras iteraciones, sugeriría implementar una API más completa que permita integraciones con otras herramientas populares de productividad. En general, una aplicación muy bien ejecutada que demuestra un enfoque holístico del desarrollo web.',
        photoUrl: 'img/pexels-david-garrison-1128051-2128807.jpg'
    }
];

let currentReviewIndex = 0;
const totalReviews = reviews.length;

let nextReview = () => {
    currentReviewIndex = (currentReviewIndex + 1) % totalReviews;
    displayReview(reviews[currentReviewIndex]);
}

let previusReview = () => {
    currentReviewIndex = (currentReviewIndex - 1 + totalReviews) % totalReviews;
    displayReview(reviews[currentReviewIndex]);
}

let randomReview = () => {
    currentReviewIndex = Math.floor(Math.random() * reviews.length);
    displayReview(reviews[currentReviewIndex]);
}

let getCurrentReview = () => {
    return reviews[currentReviewIndex];
}

let displayReview = (review) => {
    const currentReview = getCurrentReview();
    document.getElementById('photo').src = currentReview.photoUrl;
    document.getElementById('name').textContent = currentReview.name;
    document.getElementById('area').textContent = currentReview.area;
    document.getElementById('description').textContent = currentReview.description;
}

